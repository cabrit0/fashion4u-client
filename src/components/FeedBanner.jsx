import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

const FeedBanner = ({ user }) => {
  const currentUser = useSelector((state) => state.auth.user.user);

  const userFollowing = currentUser.following.map((user) => (
    <Avatar user={user} />
  ));
  console.log(userFollowing);

  return (
    <div className="w-full bg-slate-800 rounded-2xl px-6 py-2 my-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-fuchsia-600 font-bold opacity-90">
            Welcome,{user.name}!
          </h2>
          <p className="text-lux-gray opacity-80 pl-1">
            Show the world u're style for today
          </p>
        </div>
        <button className="text-fuchsia-600 border border-fuchsia-600 px-2 py-2 rounded-xl">
          New post
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default FeedBanner;
