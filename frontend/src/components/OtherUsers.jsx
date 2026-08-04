import React from "react";
import OtherUser from "./OtherUser";

const OtherUsers = () => {
  const otherUsers = [
    {
      _id: "1",
      fullName: "Rahul Sharma",
      profilePhoto: "https://i.pravatar.cc/150?img=1",
    },
    {
      _id: "2",
      fullName: "Priya Singh",
      profilePhoto: "https://i.pravatar.cc/150?img=2",
    },
    {
      _id: "3",
      fullName: "Aman Gupta",
      profilePhoto: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <div className="overflow-auto flex-1">
      {otherUsers.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
