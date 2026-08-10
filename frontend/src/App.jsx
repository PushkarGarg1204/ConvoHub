import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

import { router } from "./main";
import { BASE_URL } from "./utils/constants";
import { setOnlineUsers } from "./redux/userSlice";
import { setSocket } from "./redux/socketSlice";

const App = () => {
  const dispatch = useDispatch();

  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);

  useEffect(() => {
    if (authUser) {
      const socketio = io(BASE_URL, {
        query: {
          userId: authUser._id,
        },
      });

      dispatch(setSocket(socketio));

      socketio.on("getOnlineUsers", (onlineUsers) => {
        console.log("Received Online Users:", onlineUsers);
        dispatch(setOnlineUsers(onlineUsers));
      });

      return () => {
        socketio.close();
        dispatch(setSocket(null));
      };
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
