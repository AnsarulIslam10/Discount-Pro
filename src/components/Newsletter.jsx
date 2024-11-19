import React from "react";

const Newsletter = () => {
  return (
    <div className="hero my-24 rounded-xl" style={{
        backgroundImage: `url('https://i.ibb.co.com/dJvCnWp/snowflick.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="hero-content text-center py-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl text-white font-bold">
            Subscribe for our weekly email newsletter
          </h1>
          <p className="pt-4 pb-10 text-sm text-gray-100">
            Stay updated with the latest deals, exclusive discounts, and special
            offers from your favorite brands. Subscribe now to never miss a chance
            to save big with Discount Pro!
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input rounded-l-full rounded-r-none w-full max-w-xs"
            />
            <button className="btn bg-[#28b5f6] text-white border-none rounded-r-full">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
