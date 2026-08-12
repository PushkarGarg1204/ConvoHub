import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/messageSlice";
import { socket } from "../socket";

const useGetRealTimeMessage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      dispatch(addMessage(newMessage));
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [dispatch]);
};

export default useGetRealTimeMessage;
