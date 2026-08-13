import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { BASE_URL } from "../utils/constants";

const SendInput = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { authUser, selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
      const res = await axios.post(
        `${BASE_URL}/api/v1/message/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      dispatch(setMessages([...messages, res?.data?.newMessage]));

      setMessage("");
    } catch (error) {
      console.log("SEND MESSAGE ERROR:", error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex items-center gap-2">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Send a message..."
        className="border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white"
      />

      <button type="submit" className="bg-green-500 text-white p-3 rounded-lg">
        Send
      </button>
    </form>
  );
};

export default SendInput;
