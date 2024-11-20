import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import { Helmet } from 'react-helmet-async';
const BrandsPage = () => {
  const brands = useLoaderData();
  const [search, setSearch] = useState("");

  const searchedBrands = brands.filter((brand) => 
    brand.brand_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-8 mb-24">
      <Helmet>
        <title>Brands | Discount Pro</title>
      </Helmet>
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
        <h2 className="text-4xl font-bold">Brands</h2>
        <div className="flex items-center border px-4 py-2 rounded-full">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="sm:w-80 grow outline-none"
            placeholder="Search"
          />
          <FaSearch className=" cursor-pointer" />
        </div>
      </div>

      <div className="mt-8">
        {searchedBrands.length > 0 ? (
          searchedBrands.map((brand) => (
            <BrandCard key={brand._id} brand={brand}></BrandCard>
          ))
        ) : (
          <p className="text-center text-4xl text-gray-600">No brands found</p>
        )}
      </div>
    </div>
  );
};

export default BrandsPage;
