import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const updateData = {};
    if (name) {
      updateData.displayName = name;
    }
    if (photo) {
      updateData.photoURL = photo;
    }
    if (Object.keys(updateData).length > 0) {
      updateUserProfile(updateData);
      toast.success("Profile updated successfully");
    }
    navigate("/my-profile");
  };

  return (
    <div className="flex justify-center items-center py-32">
      <Helmet>
        <title>Update Profile | Discount Pro</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0 shadow-2xl">
        <h2 className="text-4xl font-semibold text-center">
          Update Your Profile
        </h2>
        <form onSubmit={handleUpdateProfile} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-lg">New Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="username"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-lg">
                New Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#28b5f6] text-white">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
