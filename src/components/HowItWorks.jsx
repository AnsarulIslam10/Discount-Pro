import React from 'react';
import { FaCopy, FaRocket, FaSearch } from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <div className='my-24'>
           <div className='text-center'>
           <h2 className='text-4xl font-bold'>How Discount Pro Works</h2>
           <p className='text-gray-500 px-10 mt-2 mb-8'>Saving has never been easier. Follow these simple steps to start getting discounts on your favorite brands!</p>
           </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate__animated animate__fadeIn animate__fast'>
                <div className='p-6 h-64 border rounded-xl'>
                    <div className='bg-blue-200 h-28 flex justify-center items-center rounded-md text-3xl mb-3'>
                        <FaSearch></FaSearch>
                    </div>
                    <h3 className='text-lg font-medium text-center'>Search for Coupons</h3>
                    <p className='text-sm text-gray-500 text-center mt-1'>Browse our Brands section and find the best descount coupons to save big money.</p>
                </div>
                <div className='p-6 border rounded-xl'>
                    <div className='bg-blue-200 h-28 flex justify-center items-center rounded-md text-3xl mb-3'>
                        <FaCopy></FaCopy>
                    </div>
                    <h3 className='text-lg font-medium text-center'>Copy Coupon Code</h3>
                    <p className='text-sm text-gray-500 text-center mt-1'>Click to copy the code, making it easy to use during checkout and save more!</p>
                </div>
                <div className='p-6 border rounded-xl'>
                    <div className='bg-blue-200 h-28 flex justify-center items-center rounded-md text-3xl mb-3'>
                        <FaRocket></FaRocket>
                    </div>
                    <h3 className='text-lg font-medium text-center'>Use the Coupon</h3>
                    <p className='text-sm text-gray-500 text-center mt-1'>Head to the retailer's site, use the coupon, and enjoy your winter savings!</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;