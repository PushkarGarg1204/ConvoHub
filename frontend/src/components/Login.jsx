import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      // IMPORTANT:
      // Let's see exactly what your backend returns
      console.log("AUTH USER BEING STORED:", res.data);

      dispatch(setAuthUser(res.data));

      navigate("/");
    } catch (error) {
      console.log("========== LOGIN ERROR ==========");
      console.log("Error:", error);
      console.log("Error response:", error.response);
      console.log("Error response data:", error.response?.data);
      console.log("=================================");

      toast.error(error.response?.data?.message || "Login failed");
    }

    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Login
        </h1>

        <form onSubmit={onSubmitHandler}>
          {/* Username */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>

            <input
              value={user.username}
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value,
                })
              }
              className="input input-bordered w-full bg-white/20 border-white/20 text-white placeholder:text-gray-300"
              type="text"
              placeholder="Username"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>

            <input
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              className="input input-bordered w-full bg-white/20 border-white/20 text-white placeholder:text-gray-300"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* Signup */}
          <p className="text-center mb-6">
            <span className="text-gray-300">Don't have an account? </span>

            <Link
              to="/signup"
              className="text-white font-semibold hover:text-cyan-300 transition"
            >
              Signup
            </Link>
          </p>

          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white/15 backdrop-blur-lg border border-white/20 text-white font-semibold shadow-xl hover:bg-white/25 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
