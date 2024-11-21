import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user && (
        <div className="flex flex-col justify-center items-center bg-blue-50 p-2">
          <h1 className="text-lg font-medium">
            Welcome, <span className="text-[#28b5f6]">{user.displayName}</span>
          </h1>
          <p className="text-sm text-red-500">
            Let's grab some amazing deals today!!
          </p>
        </div>
      )}
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
