import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Form() {
    const [formData, setFormData] = useState({
        id: 1001,
        name: "Deep Mandal"
    });

    const [details, setDetails] = useState([]);

    const handleForm = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const exists = details.some((item) => item.id === formData.id);

        if (exists) {
            alert("❌ ID already exists!");
            return; // stop here, don’t add duplicate
        }
        setDetails((prev) => (
            [...prev, formData]
        ))
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    Enter Name :
                    <Box
                        component="form"
                        sx={{ '& .MuiInputBase-input': { color: 'red', m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField name = "name" value={formData.name} onChange={handleForm} label="Write Name" color="secondary" focused />
                    </Box>
                </div>
                <div>
                    Enter Id :
                    <input type="text" value={formData.id} onChange={handleForm} name="id" />
                </div>
                <div>
                    <Button type="submit" variant="contained" color="success">
                        Submit
                    </Button>
                </div>

            </form>
            <div> Details :
                <ul>
                    {details.map((item, index) => (
                        <li key={index}>
                            Name: {item.name}, Id: {item.id}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}