import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
           <div className='h-16'>
            <Navbar/>
            </div> 
            <div className=''>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;