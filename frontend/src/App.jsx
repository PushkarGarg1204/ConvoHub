import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { socket } from "./socket";
import { setOnlineUsers } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const { authUser } = useSelector((store) => store.user);

  useEffect(() => {
    if (!authUser?._id) {
      socket.disconnect();
      dispatch(setOnlineUsers([]));
      return;
    }

    socket.io.opts.query = {
      userId: authUser._id,
    };

    socket.connect();

    const handleOnlineUsers = (onlineUsers) => {
      dispatch(setOnlineUsers(onlineUsers));
    };

    socket.on("getOnlineUsers", handleOnlineUsers);

    return () => {
      socket.off("getOnlineUsers", handleOnlineUsers);
      socket.disconnect();
      dispatch(setOnlineUsers([]));
    };
  }, [authUser?._id, dispatch]);

  return null;
};

export default App;
