import React, { useState } from "react";
import { signup } from "../api/authSlice";
import { useDispatch, useSelector } from "react-redux";

const SignupModal = ({ modalVisible, setModalVisible }) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password, passwordConfirm };

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    if (emailError) {
      setError("Invalid email address");
      return;
    }
    try {
      await dispatch(signup(userData));
      setModalVisible(false);
    } catch (err) {
      console.log(err);
    }
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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    if (name === "name") {
      setName(value);
      if (value.length < 3) {
        setNameError(true);
      } else {
        setNameError(false);
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

    if (name === "passwordConfirm") {
      setPasswordConfirm(value);
      if (value !== password) {
        setPasswordConfirmError(true);
      } else {
        setPasswordConfirmError(false);
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-screen flex items-center justify-center ${
        modalVisible ? "block" : "hidden"
      }`}
    >
      <div className="bg-slate-800 rounded-3xl shadow-xl w-10/12 p-4">
        <h2 className=" text-center text-xl text-gray-200 font-bold mt-4">
          Sign up an account
        </h2>
        <form className="mx-12 py-4" onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-75 focus:opacity-100 focus:border-none rounded-lg py-1 px-3 focus:scale-105 duration-500"
              onChange={handleChange}
            />
            {nameError && (
              <p className="text-red-400 text-sm italic animate-bounce mt-2">
                Name should be more then 3 characters long
              </p>
            )}
          </div>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-75 focus:opacity-100 focus:border-none rounded-lg py-1 px-3 focus:scale-105 duration-500"
              onChange={handleChange}
            />
            {emailError && (
              <p className="text-red-400 text-sm italic animate-bounce mt-2">
                Enter valid email address
              </p>
            )}
          </div>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-75 focus:opacity-100 focus:border-none rounded-lg py-1 px-3 focus:scale-105 duration-500"
              onChange={handleChange}
            />
            {passwordError && (
              <p className="text-red-400 text-sm italic animate-bounce mt-2">
                Password must be more then 6 characters long
              </p>
            )}
          </div>
          <div className="my-4">
            <label className="block text-gray-200 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirm}
              className="w-full bg-lux-purple text-gray-100 font-bold opacity-75 focus:opacity-100 focus:border-none rounded-lg py-1 px-3 focus:scale-105 duration-500"
              onChange={handleChange}
            />
            {passwordConfirmError && (
              <p className="text-red-400 text-sm italic animate-bounce mt-2">
                Passwords must match
              </p>
            )}
          </div>
          <div className="mt-8 mx-4 flex justify-start">
            <button
              type="submit"
              className="mx-1 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-2 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-lux-blue border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-gray-200 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
            >
              Sign up
            </button>
            <button
              className="mx-1 sm:mx-4 bg-transparent text-gray-100 py-1 hover:py-2 px-2 sm:px-6 rounded-3xl hover:rounded-lg hover:bg-red-500 border-2 border-gray-100 font-bold hover:border-none hover:shadow-lg hover:text-slate-800 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 duration-500"
              onClick={handleCloseModal}
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
