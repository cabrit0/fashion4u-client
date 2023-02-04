import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadAvatar, getProfile } from "../features/users/userSlice";

import MyProfileAvatar from "./MyProfileAvatar";

const MyProfileBanner = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const userIsLoading = useSelector((state) => state.users.isLoading);
  const [showModal, setShowModal] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [updatedAvatar, setUpdatedAvatar] = useState(false);
  const dispatch = useDispatch();

  //console.log(userIsLoading)

  const handleModal = () => {
    setShowModal(!showModal);
    setUpdatedAvatar(false);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  //console.log(avatar);
  const submitAvatar = async () => {
    const response = await dispatch(uploadAvatar(avatar));
    console.log(response);
    setUpdatedAvatar(true);
  };

  return (
    <>
      <div className="w-full my-2 pl-2 py-1 bg-slate-800 text-gray-300 rounded-3xl ">
        <div className="flex items-center justify-between">
          <MyProfileAvatar
            w="8"
            h="8"
            user={currentUser.user}
            onClick={handleModal}
          />
          <div>
            <p className="text-fuchsia-600 text-3xl font-bold mx-4">
              {currentUser.user.name}
            </p>
          </div>
          <div className="text-fuchsia-600 flex items-center justify-center font-bold">
            <p className="text-sm flex flex-col mx-1 items-center justify-center">
              Followers{" "}
              <span className="text-yellow-500">
                {currentUser.user.followers.length}
              </span>
            </p>
            <p className="text-sm flex flex-col mr-4 items-center justify-center">
              Following{" "}
              <span className="text-yellow-500">
                {currentUser.user.following.length}
              </span>
            </p>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen flex items-center justify-center">
          {updatedAvatar ? (
            <div className="bg-slate-800 rounded-3xl shadow-xl w-10/12 p-4 pb-10 py-8">
              <h2 className="text-lux-green opacity-70 text-2xl font-bold">
                Uploaded Avatar!
              </h2>
              <p className="text-gray-200">
                Avatar updated, please restart Login
              </p>
              <button
                className="text-white my-2 py-1 mx-1 px-4 rounded-lg border hover:border-none hover:bg-red-600 hover:scale-105 hover:translate-x-1 hover:-translate-y-0.5 duration-500"
                onClick={handleModal}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-3xl shadow-xl w-10/12 p-4 pb-10 py-8">
              <h2 className="text-fuchsia-600 font-bold text-xl my-4">
                Upload avatar
              </h2>
              {userIsLoading ? (
                <div className="loader ml-4"></div>
              ) : (
                <div>
                  <input
                    type="file"
                    name="avatar"
                    onChange={handleAvatarChange}
                    className="w-full text-gray-400 p-2 rounded-lg"
                  />
                  <div className="flex justify-end mt-5">
                    <button
                      className="bg-fuchsia-600 text-white py-1 mx-1 px-4 rounded-lg hover:bg-lux-blue hover:scale-105 hover:translate-x-1 hover:-translate-y-0.5 duration-500"
                      onClick={submitAvatar}
                    >
                      Upload
                    </button>
                    <button
                      className="text-white py-1 mx-1 px-4 rounded-lg border hover:border-none hover:bg-red-600 hover:scale-105 hover:translate-x-1 hover:-translate-y-0.5 duration-500"
                      onClick={handleModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyProfileBanner;
