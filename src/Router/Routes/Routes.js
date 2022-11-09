import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AllServices from '../../Pages/AllServices/AllServices';
import Blogs from '../../Pages/Blog/Blogs';
import Error from '../../Pages/ErrorPage/Error';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import SignUp from '../../Pages/SignUp/SignUp';




const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>
            },
            {
                path : '/allServices',
                element : <AllServices></AllServices>,
                loader : (() => fetch('http://localhost:5000/services'))
            },
            {
                path : '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
    {
        path : '*',
        element : <Error></Error>
    }
]);

export default router;