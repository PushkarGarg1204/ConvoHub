import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_API_URL;

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }

    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Signup
        </h1>

        <form onSubmit={onSubmitHandler}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full bg-white/20 text-white placeholder:text-gray-300 border-white/20"
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="Username"
              className="input input-bordered w-full bg-white/20 text-white placeholder:text-gray-300 border-white/20"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full bg-white/20 text-white placeholder:text-gray-300 border-white/20"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({
                  ...user,
                  confirmPassword: e.target.value,
                })
              }
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full bg-white/20 text-white placeholder:text-gray-300 border-white/20"
            />
          </div>

          {/* Gender */}
          <div className="flex gap-6 my-5 text-white">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                className="checkbox checkbox-sm"
              />
              Male
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="checkbox checkbox-sm"
              />
              Female
            </label>
          </div>

          <p className="text-center text-gray-200 mb-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-white hover:text-cyan-200 font-semibold"
            >
              Login
            </Link>
          </p>

          <button
            type="submit"
            className="w-full py-3 rounded-xl
             bg-gradient-to-r from-white/20 to-white/10
             backdrop-blur-xl
             border border-white/30
             text-white
             font-semibold
             shadow-2xl
             hover:from-white/30
             hover:to-white/20
             hover:-translate-y-1
             transition-all duration-300 flex items-center justify-center gap-2"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
