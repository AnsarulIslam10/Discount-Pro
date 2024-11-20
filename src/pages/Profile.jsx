import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="border md:w-8/12 mb-24 mx-auto bg-blue-100 rounded-xl mt-12">
      <Helmet>
        <title>Profile | Discount Pro</title>
      </Helmet>
      <div
        className="h-60 flex justify-center rounded-t-xl items-center"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/8zgGM7H/eb2008831992ed678bf4246d3b6e1b5d.gif')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="md:text-3xl text-xl sm:text-2xl font-semibold text-white">
          Welcome to your profile
        </h2>
      </div>
      <div className="p-4 relative -top-24 flex flex-col justify-center items-center">
        <img
          className="w-56 bg-white h-56 object-cover rounded-full border-8 border-white mb-4"
          src={user.photoURL}
          alt=""
        />
        <h2 className="text-2xl mb-2 font-semibold">{user.displayName}</h2>
        <p className="text-gray-500">{user.email}</p>
        <Link
          to={"/update-profile"}
          className="btn bg-[#28B5F6] border-none text-white mt-6"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
