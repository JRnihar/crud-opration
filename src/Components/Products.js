import React from 'react';
import useData from '../Hooks/useData';
import ShowData from './ShowData';

const Products = () => {
    const [lists, setList] = useData()
    console.log(lists);
    return (
        <div>
            <h1 className=' text-center mt-5'>See All Products</h1>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    {
                        lists.map(list =>

                            <ShowData key={list._id} list={list}></ShowData>



                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;