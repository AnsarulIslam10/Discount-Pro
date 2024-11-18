import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                user && <div className='flex flex-col justify-center items-center bg-blue-50 p-2'>
                    <h1 className='text-lg font-medium'>Welcome, {user.displayName}.</h1>
                    <p className='text-sm text-gray-600'>Let's grab some amazing deals today!!</p>
                </div>
            }
            <Navbar></Navbar>
        </div>
    );
};

export default Header;