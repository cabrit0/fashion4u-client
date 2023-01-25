import React from "react";

const Avatar = ({ user }) => {
  let initials;
  if (user.avatar) {
    return (
      <img
        src={user.avatar}
        className="relative w-10 h-10 rounded-full"
        alt={user.name}
      />
    );
  } else {
    initials = user.name
      .split(" ")
      .map((name) => name[0].toUpperCase())
      .join("");
    return (
      <div className="bg-gray-300 rounded-full text-center text-white">
        <p className="text-xl">{initials}</p>
      </div>
    );
  }
};

export default Avatar;
