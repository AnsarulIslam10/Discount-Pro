import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#28b5f6] text-xs sm:text-sm md:text-lg font-medium text-white rounded py-10 px-2 sm:p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col text-4xl gap-4">
          <a href="https://www.facebook.com/ansarulislamriyad" target="_blank" className="hover:scale-125 transition-all duration-200"><FaFacebook /></a>
          <a href="https://github.com/AnsarulIslam10" target="_blank" className="hover:scale-125 transition-all duration-200"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ansarul-islam-32a229318/" target="_blank" className="hover:scale-125 transition-all duration-200"><FaLinkedin /></a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Ansarul Islam
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
