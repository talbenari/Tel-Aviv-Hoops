import React, { useRef } from 'react'
import { Button, Input } from '@mui/material'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const PlayerDetailsForm = (props) => {
    const { register, handleSubmit, setValue } = useForm();


    const form = useRef();

    const onSubmit = async data => {

        emailjs.sendForm('service_5642dib', 'template_5iemp4h', form.current, 'IU5Tpj9smdI_hVVqI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        const res = await fetch("https://tlv-hoops-inputs-default-rtdb.europe-west1.firebasedatabase.app/PlayersData.json",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...data, Id: Math.random() })
            })


        setValue("fullName", "");
        setValue("Phone", "");
        setValue("Email", "");
        console.log(res);
    };

    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <input style={{display: 'none'}} value={props.court} name='court' type="text" />
            <input style={{display: 'none'}} value={props.time} name='time' type="text" />
            <input style={{display: 'none'}} value={props.date} name='date' type="text" />
            <Input
                style={{ marginBottom: '20px' }}
                name="fullName"
                {...register("fullName")}
                type="text"
                placeholder=' Full Name'
            />
            <br />
            <Input
                style={{ marginBottom: '20px' }}
                {...register("Phone")}
                type="text"
                placeholder=' Phone Number'
            />
            <br />
            <Input
                style={{ marginBottom: '20px' }}
                name='Email'
                {...register("Email")}
                type="email"
                placeholder=' E-mail Address'
            />
            <br />
            <Button variant='contained' type="submit">Submit</Button>
        </form>
    );
}

export default PlayerDetailsForm;




