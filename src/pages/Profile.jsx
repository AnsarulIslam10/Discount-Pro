import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="border md:w-8/12 mb-24 mx-auto bg-blue-50 shadow-blue-100 shadow-md rounded-xl mt-12">
      <Helmet>
        <title>Profile | Discount Pro</title>
      </Helmet>
      <div 
        className="h-60 flex justify-center rounded-t-xl bg-gradient-to-br  from-[#28B5F6] to-[#60cdff] items-center"
      >
        <h2 className="md:text-3xl text-xl text-center sm:text-2xl font-semibold text-white">
          Hello <span className="text-blue-900">{user.displayName}</span> <br />welcome to your profile
        </h2>
      </div>
      <div className="p-4 relative -top-24 flex flex-col justify-center items-center">
        <img
          className="w-56 bg-white p-1 h-56 object-cover rounded-full border-4 border-blue-500 mb-4"
          src={user.photoURL}
          alt=""
        />
        <h2 className="text-2xl mb-2 font-semibold">{user.displayName}</h2>
        <p className="text-gray-500">{user.email}</p>
        <Link
          to={"/update-profile"}
          className="btn bg-[#28B5F6] border-none text-white mt-6"
        >
          Update Profile<FaEdit className="text-lg"/>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
