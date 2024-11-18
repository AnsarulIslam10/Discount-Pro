import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/brands"}>Brands</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/my-profile"}>My Profile</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/about"}>About Dev</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-3xl font-bold text-[#28b5f6]">Discount PRO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user && user?.email ? (
          <div className="flex items-center">
            <div className="flex items-center px-2">
            <p className="text-xs">{user.email}</p>
            <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
            </div>
            <button onClick={signOutUser} className="btn bg-[#28b5f6] text-white">Log-Out</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `btn btn-ghost rounded-md ${
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
                `btn btn-ghost rounded-md ${
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
