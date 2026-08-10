import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();

  const { selectedUser, onlineUsers } = useSelector((store) => store.user);

  const isOnline = onlineUsers?.includes(user._id);

  // Debug Logs
  console.log("User:", user.fullName);
  console.log("User ID:", user._id);
  console.log("Online Users:", onlineUsers);
  console.log("isOnline:", isOnline);

  const selectedUserHandler = () => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div
        onClick={selectedUserHandler}
        className={`flex gap-2 items-center rounded p-2 cursor-pointer transition-all duration-200 ${
          selectedUser?._id === user?._id
            ? "bg-zinc-200 text-black"
            : "text-white hover:bg-zinc-200 hover:text-black"
        }`}
      >
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src={user.profilePhoto}
              alt={user.fullName}
              onError={(e) => {
                e.target.src =
                  "https://api.dicebear.com/9.x/adventurer/svg?seed=default";
              }}
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p>{user.fullName}</p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default OtherUser;
