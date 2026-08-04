import React from "react";
import Message from "./Message";

const Messages = () => {
  const messages = [
    {
      _id: "1",
      message: "Hi! 👋",
      isMe: false,
    },
    {
      _id: "2",
      message: "Hello! How are you?",
      isMe: true,
    },
    {
      _id: "3",
      message: "I'm building ConvoHub.",
      isMe: false,
    },
    {
      _id: "4",
      message: "Looks awesome! 🚀",
      isMe: true,
    },
    {
      _id: "5",
      message: "Thanks 😊",
      isMe: false,
    },
  ];

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
