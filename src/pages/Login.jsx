import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center py-32">
      <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0 shadow-2xl">
        <h2 className="text-4xl font-semibold text-center">Login</h2>
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
            <button className="btn bg-[#28b5f6] text-white">Login</button>
          </div>
        </form>
        <div className="divider text-gray-400">or login with</div>
        <div className="mb-4 px-8">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-base-100 shadow text-[#4285F4] w-full"
          >
            <FcGoogle className="text-2xl" />
            Google
          </button>
        </div>
        <p className="text-center font-semibold">
          Don't Have an Account?{" "}
          <Link className="text-red-500 hover:underline" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
