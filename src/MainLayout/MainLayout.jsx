import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto max-w-[1400px]">
        <Header></Header>
        <div className="min-h-[calc(100vh-291.91px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
