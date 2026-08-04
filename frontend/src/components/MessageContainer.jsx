import React from "react";
import { useSelector } from "react-redux";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user,
  );

  const isOnline = onlineUsers?.includes(selectedUser?._id);

  return (
    <div className="flex-1 flex flex-col bg-transparent">
      {selectedUser ? (
        <>
          {/* Header */}
          <div className="flex items-center gap-3 bg-zinc-800/70 backdrop-blur-md text-white px-4 py-3">
            <div className={`avatar ${isOnline ? "online" : ""}`}>
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>

            <div>
              <p className="font-semibold">{selectedUser?.fullName}</p>
            </div>
          </div>

          {/* Messages */}
          <Messages />

          {/* Send Input */}
          <SendInput />
        </>
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Hi, {authUser?.fullName}</h1>

          <h1 className="text-2xl mt-2">Let's start conversation</h1>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
