import React from 'react';
import bannerImg from '../../assets/images/banner-img.png'

const Banner = () => {
    return (
        <div className='bg-[rgb(19,19,19,5%)] px-5 py-10 mt-10 rounded-3xl'>
            <div className='lg:flex items-center justify-center'>
                <div className='font-bold text-4xl w-1/2 mx-auto space-y-3'>
                    <h1>Books to freshen up your bookshelf</h1>
                    <button className='bg-[#23BE0A] text-white btn font-bold text-lg rounded-lg'>View The List</button>
                </div>

                <div>
                    <img className='lg:w-full lg:h-full sm:w-1/2 sm:mx-auto' src={bannerImg} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;