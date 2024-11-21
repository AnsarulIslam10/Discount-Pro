import React from "react";

const Newsletter = () => {
  return (
    <div className="hero my-24 rounded-xl bg-gradient-to-br from-[#28B5F6] to-[#60cdff] ">
      <div className="hero-content text-center py-14">
        <div className="max-w-2xl">
          <h1 className="sm:text-3xl text-lg text-white font-bold">
            Subscribe for our weekly email newsletter
          </h1>
          <p className="pt-4 pb-10 text-xs sm:text-sm text-gray-100">
            Stay updated with the latest deals, exclusive discounts, and special
            offers from your favorite brands. Subscribe now to never miss a chance
            to save big with Discount Pro!
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input shadow-md rounded-l-full rounded-r-none w-full max-w-xs"
            />
            <button className="btn bg-[#28b5f6] shadow-md hover:bg-[#209bd4] text-white border-none rounded-r-full">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
