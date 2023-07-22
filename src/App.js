import React from "react";
import ReactDOM from'react-dom';
import {createRoot} from 'react-dom/client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSec from "./components/LeftSec";
import RightSec from "./components/RightSec";
import Solution from './components/Solution';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const Body = () => {
    return (
            <div className="sections">
                <LeftSec />
                <Outlet />
            </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
         {   
            path: "/solve/:id",
            element: <RightSec/>
         }
        ],
    }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)

