import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { FaCopy, FaRocket } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
const BrandDetails = () => {
  const { brand_name, brand_logo, rating, coupons, shop_link } =
    useLoaderData();
  const handleCopy = () => {
    toast.success("Coupon code copied to clipboard");
  };
  return (
    <div className="mt-8 mb-8">
      <Helmet>
        <title>Brand Coupons | Discount Pro</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center gap-4 shadow-md shadow-blue-200 border p-4">
        <img className="w-56" src={brand_logo} alt="" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold">{brand_name}</h2>
          <div className="flex items-center">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              activeColor="#ffd700"
            />
            <p>({rating})</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-6">
        {coupons.map((coupon, idx) => (
          <div
            key={idx}
            className="border cursor-default hover:scale-105 transition-all duration-200  shadow-blue-200 shadow-md rounded-xl flex flex-col justify-between h-full p-6 space-y-1 text-gray-600"
          >
            <div className="mb-4">
              <h3 className="text-2xl text-black font-semibold mb-4">
                {coupon.description}
              </h3>
             <div className="p-3 bg-gray-50 shadow-inner border shadow-blue-200 space-y-1 rounded-xl">
             <p>
                <span className="font-medium text-black">Description:</span>{" "}
                {coupon.description}
              </p>
              <p>
                <span className=" font-medium text-black">Expires:</span>{" "}
                {coupon.expiry_date}
              </p>
              <p>
                <span className="font-medium text-black">Conditions:</span>{" "}
                {coupon.condition}
              </p>
              <p>
                <span className="font-medium text-black">Type:</span>{" "}
                {coupon.coupon_type}
              </p>
             </div>
            </div>

            <div className="flex flex-col gap-2">
              <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                <button className="btn bg-[#28b5f6] hover:bg-[#1d93ca] text-white">
                  Copy Code
                  <FaCopy />
                </button>
              </CopyToClipboard>
              <a href={shop_link} target="_blank" className="btn btn-outline border-[#28b5f6] text-[#28b5f6]">
                Use Now
                <FaRocket />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
