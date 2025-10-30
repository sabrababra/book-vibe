import React from 'react';
import star from '../../assets/images/star.png'
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    const {image,bookName,author,rating,category,tags,bookId}=singleBook
    return (
        <Link to={`/book-details/${bookId}`}>
            <div className='border border-[rgb(19,19,19,15%)] p-5 rounded-2xl h-[500px]'>
                <div className='bg-[#F3F3F3] rounded-2xl p-10'>
                    <img className='w-40 h-50  mx-auto' src={image} alt="" />
                </div>
                <div className='mt-3'>
                    <button className='text-base text-[#23BE0A] font-medium bg-[rgb(35,190,10,5%)] px-2 py-1 rounded-3xl'>{tags[0]}</button>
                    <button className='text-base text-[#23BE0A] font-medium bg-[rgb(35,190,10,5%)] px-3 py-1 rounded-3xl ml-3'>{tags[1]}</button>
                    <h1 className='text-2xl font-bold mt-2'>{bookName}</h1>
                    <h4 className='text-base font-medium mt-1 text-[rgb(19,19,19,80%)]'>By: {author}</h4>
                    <div className='border-b border-dashed mt-2 border-[rgb(19,19,19,15%)]'></div>
                    <div className='mt-5 flex items-center justify-between'>
                        <p className='text-base font-medium text-[rgb(19,19,19,80%)]'>{category}</p>
                        <div className='flex items-center justify-center gap-2'>
                            <p className='text-base font-medium text-[rgb(19,19,19,80%)] work-sans-font '>{rating}</p>
                            <img className='w-4 h-4' src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;