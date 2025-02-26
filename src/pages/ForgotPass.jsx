import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ForgotPass = () => {
  const { forgotPassword, inputEmail, setInputEmail } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
        toast.error("Please enter your email address")
        return;
    }
    forgotPassword(email)
    .then(()=> {
        toast.success('Password reset email sent')
          window.open("https://mail.google.com/", "_blank")
    }).catch(err => {
        toast.error(err.message)
    })
  };
  return (
    <div className="flex justify-center items-center md:py-32 py-8 sm:py-20">
       <Helmet>
        <title>Forgot Password | Discount Pro</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg rounded-none sm:p-10 py-6  shadow-blue-200  shrink-0 shadow-2xl">
        <h2 className="sm:text-4xl text-2xl font-semibold text-center">Forgot Password?</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-lg">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={inputEmail}
              onChange={(e)=> setInputEmail(e.target.value)}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn w-full bg-[#28b5f6] text-white">
            Sent password reset email
            </button>      
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
