import React from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const TopBrands = () => {
  const brands = useLoaderData();

  return (
    <div className="my-24">
      <h2 className="text-4xl font-bold text-center mb-2">
        Top Brands
      </h2>
      <p className="text-center mb-8 text-gray-500">Discover the brands with the highest ratings and top customer reviews.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {brands
          .filter((brand) => brand.rating >= 4.5)
          .map((brand) => (
            <div className="border p-4 flex flex-col items-center sm:items-start" key={brand._id}>
              <h3 className="text-lg font-semibold">{brand.brand_name}</h3>
              <div className="flex justify-center md:justify-normal items-center">
                <ReactStars
                  count={5}
                  value={brand.rating}
                  size={24}
                  activeColor="#ffd700"
                />
                <p>({brand.rating})</p>
              </div>
            </div>
          ))}
      </div>
      <Link to={"/brands"}>
        <Marquee
          pauseOnHover={true}
          speed={200}
          className="cursor-pointer flex gap-10 items-center justify-center py-6 border-2 shadow-md"
        >
          <img
            src="https://i.ibb.co.com/drRqtdV/Daraz-Logo.png"
            className="h-32"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/bvvF3Qd/KFC-Logo-wine.png"
            className="h-32"
            alt=""
          />
          <img
            src=" https://i.ibb.co.com/nPLrSb6/BDSHOP-LOGO-TM.png"
            className="h-32"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/NZWr0KJ/startech.png"
            className="h-32"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/LhLVMzb/Pickaboo.png"
            className="h-32"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/h1ZhDBT/Official-Logo-of-Ryans-Computers-Limited.png"
            className="h-24"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/X8r1knQ/Pathao-Here-with-You.png"
            className="h-32"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/VDxLCwt/asrmart.png"
            className="h-32"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/XXBfkhy/megamart.png"
            className="h-32"
            alt=""
          />
        </Marquee>
      </Link>
    </div>
  );
};

export default TopBrands;
