import React from "react";
import { MdOutlineDiscount } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
const BrandCard = ({ brand }) => {
  return (
    <div className="border mb-3 p-8 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4">
        <img className="w-32" src={brand.brand_logo} alt="" />
        <div>
          <div className="flex items-center">
            <ReactStars
              count={5}
              value={brand.rating}
              size={24}
              activeColor="#ffd700"
            />
            <p>({brand.rating})</p>
          </div>
          <h2 className="text-lg font-semibold">{brand.brand_name}</h2>
          <p>{brand.description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {
            brand.isSaleOn && <p className="animate__animated animate__bounce animate__infinite text-lg text-red-500 font-semibold flex items-center gap-1">On Sale <MdOutlineDiscount /> </p>
        }
        <NavLink to={`/brand/${brand._id}`}><button className="btn bg-[#28b5f6] text-white rounded-md">View Coupons</button></NavLink>
      </div>
    </div>
  );
};

export default BrandCard;
