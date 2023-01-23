import React, { useState, useEffect, useRef } from "react";
import { signup } from "../api/authSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const SignupModal = ({ modalVisible, setModalVisible }) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState("type");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();

  const errorsRef = useRef(errors);
  const submitButtonRef = useRef();

  useEffect(() => {
    errorsRef.current = errors;
  }, [errors]);

  useEffect(() => {
    const inputValues = [name, email, password, passwordConfirm];
    const hasErrors = errorsRef.current.length > 0;

    if (inputValues.some((value) => !value) || hasErrors) {
      submitButtonRef.current.setAttribute("disabled", true);
    } else {
      submitButtonRef.current.removeAttribute("disabled");
    }
  }, [name, email, password, passwordConfirm, errorsRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password, passwordConfirm };

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      setErrors([...errors, passwordError]);
      return;
    }
    if (emailError) {
      setError("Invalid email address");
      setErrors([...errors, emailError]);
      return;
    }

    try {
      await dispatch(signup(userData));
      setSuccessMessage("Account created! Please try to login now.");
      //setModalVisible(false);
    } catch (err) {
      console.log(err);
    }
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
    setErrors([]);
  };

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

  const handleCloseModal = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
    setModalVisible(false);
    setErrors([]);
    setSuccessMessage("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    if (name === "name") {
      setName(value);
      if (value.length < 3) {
        setNameError(true);
        setErrors([...errors, "Name must be at least 3 characters"]);
      } else {
        setNameError(false);
        setErrors([]);
      }
    }

    if (name === "email") {
      setEmail(value);
      if (
        !value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )
      ) {
        setEmailError(true);
        setErrors([...errors, "Invalid email address"]);
      } else {
        setEmailError(false);
        setErrors([]);
      }
    }

    if (name === "password") {
      setPassword(value);
      if (value.length < 6) {
        setPasswordError(true);
        setErrors([...errors, "Password must be at least 6 characters"]);
      } else {
        setPasswordError(false);
        setErrors([]);
      }
    }

    if (name === "passwordConfirm") {
      setPasswordConfirm(value);
      if (value !== password) {
        setPasswordConfirmError(true);
        setErrors([...errors, "passwords must match"]);
      } else {
        setPasswordConfirmError(false);
        setErrors([]);
      }
    }
    setErrors([]);
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
      <div className="bg-slate-800 rounded-3xl shadow-xl w-10/12 p-4">
        {successMessage ? (
          <p className="mt-6 text-center text-lg font-bold opacity-80 text-lux-green">
            {successMessage}
          </p>
        ) : (
          <h2 className=" text-center text-xl text-gray-200 font-bold mt-4">
            Sign up an account
          </h2>
        )}

        <form className="mx-12 py-4" onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">Name</label>
            <motion.input
              type="text"
              name="name"
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-60 focus:opacity-100 focus:border-none active:bg-lux-purple rounded-lg py-1 px-3 focus:scale-105 duration-500"
              value={name}
              onChange={handleChange}
              variants={inputVariants}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            />
            {nameError && (
              <p className="text-red-500 text-xs italic mt-2">
                Name must be at least 3 characters
              </p>
            )}
          </div>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Email
            </label>
            <motion.input
              type="email"
              name="email"
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-60 focus:opacity-100 focus:border-none rounded-lg py-1 px-3 focus:scale-105 duration-500"
              value={email}
              onChange={handleChange}
              variants={inputVariants}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            />
            {emailError && (
              <p className="text-red-500 text-xs italic mt-2">
                Invalid email address
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
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-60 focus:opacity-100 focus:border-none rounded-lg py-1 px-3 focus:scale-105 duration-500"
              value={password}
              onChange={handleChange}
              variants={inputVariants}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            />
            {passwordError && (
              <p className="text-red-500 text-xs italic mt-2">
                Password must be at least 6 characters
              </p>
            )}
          </div>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Confirm Password
            </label>
            <motion.input
              type="password"
              name="passwordConfirm"
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-60 focus:opacity-100 focus:border-none rounded-lg py-1 px-3 focus:scale-105 duration-500"
              value={passwordConfirm}
              onChange={handleChange}
              variants={inputVariants}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            />
            {passwordConfirmError && (
              <p className="text-red-500 text-xs italic mt-2">
                Passwords do not match
              </p>
            )}
          </div>
          <div className="my-8 flex justify-start">
            <motion.button
              type="submit"
              className={`mx-2 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-lux-blue border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-gray-200 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500 ${
                !errors.length > 0
                  ? "cursor-pointer"
                  : "disabled cursor-not-allowed"
              }`}
              ref={submitButtonRef}
              variants={inputVariants}
              whileHover={{ opacity: 1 }}
              whileFocus={{ scale: 1.05, opacity: 1 }}
            >
              Sign up
            </motion.button>
            <motion.button
              type="button"
              onClick={handleCloseModal}
              className="mx-2 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-3 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-red-500 border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-gray-200 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
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
export default SignupModal;
