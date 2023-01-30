//
//
// clothes and brands need to be selectors with descriptions
//
//
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserPost } from "./userPostsSlice";
import { fetchAllPosts } from "./globalPostsSlice";

function CreatePostModal({ handleModalClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    image: "",
    text: "",
    clothes: "",
    brands: "",
  });
  const [postCreated, setPostCreated] = useState(false);
  const message = "Your post has been created!";

  const handleChange = (event) => {
    if (event.target.name === "image") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("text", formData.text);
    data.append("brands", formData.brands);
    data.append("clothes", formData.clothes);
    data.append("image", formData.image);
    dispatch(createUserPost(data));
    console.log("FormData entries: ", [...data.entries()]);
    setPostCreated(true);
    dispatch(fetchAllPosts());
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-xl">
        {postCreated ? (
          <div className="px-10 py-8 flex flex-col justify-center items-center">
            <h2 className="text-center  text-fuchsia-600 text-xl font-bold">
              {message}
            </h2>
            <button
              className="text-fuchsia-600 border border-fuchsia-600 font-bold mt-2 px-2 py-0.5 rounded-xl hover:border-none hover:text-gray-200 hover:bg-fuchsia-600 hover:scale-110 duration-500"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl text-gray-300 font-bold mb-4">
              Create a post
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-200 font-bold mb-2">
                  Photo
                  <input
                    type="file"
                    name="image"
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
                    name="text"
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
                    name="clothes"
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
                    name="brands"
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
          </>
        )}
      </div>
    </div>
  );
}

export default CreatePostModal;
