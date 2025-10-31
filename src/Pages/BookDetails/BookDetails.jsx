import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { addToStoreDB } from '../../Components/Utilities/AddToDB';
import { addToStoreDBWishList } from '../../Components/Utilities/AddToDBWish';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'



const BookDetails = () => {
    const { id } = useParams();
    // const data = useLoaderData();
     const [singleBook,setSingleBook]=useState({});
     
       useEffect(()=>{
           fetch("/booksData.json")
           .then(res=>res.json())
           .then(data=>{

    const item = data?.find(item => item.bookId === Number(id));
    setSingleBook(item)})
       },[id])
   

   

    const handleMarkAsRead = (id) => {
        addToStoreDB(id);
    }

    const handleMarkAsWishlist = (id) => {
        addToStoreDBWishList(id)
       
    }

    return (
        <div className='grid lg:grid-cols-2 gap-5 mt-5 mb-20'>
            <div className='bg-[#F3F3F3] col-span-1 w-full  rounded-2xl p-10 flex justify-center items-center'>
                <img className='w-80 h-120  mx-auto' src={singleBook?.image} alt="" />
            </div>
            <div className='space-y-3 col-span-1'>
                <h1 className='font-bold text-4xl'>{singleBook?.bookName}</h1>
                <p className='font-medium text-xl text-[rgb(19,19,19,80%)]'>By: {singleBook?.author}</p>
                <div className='border border-[rgb(19,19,19,15%)]'></div>
                <p className='font-medium text-xl text-[rgb(19,19,19,80%)]'>{singleBook?.category}</p>
                <div className='border border-[rgb(19,19,19,15%)]'></div>
                <p className='text-[rgb(19,19,19,70%)] text-base'>
                    <span className='text-base font-bold mr-1'>Review:</span>
                    {singleBook?.review}
                </p>
                <p>
                    <span className='text-base font-bold mr-1'>Tag:</span>
                    <button className='text-base text-[#23BE0A] font-medium bg-[rgb(35,190,10,5%)] px-2 py-1 rounded-3xl'>{singleBook?.tags?.[0]}</button>
                    <button className='text-base text-[#23BE0A] font-medium bg-[rgb(35,190,10,5%)] px-3 py-1 rounded-3xl ml-3'>{singleBook?.tags?.[1]}</button>

                </p>
                <div className='border border-[rgb(19,19,19,15%)]'></div>

                <div className="grid grid-cols-[180px_auto] gap-y-2">
                    <span className="text-base text-[rgb(19,19,19,70%)]">Number of Pages:</span>
                    <span className="font-semibold text-base work-sans-font">{singleBook?.totalPages}</span>

                    <span className="text-base text-[rgb(19,19,19,70%)]">Publisher:</span>
                    <span className="font-semibold text-base work-sans-font">{singleBook?.publisher}</span>

                    <span className="text-base text-[rgb(19,19,19,70%)]">Year of Publishing:</span>
                    <span className="font-semibold text-base work-sans-font">{singleBook?.yearOfPublishing}</span>

                    <span className="text-base text-[rgb(19,19,19,70%)]">Rating:</span>
                    <span className="font-semibold text-base work-sans-font">{singleBook?.rating}</span>
                    <div className='mt-3'>
                        <button
                            onClick={() => handleMarkAsRead(Number(id))}
                            className='btn text-lg font-semibold mr-1'
                        >Read</button>
                        <button
                            onClick={() => handleMarkAsWishlist(Number(id))}
                            className='btn text-lg font-semibold text-white bg-[#50B1C9]'>Wishlist</button>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default BookDetails;