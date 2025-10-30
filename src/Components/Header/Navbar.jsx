import React from 'react';
import { Link } from 'react-router';
import { useLocation } from "react-router";


const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const getLinkClass=(path)=>{
         return currentPath === path
            ? "btn btn-outline border-[#23BE0A] text-[#23BE0A] font-semibold mx-3"
            : "work-sans-font text-lg text-[rgb(19,19,19,80%)] mx-3";
    }

    const link = <>
        <Link className={getLinkClass('/')} to='/'>Home</Link>
            <Link className={getLinkClass('/listed-book')} to='/listed-book'>Listed Books</Link>
            <Link className={getLinkClass('/pages-read')} to='/pages-read'>Pages to Read</Link>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link to="/" className="work-sans-font font-bold text-2xl">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end space-x-5 ">
                <button className='btn font-semibold text-white text-base rounded-lg bg-[#23BE0A] work-sans-font'>
                    <Link to='/sign-in'>Sign in</Link>
                </button>
                <button className='btn font-semibold text-white text-base rounded-lg bg-[#59C6D2] work-sans-font'>
                    <Link to='/sign-up'>Sign up</Link>
                </button>
            </div>

        </div>
    );
};

export default Navbar;