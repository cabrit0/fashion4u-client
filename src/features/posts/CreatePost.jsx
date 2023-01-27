//
//
// clothes and brands need to be selectors with descriptions
//
//
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserPost } from "./userPostsSlice";

function CreatePostModal({ handleModalClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    photo: "",
    description: "",
    clothes: "",
    brands: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("photo", formData.photo);
    data.append("description", formData.description);
    data.append("clothes", formData.clothes);
    data.append("brands", formData.brands);
    dispatch(createUserPost(data));
    handleModalClose();
    navigate.push("/");
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-xl">
        <h2 className="text-2xl text-gray-300 font-bold mb-4">Create a post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-200 font-bold mb-2">
              Photo
              <input
                type="file"
                className="w-full rounded-xl bg-lux-purple px-3 py-0.5 focus:scale-105 duration-500"
                placeholder="Photo"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 font-bold mb-2">
              Description
              <input
                type="text"
                className="w-full rounded-xl bg-lux-purple px-3 py-0.5 focus:scale-105 duration-500"
                placeholder="Description"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 font-bold mb-2">
              Clothes (optional)
              <input
                type="text"
                className="w-full rounded-xl bg-lux-purple px-3 py-0.5 focus:scale-105 duration-500"
                placeholder="Clothes"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 font-bold mb-2">
              Brands (optional)
              <input
                type="text"
                className="w-full rounded-xl bg-lux-purple px-3 py-0.5 focus:scale-105 duration-500"
                placeholder="Brands"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="">
            <button
              className="text-lux-blue border border-lux-blue hover:border-none hover:bg-lux-blue hover:text-gray-200 hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500 mr-2 px-4 py-1 rounded-xl"
              type="submit"
            >
              Create post
            </button>
            <button
              className="text-red-600 border border-red-600 hover:border-none hover:bg-red-600 hover:text-gray-200 hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500 mx-2 px-4 py-1 rounded-xl"
              onClick={handleModalClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostModal;
