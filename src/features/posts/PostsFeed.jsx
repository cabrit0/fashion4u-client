import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import { useDispatch } from "react-redux";
import { likePost } from "../likes/likesSlice";

import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { TfiCommentAlt, TfiComment } from "react-icons/tfi";

const PostsFeed = ({ posts }) => {
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState([]);
  const [likes, setLikes] = useState([]);

  const toggleComment = (index) => {
    const newShowComment = [...showComment];
    newShowComment[index] = !newShowComment[index];
    setShowComment(newShowComment);
  };

  const handleLike = (id) => {
/*     const newLikes = [...likes];
    newLikes[id] = newLikes[id] + 1 || 1;
    setLikes(newLikes); */
    const res = dispatch(likePost(id));
    console.log(res);
  };

  console.log(posts);

  return (
    <div className=" text-gray-200">
      {posts.map((post, index) => (
        <div key={post._id} className="bg-slate-800 my-4 rounded-t-2xl">
          <div className="flex justify-between items-center px-4 py-1">
            <div>
              <Avatar height="8" width="8" user={post.user} />
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
                <button onClick={() => handleLike(post._id)}>
                  {/* send postID */}
                  <RiHeart2Line className="text-lux-pink text-xl hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500" />
                </button>
                <p className="mx-2 text-gray-400"> {post.likes.length || 0}</p>
              </div>
              <div className="flex">
                <button onClick={() => toggleComment(index)}>
                  <TfiComment className="text-lux-blue hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500" />
                </button>
                <p className="mx-2 text-gray-400"> {likes[index] || 0}</p>
              </div>
            </div>
            <div className="flex">
              {post.clothes && <p>Clothes: {post.clothes}</p>}
              {post.brands && <p>Brands: {post.brands}</p>}
            </div>
          </div>
          <p className="px-4 py-1 pb-4 text-gray-300">{post.text}</p>
          <div className="bg-slate-900 rounded-t-2xl px-4 py-1 mx-2">
            {post.comments.map((comment) => (
              <div className="flex justify-between items-center py-1 px-4 my-1 bg-slate-800 rounded-2xl ">
                <p>{comment.comment.text}</p>
                <div className="flex items-center">
                  {/* <Avatar width="8" height="8" user={post.user} /> */}

                  <p className="ml-2 text-xs">{comment.comment.user.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {showComment[index] && (
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
