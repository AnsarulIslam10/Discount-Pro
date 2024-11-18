import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const TopBrands = () => {
  
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-14 mb-8">Top Brands</h2>    
      <Link to={'/brands'}>
        <Marquee pauseOnHover={true} speed={200} className="cursor-pointer flex space-x-10 items-center justify-center py-6 border-2 shadow-md">
        <img src="https://i.ibb.co.com/drRqtdV/Daraz-Logo.png" className="h-32" alt="" />
        <img src="https://i.ibb.co.com/vJs0z9s/bikroy.png" className="h-32" alt="" />
        <img src=" https://i.ibb.co.com/X8r1knQ/Pathao-Here-with-You.png" className="h-32" alt="" />
        <img src="https://i.ibb.co.com/fSG9KXF/Chaldal-com-logo.png" className="h-32" alt="" />
        <img src="https://i.ibb.co.com/LhLVMzb/Pickaboo.png" className="h-32" alt="" />
        <img src="https://i.ibb.co.com/5Tpdg7N/ajkerdeal.png" className="h-32" alt="" />
        </Marquee>
      </Link>
    </div>
  );
};

export default TopBrands;
