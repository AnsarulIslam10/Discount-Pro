import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandOnSaleCard from "./BrandOnSaleCard";

const BrandsOnSale = () => {
  const brands = useLoaderData();

  const brandsOnSale = brands.filter((brand) => brand.isSaleOn);

  return (
    <div className="my-24">
        <h2 className="text-center text-4xl font-bold">Brands on Sale</h2>
        <p className="text-gray-500 text-center mt-2">Grab the best deals from top brands on sale! Limited-time offers you don't want to miss.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {brandsOnSale.map((brand) => (
        <BrandOnSaleCard key={brand._id} brand={brand}></BrandOnSaleCard>
      ))}
    </div>
    </div>
  );
};

export default BrandsOnSale;
