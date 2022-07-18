import { Button, Card, CardActions, CardContent } from '@mui/material';
import React from 'react';
import useData from '../Hooks/useData';
import { Link } from 'react-router-dom';

const ShowData = ({list}) => {
    const { _id } = list


    const [lists, setList] = useData()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/list/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = lists.filter(list => list._id !== id);
                    setList(remaining);
                })
        }
    }
   
    return (
        <div>
            <div className='mt-5'>
                <div class="col">

                    <Card>
                        <CardContent>
                            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                be{bull}nev{bull}o{bull}lent
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography> */}
                          <p>Product Name : {list.name}</p>
                            <p>product price  : {list.price} $</p>
                        </CardContent>
                        <CardActions>
                            <Link to={`/editInfo/${list._id}`}>
                                <Button variant="contained" color="success">
                                    Edit
                                </Button>
                            </Link>
                            <Button className='ms-3' onClick={() => handleDelete(list._id)} variant="outlined" color="error">
                                Delete
                            </Button>
                        </CardActions>
                    </Card>

                    </div>
                    </div>
            
        </div>
    );
};

export default ShowData;