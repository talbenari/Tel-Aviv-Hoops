import React from 'react'
import { Button, Input } from '@mui/material'
import { useForm } from "react-hook-form";

const PlayerDetailsForm = () => {
    const { register, handleSubmit, setValue } = useForm();



    const onSubmit = async data => {

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                style={{ marginBottom: '20px' }}
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




