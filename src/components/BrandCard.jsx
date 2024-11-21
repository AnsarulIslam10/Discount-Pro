import React from "react";
import { FaInfo } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
const BrandCard = ({ brand }) => {
  return (
    <div  data-aos="fade-up" className="mb-6 p-8 flex md:flex-row flex-col text-center md:text-start md:justify-between items-center shadow-md shadow-blue-100">
      <div className=" flex flex-col text-center items-center gap-4">
        <div className="border h-24 flex justify-center items-center p-2 rounded-xl">
          <img
            className="w-32 h-16 object-contain"
            src={brand.brand_logo}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-lg font-semibold">{brand.brand_name}</h2>
          <div className="flex justify-center md:justify-normal items-center text-sm">
            <ReactStars
              count={5}
              value={brand.rating}
              size={20}
              activeColor="#ffd700"
            />
            <p>({brand.rating})</p>
          </div>
        </div>
      </div>

      <div className="text-center md:space-y-4">
        <h2 className="text-3xl hidden md:block font-semibold">
          {brand.brand_name}
        </h2>
        <p className="max-w-lg px-3 mt-3">{brand.description}</p>
      </div>

      <div className="flex flex-col items-center mt-10 md:mt-0">
        {brand.isSaleOn && (
          <p className="animate__animated animate__bounce animate__infinite text-lg text-red-500 font-semibold flex items-center">
            On Sale <MdOutlineDiscount />{" "}
          </p>
        )}
        <NavLink to={`/brand/${brand._id}`}>
          <button className="btn bg-[#28b5f6] text-white rounded-md">
            View Coupons<RiCoupon2Fill></RiCoupon2Fill>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BrandCard;
