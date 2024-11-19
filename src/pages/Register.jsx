import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const {createUser, setUser, updateUserProfile, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    setError('')
    if (password.length < 6) {
      setError("Password must be at least 6 charecters long.")
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter")
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one Uppercase letter")
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({displayName: name, photoURL: photo})
        toast.success("Registration successful")
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message)
      });
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Registration successful")
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message)
      });
  };

  return (
    <div className="flex justify-center items-center py-32">
      <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0 shadow-2xl">
        <h2 className="text-4xl font-semibold text-center">Register</h2>
        <form onSubmit={handleSubmit} className="card-body">
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-medium text-lg">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <p onClick={()=> setShowPassword(!showPassword)} className="absolute right-4 text-gray-600 top-[60px]">
              {
                showPassword ? <FaEyeSlash/> : <FaEye />
              }
            </p>
            {
              error && <div className="text-red-500 text-sm mt-2">
                <p>{error}</p>
              </div>
            }
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#28b5f6] text-white">Register</button>
          </div>
        </form>
        <div className="divider text-gray-400">or register with</div>
          <div className="px-8 mb-3">
            <button onClick={handleGoogleSignIn} className="btn bg-base-100 shadow text-[#4285F4] w-full">
              <FcGoogle className="text-2xl" />
              Google
            </button>
          </div>
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
