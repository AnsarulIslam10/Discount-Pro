import React from 'react';

const BrandOnSaleCard = ({brand}) => {
    return (
        <div className='border-2 p-6 rounded-md shadow-lg text-center'>
            <img className='w-32 h-32 object-contain mx-auto' src={brand.brand_logo} alt="" />
            <h3 className='text-3xl font-semibold mt-2 mb-2'>{brand.brand_name}</h3>
            <p className='text-gray-500 text-lg'>Category: {brand.category}</p>
            <p className='text-gray-700 text-lg'>Total Coupons: {brand.coupons.length}</p>
        </div>
    );
};

export default BrandOnSaleCard;