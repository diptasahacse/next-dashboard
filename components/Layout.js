import React from 'react'
import NavBar from './shared/NavBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './shared/SideBar';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />

            <div className='flex bg-secondary'>
                <SideBar />
                <div className='rounded-lg w-full rounded-lg bg-accent'>
                    {
                        children
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Layout