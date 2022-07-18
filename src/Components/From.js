import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const From = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        const url = `http://localhost:5000/list`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/products')
            })
        }
    return (
        <div className='w-50 mx-auto align-items-center mt-5'>
            <div>
                <h2>Add Your Products</h2>
            </div>
            <form className='d-flex flex-column mt-5' onSubmit={handleSubmit(onSubmit)}>
                <TextField id="standard-basic" label="Product-Name" variant="standard" {...register("name", { required: true })} />
                <TextField className='mt-4' type='number' id="standard-basic" label="Price" variant="standard" {...register("price")} />
               
                <input className='mt-5' type="submit" value='Add' />
            </form>
            
        </div>
    );
};

export default From;