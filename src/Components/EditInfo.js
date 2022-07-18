import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';

const EditInfo = () => {
    const { id } = useParams()
    const handleUpdate = async (e) => {
        e.preventDefault()
        // console.log(e);

        const name = e.target.name.value;
        const price = e.target.price.value;



        const info = {
            name,
            price
        }
       



        // // const url = `https://tranquil-mountain-71827.herokuapp.com/list/${id}`
        const url = `http://localhost:5000/list/${id}`
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Update Done')
            })
    }

    return (
        <div>
            <div className='w-50 mx-auto align-items-center mt-5'>
                <div>
                    <h2>Update  Your Products</h2>
                </div>
                <form className='d-flex flex-column mt-5' onSubmit={handleUpdate}>
                    <TextField name='name' id="standard-basic" label="Product-Name" variant="standard"  />
                    <TextField name='price' className='mt-4' type='number' id="standard-basic" label="price" variant="standard"  />

                    <input className='mt-5' type="submit" value='Add' />
                </form>

            </div>
            
        </div>
    );
};

export default EditInfo;