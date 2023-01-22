import React, { useState } from "react";
import AuthModalContainer from "../features/auth/AuthModalContainer";

function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [authType, setAuthType] = useState("signup");

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="bg-slate-800 shadow-xl py-8 sm:py-10 px-6 sm:px-24 w-10/12 rounded-3xl">
        <div className="text-4xl my-a font-bold text-center text-gray-100">
          Fashion4U
        </div>
        <div className="mt-8 text-2xl opacity-90 text-center font-bold text-gray-100">
          The social media where you
        </div>
        <div className="text-lg opacity-90 text-center text-gray-100">
          Experience fashion at your{" "}
          <span className="text-lux-green opacity-70 font-bold">
            fingertips!
          </span>
        </div>
        <div className=" text-lg opacity-90 text-center text-gray-100">
          <span className="text-lux-yellow opacity-70 font-bold">
            Influence
          </span>{" "}
          with your style
        </div>
        <div className="my-8 p-4 flex items-center justify-center">
          <button
            className="mx-2 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-lux-yellow border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-slate-800 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
            onClick={() => {
              setModalVisible(true);
              setAuthType("signup");
            }}
          >
            Sign up
          </button>
          <button
            className="mx-2 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-lux-green border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-slate-800 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
            onClick={() => {
              setModalVisible(true);
              setAuthType("login");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <AuthModalContainer
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        authType={authType}
      />
    </div>
  );
}
export default HomePage;
