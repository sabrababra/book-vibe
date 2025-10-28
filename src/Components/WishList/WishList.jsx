import React from 'react';
import location from '../../assets/images/location.png'
import publisherIcon from '../../assets/images/publisher.png'
import bookIcon from '../../assets/images/bookIcon.png'
import { Link } from 'react-router';


const WishList = ({book}) => {
    
      const { image, author, bookName, category, publisher, rating, tags, totalPages, yearOfPublishing, bookId } = book
    return (
        <div className='border-1 border-[rgb(19,19,19,15%)] p-5 rounded-2xl flex gap-5 my-5'>
                    <div className='bg-[#F3F3F3] rounded-2xl p-10 '>
                        <img className='w-30 h-48  mx-auto' src={image} alt="" />
                    </div>
                    <div className=' space-y-3'>
                        <h1 className='font-bold text-2xl'>{bookName}</h1>
                        <h4 className='text-[rgb(19,19,19,80%)] text-base font-medium'>By: {author}</h4>
                        <div className=' space-y-3'>
                            <p className='text-base font-bold'>
                                Tag:
                                <button className=' ml-1 text-base text-[#23BE0A] font-medium bg-[rgb(35,190,10,5%)] px-2 py-1 rounded-3xl'>{tags[0]}</button>
                                <button className='text-base text-[#23BE0A] font-medium bg-[rgb(35,190,10,5%)] px-3 py-1 rounded-3xl ml-3'>{tags[1]}</button>
                            </p>
                            <div className='flex items-center gap-3 text-base text-[rgb(19,19,19,80%)]'>
                                <img src={location} alt="" />
                                Year of Publishing: <span className='work-sans-font'>{yearOfPublishing}</span>
                            </div>
                            <div className='flex items-center gap-3 '>
                                <div className='flex items-center gap-3 text-base text-[rgb(19,19,19,60%)]  '>
                                    <img src={publisherIcon} alt="" />
                                    Publisher: <span className='ml-1'>{publisher}</span>
                                </div>
                                <div className='flex items-center gap-3 text-base text-[rgb(19,19,19,60%)] '>
                                    <img src={bookIcon} alt="" />
                                    Page: <span className='ml-1 work-sans-font'>{totalPages}</span>
                                </div>
                            </div>
        
                        </div>
                        <div className='space-x-3'>
                            <button className='text-base text-[#328EFF] font-medium bg-[rgb(50,142,255,15%)] px-3 py-1 rounded-3xl'>Category: {category}</button>
        
                            <button className='text-base text-[#FFAC33] font-medium bg-[rgb(255,172,51,15%)] px-3 py-1 rounded-3xl'>Rating: {rating}</button>
        
                            <Link to={`/book-details/${bookId}`}>
                                <button className='text-base text-white font-medium bg-[#23BE0A] px-3 py-1 rounded-3xl'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
    );
};

export default WishList;