import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center py-32">
      <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0 shadow-2xl">
        <h2 className="text-4xl font-semibold text-center">Register</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-lg">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="username"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-lg">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-lg">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#28b5f6] text-white">Register</button>
          </div>

          <div className="divider text-gray-400">or register with</div>
          <div>
            <button className="btn bg-base-100 shadow text-[#4285F4] w-full">
              <FcGoogle className="text-2xl" />
              Google
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have an Account?{" "}
          <Link className="text-red-500 hover:underline" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
