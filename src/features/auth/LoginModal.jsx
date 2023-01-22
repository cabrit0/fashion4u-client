import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { login } from "../api/authSlice";

const LoginModal = ({ modalVisible, setModalVisible }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const formVariants = {
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

  const inputVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 0.7,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    if (name === "email") {
      setEmail(value);
      if (
        !value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )
      ) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
    if (name === "password") {
      setPassword(value);
      if (value.length < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  };

  const handleCloseModal = () => {
    setEmail("");
    setPassword("");
    setEmailError(false);
    setPasswordError(false);
    setModalVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };
    try {
      dispatch(login(userData));
      setModalVisible(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-screen flex items-center justify-center ${
        modalVisible ? "block" : "hidden"
      }`}
      variants={formVariants}
      initial="hidden"
      animate={modalVisible ? "visible" : "hidden"}
    >
      <div className="bg-slate-800 rounded-3xl shadow-xl w-10/12 p-4 py-8">
        <h2 className=" text-center text-xl text-gray-200 font-bold mt-4">
          Login with your account
        </h2>
        <form className="mx-12 py-4" onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Email
            </label>
            <motion.input
              type="email"
              name="email"
              value={email}
              id="email"
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-80 rounded-lg py-2 px-3 focus:opacity-100 focus:border-none focus:scale-105 duration-500"
              onChange={handleChange}
              variants={inputVariants}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            />
            {emailError && (
              <p className="text-red-400 text-sm italic animate-bounce mt-2">
                Por favor insira um email válido
              </p>
            )}
          </div>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Password
            </label>
            <motion.input
              type="password"
              name="password"
              id="password"
              value={password}
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-80 rounded-lg py-2 px-3 focus:opacity-100 focus:border-none focus:scale-105 duration-500"
              onChange={handleChange}
              variants={inputVariants}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            />
            {passwordError && (
              <p className="text-red-400 text-sm italic animate-bounce mt-2">
                Password must be 6 characters long
              </p>
            )}
          </div>
          <div className="mt-8 mx-4 flex justify-start">
            <motion.button
              className="mx-2 sm:mx-4 bg-transparent text-gray-100 opacity-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-lux-green border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-gray-600 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
              onClick={() => setModalVisible(false)}
              variants={inputVariants}
              whileHover={{ opacity: 1 }}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            >
              Login
            </motion.button>
            <motion.button
              className="mx-2 sm:mx-4 bg-transparent text-gray-100 opacity-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-red-500 border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-gray-200 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
              onClick={handleCloseModal}
              variants={inputVariants}
              whileHover={{ opacity: 1 }}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginModal;
