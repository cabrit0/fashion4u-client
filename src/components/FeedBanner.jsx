import React, { useEffect } from "react";
import Avatar from "./Avatar";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers, fetchAllUsers } from "../app/api/AllUsersSlice";

const FeedBanner = ({ user, handleModalOpen }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user.user);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const allUsers = useSelector((state) => state.allUsers.allUsers);

  const currentUserFollowing = allUsers.filter((user) =>
    currentUser.following.includes(user._id)
  );

  const usersIFollow = currentUserFollowing.map((user) => (
    <Avatar className="hover:scale-105" user={user} />
  ));

  console.log(allUsers, currentUserFollowing);

  return (
    <div className="w-full bg-slate-800 rounded-2xl px-6 py-2 my-2">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-fuchsia-600 font-bold opacity-90">
            Welcome, {user.name}!
          </h2>
          <p className="text-lux-gray opacity-80 pl-1">
            Show the world u're style for today
          </p>
        </div>
        <button
          className="text-fuchsia-600 border border-fuchsia-600 px-2 py-2 rounded-xl hover:border-none hover:text-gray-200 hover:bg-lux-purple hover:scale-110 duration-500"
          onClick={handleModalOpen}
        >
          New post
        </button>
      </div>
      <div className="flex py-2 px-4">{usersIFollow}</div>
    </div>
  );
};

export default FeedBanner;
