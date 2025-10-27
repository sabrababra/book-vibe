import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../../Components/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    return (
        <div>
            <Banner/>
            <Books data={data}/>
        </div>
    );
};

export default Home;