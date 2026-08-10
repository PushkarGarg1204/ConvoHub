import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const scroll = useRef();

  const { authUser, selectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isMyMessage = String(message?.senderId) === String(authUser?._id);

  return (
    <div
      ref={scroll}
      className={`chat ${isMyMessage ? "chat-end" : "chat-start"}`}
    >
      {/* Profile Image */}
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="profile"
            src={
              isMyMessage ? authUser?.profilePhoto : selectedUser?.profilePhoto
            }
            onError={(e) => {
              e.target.src =
                "https://api.dicebear.com/9.x/adventurer/svg?seed=default";
            }}
          />
        </div>
      </div>

      {/* Message Time */}
      <div className="chat-header">
        <time className="text-xs opacity-50 text-white">
          {new Date(message?.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </div>

      {/* Message Bubble */}
      <div
        className={`chat-bubble ${
          isMyMessage ? "bg-green-400 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {message?.message}
      </div>
    </div>
  );
};

export default Message;
