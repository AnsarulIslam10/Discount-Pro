import React from 'react';
import Banner from '../components/Banner';
import TopBrands from '../components/TopBrands';
import BrandsOnSale from '../components/BrandsOnSale';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <TopBrands></TopBrands>
            <BrandsOnSale></BrandsOnSale>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;