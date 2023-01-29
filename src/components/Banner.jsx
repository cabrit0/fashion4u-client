import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { HiOutlineUsers, HiOutlinePlusCircle } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "./Avatar";

const Banner = () => {
  const currentUser = useSelector((state) => state.auth.user);
  console.log(currentUser);

  return (
    <div className="fixed top-0 w-full h-14 px-6 bg-slate-800 flex justify-between items-center rounded-b-2xl z-40">
      <h1 className="text-xl font-bold text-fuchsia-600 hover:scale-110 duration-300">
        Fashion4U
      </h1>
      {currentUser && (
        <div className="flex items-center">
          <Link
            to="user/friends"
            className="px-2 py-1 bg-gray-800 rounded-md hover:scale-110  hover:translate-x-1 hover:-translate-y-1 duration-500"
          >
            <IoIosNotificationsOutline className="text-2xl font-bold text-fuchsia-600 hover:text-lux-yellow duration-300" />
          </Link>
          <Link
            to="user/friends"
            className="px-2 py-1 bg-gray-800 rounded-md hover:scale-110  hover:translate-x-1 hover:-translate-y-1 duration-500"
          >
            <HiOutlineUsers className="text-xl font-bold text-fuchsia-600 hover:text-lux-yellow duration-300" />
          </Link>
          <Link
            className="px-2 py-1 bg-gray-800 rounded-md"
            to="/user/myProfile"
          >
            <Avatar width="10" height="10" className="" user={currentUser.user} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Banner;
