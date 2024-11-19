import React from "react";
import { MdOutlineDiscount } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
const BrandCard = ({ brand }) => {
  return (
    <div className="border mb-3 p-8 flex md:flex-row flex-col text-center md:text-start md:justify-between items-center shadow-md">
      <div className=" flex flex-col text-center items-center gap-4">
        <div className="border h-24 flex justify-center items-center p-2 rounded-xl">
        <img className="w-32" src={brand.brand_logo} alt="" />
        </div>
        <div>
            <h2 className="text-lg font-semibold">{brand.brand_name}</h2>
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
      </div>

      <div className="text-center md:space-y-4">
      <h2 className="text-lg hidden md:block font-semibold">{brand.brand_name}</h2>
          <p>{brand.description}</p>
      </div>
      
      <div className="flex flex-col items-center mt-8 md:mt-0">
        {brand.isSaleOn && (
          <p className="animate__animated animate__bounce animate__infinite text-lg text-red-500 font-semibold flex items-center">
            On Sale <MdOutlineDiscount />{" "}
          </p>
        )}
        <NavLink to={`/brand/${brand._id}`}>
          <button className="btn bg-[#28b5f6] text-white rounded-md">
            View Coupons
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BrandCard;
