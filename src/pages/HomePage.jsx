import React, { useState } from "react";
import AuthModalContainer from "../features/auth/AuthModalContainer";
import { motion } from "framer-motion";

function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [authType, setAuthType] = useState("signup");

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center h-screen justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
          <motion.button
            variants={buttonVariants}
            className="mx-2 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-lux-blue border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-gray-200 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
            onClick={() => {
              setModalVisible(true);
              setAuthType("signup");
            }}
          >
            Sign up
          </motion.button>
          <motion.button
            variants={buttonVariants}
            className="mx-2 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-lux-green border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-slate-800 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
            onClick={() => {
              setModalVisible(true);
              setAuthType("login");
            }}
          >
            Login
          </motion.button>
        </div>
      </div>
      <AuthModalContainer
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        authType={authType}
      />
    </motion.div>
  );
}
export default HomePage;
