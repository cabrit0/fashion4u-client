import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { TfiCommentAlt, TfiComment } from "react-icons/tfi";

const PostsFeed = ({ posts }) => {
  const [showComment, setShowComment] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleComment = () => {
    setShowComment(!showComment);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className=" text-gray-200">
      {posts.map((post, index) => (
        <div key={index} className="bg-slate-800 my-4 rounded-t-2xl">
          <div className="flex justify-between items-center px-4 py-1">
            <div>
              <Avatar user={post.user} />
            </div>
            <p>{post.user.name}</p>
          </div>
          {post.image ? (
            <img
              src={post.image}
              alt={post.description}
              className="object-cover pb-2 rounded-2xl"
            />
          ) : (
            <p>...</p>
          )}
          <div className="flex justify-between px-6">
            <div className="flex">
              <div className="flex">
                <button onClick={handleLike}>
                  <RiHeart2Line className="text-lux-pink text-xl hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500" />
                </button>
                <p className="mx-2 text-gray-400"> {likes}</p>
              </div>
              <div className="flex">
                <button onClick={toggleComment}>
                  <TfiComment className="text-lux-blue hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500" />
                </button>
                <p className="mx-2 text-gray-400"> {likes}</p>
              </div>
            </div>
            <div className="flex">
              {post.clothes && <p>Clothes: {post.clothes}</p>}
              {post.brands && <p>Brands: {post.brands}</p>}
            </div>
          </div>
          <p className="px-4 py-1 pb-4 text-gray-300">{post.text}</p>
          <div>
            {showComment && (
              <div className="w-full my-1 flex flex-col justify-center items-center">
                <textarea
                  className="w-11/12 px-4 text-gra-200 font-bold bg-lux-purple rounded-xl focus:scale-105 duration-500"
                  placeholder="Leave a comment"
                ></textarea>
                <button>Comment</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsFeed;
