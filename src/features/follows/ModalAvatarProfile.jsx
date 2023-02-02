import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../components/Avatar";
import { followUser, unfollowUser } from "./followsSlice";
import { fetchAllPosts } from "../../features/posts/globalPostsSlice";

const ModalAvatarProfile = ({ user, closeModal }) => {
  const [message, setMessage] = useState("");
  const [update, setUpdate] = useState(false);

  const currentUser = useSelector((state) => state.auth.user.user);
  console.log(currentUser);

  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(user._id));
    setMessage(`${user.name} followed successfully!`);
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(user._id));
    setMessage(`${user.name} followed successfully!`);
  };

  useEffect(() => {
    dispatch(fetchAllPosts());
    setUpdate(false);
  }, [update]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
      <div className="bg-slate-800 w-11/12 md:w-1/2 xl:w-1/3 p-6 rounded-lg shadow-3xl">
        {message ? (
          <p>{message}</p>
        ) : (
          <div>
            <div className="flex items-center mb-4">
              <Avatar height="20" width="20" user={user} />
              <h2 className="ml-4 text-gray-200 text-2xl font-medium">
                {user.name}
              </h2>
            </div>
            <p className="text-purple-400 mb-2">
              Followers:{" "}
              <span className="text-fuchsia-500">
                {user.followers.length || 0}
              </span>
            </p>
            <p className="text-purple-400 mb-6">
              Following:{" "}
              <span className="text-fuchsia-500">
                {user.following.length || 0}
              </span>
            </p>
            <div className="flex justify-center">
              <button className="bg-lux-blue text-gray-200 font-bold py-1 px-2 mx-1 rounded-full hover:scale-105 hover:translate-x-1 hover:-translate-y-1 duration-500">
                See {user.name} profile
              </button>
              {currentUser._id === user._id ? null : (
                <div className="flex justify-center">
                  {currentUser.following.includes(user._id) ? (
                    <button
                      className="bg-red-500 text-gray-200 font-bold py-1 px-2 mx-1 rounded-full hover:scale-105 hover:translate-x-1 hover:-translate-y-1 duration-500"
                      onClick={handleUnfollow}
                    >
                      Unfollow {user.name}
                    </button>
                  ) : (
                    <button
                      className="bg-fuchsia-600 text-gray-200 font-bold py-1 px-2 mx-1 rounded-full hover:scale-105 hover:translate-x-1 hover:-translate-y-1 duration-500"
                      onClick={handleFollow}
                    >
                      Follow {user.name}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="w-full my-4 flex items-center justify-center">
          <button
            className=" bg-red-500 text-gray-200 font-bold py-1 px-4 rounded-full hover:scale-105 hover:translate-x-1 hover:-translate-y-1 duration-500"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAvatarProfile;
