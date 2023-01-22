import React, { useState } from "react";

const SignupModal = ({ modalVisible, setModalVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-screen flex items-center justify-center ${
        modalVisible ? "block" : "hidden"
      }`}
    >
      <div className="bg-slate-800 rounded-3xl shadow-xl w-10/12 p-4">
        <h2 className=" text-center text-xl text-gray-200 font-bold mt-4">
          Login with your account
        </h2>
        <form className="mx-12 py-4">
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-lg py-2 px-2 focus:scale-105 duration-500"
            />
          </div>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-200 rounded-lg py-2 px-2 focus:scale-105 duration-500"
            />
          </div>
          <div className="mt-8 mx-4 flex justify-start">
            <button
              className="mx-2 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-lux-green border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-slate-800 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
              onClick={() => setModalVisible(false)}
            >
              Login
            </button>
            <button
              className="mx-2 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-red-500 border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-slate-800 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
              onClick={() => setModalVisible(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
