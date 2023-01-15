import React from 'react'
import { useState } from 'react'
import styles from './PlayerDetailsForm.css'


const PlayerDetailsForm = () => {

    const [details, setDetails] = useState({
        fullName: '',
        Phone: '',
        email: '',
        Id: Math.random()

    })

    const PostData = async (e) => {
        e.preventDefault()

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
            <input type='text' placeholder=' Full name' onChange={(e) =>
                setDetails({ ...details, fullName: e.target.value })} />
            <br />
            <input type='text' placeholder='Phone' onChange={(e) =>
                setDetails({ ...details, Phone: e.target.value })} />
            <br />
            <input type='email' placeholder=' Email address' onChange={(e) =>
                setDetails({ ...details, email: e.target.value })} />
            <br />
            <button onClick={PostData}>Submit</button>
        </div>
    )
}

export default PlayerDetailsForm




