import React, { useState } from "react";

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
          <img
            src={post.image}
            alt={post.description}
            className="object-cover rounded-t-2xl"
          />
          <div>
            <button onClick={handleLike}>Like</button>
            <span>Likes: {likes}</span>
          </div>
          <p>{post.text}</p>
          {post.clothes && <p>Clothes: {post.clothes}</p>}
          {post.brands && <p>Brands: {post.brands}</p>}
          <div>
            <button onClick={toggleComment}>Toggle Comment</button>
            {showComment && (
              <div>
                <textarea placeholder="Leave a comment"></textarea>
                <button>Submit Comment</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsFeed;
