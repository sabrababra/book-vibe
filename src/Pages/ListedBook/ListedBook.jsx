import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import arrow from '../../assets/images/buttonArrow.png';
import { useLoaderData } from 'react-router';
import { getStoreBooks } from '../../Components/Utilities/AddToDB';
import ReadBooks from '../../Components/ReadBooks/ReadBooks';
import { getStoreBooksWishList } from '../../Components/Utilities/AddToDBWish';

const ListedBook = () => {
    const [sort, setSort] = useState('');
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedReadBooks = getStoreBooks();
        const storeReadBooksNum = storedReadBooks.map(id => Number(id));
        const filterBookList = data.filter(book => storeReadBooksNum.includes(book.bookId));
        setReadList(filterBookList);
    }, [data])

    useEffect(() => {
        const storedWishBooks = getStoreBooksWishList();
        const storeWishBooksNum = storedWishBooks.map(id => Number(id));
        const filterWishBookList = data.filter(book => storeWishBooksNum.includes(book.bookId));
        setWishList(filterWishBookList)
    }, [data])



    const handleShort = (type) => {
        setSort(type)
        if (type === "page") {
            const shortedByReadListPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            const shortedByWishListPage = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(shortedByReadListPage)
            setWishList(shortedByWishListPage)
        } else if (type === 'rating') {
            const sortByReadListRating = [...readList].sort((a, b) => b.rating - a.rating);
            const sortByWishListRating = [...wishList].sort((a, b) => b.rating - a.rating);
            setReadList(sortByReadListRating)
            setWishList(sortByWishListRating)
        }
    }

    return (
        <div>
            <div className='bg-[rgb(19,19,19,5%)] rounded-2xl p-5 w-full mt-5'>
                <h1 className='text-center font-bold text-2xl'>Books</h1>
            </div>
            <div className='flex  justify-center items-center'>
                <div className="dropdown dropdown-bottom dropdown-end  mt-5">
                    <div tabIndex={0} className="btn m-1 bg-[#23BE0A] text-white text-base font-semibold rounded-lg ">Short By:{sort ? sort : ""} <img src={arrow} alt="" /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleShort("page")}><a>Pages</a></li>
                        <li onClick={() => handleShort("rating")}><a>Rating</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='mt-5'>
                        {
                            readList.map(book => <ReadBooks
                                key={book.bookId}
                                book={book}
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='mt-5'>
                        {
                            wishList.map(book => <ReadBooks
                                key={book.bookId}
                                book={book}
                            />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default ListedBook;