import React from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
const BrandsPage = () => {
  const brands = useLoaderData()
  console.log(brands)
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-semibold">Brands</h2>
        <div className="flex items-center border px-4 py-2 rounded-full">
          <input type="text" className="w-80 grow outline-none" placeholder="Search" />
          <FaSearch className=" cursor-pointer"/>
        </div>
      </div>

      <div className="mt-8">
        {
          brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
        }
      </div>
    </div>
  );
};

export default BrandsPage;
