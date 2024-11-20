import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'
const MainLayout = () => {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <div>
      <div className="w-11/12 mx-auto max-w-[1400px]">
        <Header></Header>
        <div className="min-h-[calc(100vh-300px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
