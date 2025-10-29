import React from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    console.log("data",data);
    return (
        <div className='mt-13 '>
            <h1 className='font-bold text-3xl text-center'>Book</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                {data?.map(singleBook => <Book
                    key={singleBook?.bookId}
                    singleBook={singleBook}
                />)}
            </div>

        </div>
    );
};

export default Books;