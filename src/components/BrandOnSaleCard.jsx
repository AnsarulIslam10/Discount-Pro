import React, { useEffect } from 'react';

const BrandOnSaleCard = ({brand}) => {
    
    return (
        <div className='border-2 p-6 rounded-md cursor-default duration-200  shadow-blue-100 shadow-lg text-center' data-aos="fade-up">
            <img className='w-32 h-32 object-contain mx-auto' src={brand.brand_logo} alt="" />
            <h3 className='text-3xl font-semibold mt-2 mb-2'>{brand.brand_name}</h3>
            <p className='text-red-700 font-medium text-xl'>Total Coupons: {brand.coupons.length}</p>
            <p className='text-gray-500 text-sm mt-1'>Category: {brand.category}</p>
        </div>
    );
};

export default BrandOnSaleCard;