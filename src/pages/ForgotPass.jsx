import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ForgotPass = () => {
  const { forgotPassword } = useContext(AuthContext);
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
    <div className="flex justify-center items-center py-32">
      <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0 shadow-2xl">
        <h2 className="text-4xl font-semibold text-center">Forgot Password?</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-lg">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
