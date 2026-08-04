import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="
          flex
          w-[950px]
          h-[600px]
          rounded-xl
          overflow-hidden
          bg-white/10
          backdrop-blur-lg
          border
          border-white/20
          shadow-2xl
        "
      >
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default HomePage;
