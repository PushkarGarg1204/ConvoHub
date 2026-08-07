import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = ({ search }) => {
  useGetOtherUsers();

  const { otherUsers } = useSelector((store) => store.user);

  if (!otherUsers) return null;

  const filteredUsers = otherUsers.filter((user) =>
    user.fullName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="overflow-auto flex-1">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <OtherUser key={user._id} user={user} />)
      ) : (
        <p className="text-center text-white mt-4 font-medium">No user found</p>
      )}
    </div>
  );
};

export default OtherUsers;
