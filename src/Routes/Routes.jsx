import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import { Component } from "react";
import Login from "../Pages/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBook from "../Pages/ListedBook/ListedBook";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: () => fetch("booksData.json"),
                // path: "/",
                Component: Home,
            },
            {
                path:"/listed-book",
                  loader: () => fetch("booksData.json"),
                Component:ListedBook
            },
            {
                path: '/sign-in',
                Component: Login,
            },
            {
                path: '/sign-up',
                Component: SignUp,
            },
            {
                path:'/book-details/:id',
                loader:()=>fetch("booksData.json"),
                Component:BookDetails
            },
            {
                path:'/pages-read',
                Component:PagesToRead
            }
        ]
    }
])