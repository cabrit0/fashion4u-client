import React from "react";

const MyPostsFeed = ({ posts }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {posts.map((post) => (
        <div
          className="w-3/12 mt-4 m-2 hover:scale-105 hover:translate-x-2 hover:-translate-y-2 duration-500"
          key={post._id}
        >
          <img
            src={post.image}
            alt="Post"
            className="w-full h-48 object-cover shadow-xl rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default MyPostsFeed;
