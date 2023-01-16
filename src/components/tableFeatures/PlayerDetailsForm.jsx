import React from 'react'
import { useState } from 'react'
import styles from './PlayerDetailsForm.css'
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
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("fullName")}
                type="text"
                placeholder=' Full Name'
            />
            <br />
            <input
                {...register("Phone")}
                type="text"
                placeholder=' Phone Number'
            />
            <br />
            <input
                {...register("Email")}
                type="email"
                placeholder=' E-mail Address'
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default PlayerDetailsForm;




