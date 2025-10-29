import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../../Components/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    // const data=useLoaderData();
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("booksData.json")
        .then(res=>res.json())
        .then(d=>setData(d))
    },[])
    return (
        <div>
            <Banner/>
            <Books data={data}/>
        </div>
    );
};

export default Home;