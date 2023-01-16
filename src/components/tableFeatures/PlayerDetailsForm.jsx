import React from 'react'
import { useState } from 'react'
// import styles from './PlayerDetailsForm.css'
import { Button, Input } from '@mui/material'
const PlayerDetailsForm = () => {

    const [details, setDetails] = useState({
        fullName: '',
        Phone: '',
        email: '',
        Id: Math.random()

    })

    const PostData = async (e) => {
        e.preventDefault();

        const { fullName, Phone, email, Id } = details;

        const res = await fetch("https://tlv-hoops-inputs-default-rtdb.europe-west1.firebasedatabase.app/PlayersData.json",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName,
                    Phone,
                    email,
                    Id

                })
            })

    }

    return (
        <div className='form' >
            <Input style={{ marginBottom: '30px' }} type='text' placeholder=' Full Name' onChange={(e) =>
                setDetails({ ...details, fullName: e.target.value })} />
            <br />
            <Input style={{ marginBottom: '30px' }} type='text' placeholder='Phone Number' onChange={(e) =>
                setDetails({ ...details, Phone: e.target.value })} />
            <br />
            <Input style={{ marginBottom: '30px' }} type='email' placeholder=' E-mail Address' onChange={(e) =>
                setDetails({ ...details, email: e.target.value })} />
            <br />
            <Button variant='contained' style={{ marginBottom: '20px' }} onClick={PostData}>Submit</Button>
        </div>
    )
}

export default PlayerDetailsForm




