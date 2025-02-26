import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FiHome, FiInfo, FiUser } from "react-icons/fi";
import { LuTags } from "react-icons/lu";
import Marquee from "react-fast-marquee";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLocalstorage =()=>{
    localStorage.clear()
  }
  const links = (
    <>
      <li>
        <NavLink to={"/"} className={({isActive}) => `btn btn-sm btn-ghost font-medium rounded-md hover:bg-[#65c4f0] ${isActive ? "bg-[#28b5f6] text-white" : ""}`}><FiHome></FiHome>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/brands"} className={({isActive}) => `btn btn-sm btn-ghost font-medium  hover:bg-[#65c4f0] rounded-md ${isActive ? "bg-[#28b5f6] text-white" : ""}`}><LuTags></LuTags>Brands</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/my-profile"} className={({isActive}) => `btn btn-sm btn-ghost font-medium  hover:bg-[#65c4f0] rounded-md ${isActive ? "bg-[#28b5f6] text-white" : ""}`}><FiUser></FiUser>My Profile</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/about"} className={({isActive}) => `btn btn-sm btn-ghost font-medium  hover:bg-[#65c4f0] rounded-md ${isActive ? "bg-[#28b5f6] text-white" : ""}`}><FiInfo></FiInfo>About Dev</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-0 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn mr-1 px-0 btn-ghost lg:hidden">
            <FaBars/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
            <Marquee><li className="mr-2">{user?.email}</li></Marquee>
          </ul>
        </div>
        <a className="md:text-3xl text-lg overflow-hidden sm:text-xl font-bold text-[#28b5f6]">Discount PRO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user && user?.email ? (
          <div className="flex items-center">
            <div className="flex items-center px-1">
            <p className="text-xs hidden md:block">{user.email}</p>
            <img className="w-10 h-10 border-2 border-blue-500 rounded-full ml-1" src={user?.photoURL} alt="" />
            </div>
            <button onClick={signOutUser} className="px-2 py-2 rounded-md font-semibold bg-[#28b5f6] text-sm text-white">Logout</button>
          </div>
        ) : (
          <div className="flex gap-1 sm:gap-2">
            <NavLink onClick={handleLocalstorage }
              to={"/login"}
              className={({ isActive }) =>
                `btn-sm btn sm:btn-md px-2 sm:px-3 btn-ghost rounded-md ${
                  isActive
                    ? " bg-[#28b5f6] text-white"
                    : "border-[#28b5f6] text-[#28b5f6] border-2"
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                `btn-sm btn sm:btn-md px-2 sm:px-3 btn-ghost rounded-md ${
                  isActive
                    ? " bg-[#28b5f6] text-white"
                    : "border-[#28b5f6] text-[#28b5f6] border-2"
                }`
              }
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
