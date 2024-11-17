import React from 'react';
import Banner from '../components/Banner';
import TopBrands from '../components/TopBrands';
import BrandsOnSale from '../components/BrandsOnSale';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <TopBrands></TopBrands>
            <BrandsOnSale></BrandsOnSale>
        </div>
    );
};

export default HomePage;