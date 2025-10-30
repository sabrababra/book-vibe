import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
       <div>
         <div className='w-10/12 mx-auto playfair-display-font'>
            <Navbar/>
            <Outlet/>
            
        </div>
        <Footer/>
       </div>
    );
};

export default Root;