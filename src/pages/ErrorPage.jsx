import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center min-h-screen">
      <Helmet>
        <title>ErrorPage | Discount Pro</title>
      </Helmet>
      <h1 className="text-7xl font-bold text-red-600">404</h1>
      <h2 className="text-6xl font-semibold">Not Found</h2>
      <p className="text-lg font-medium text-gray-400 mt-3">
        The page you are looking for doesn't exist or has beed moved.
      </p>
      <Link to={"/"} className="btn bg-[#28b5f6] text-white mt-4">
        Go Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
