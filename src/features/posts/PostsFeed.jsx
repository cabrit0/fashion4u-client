import React, { useState, useEffect } from "react";
import Avatar from "../../components/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { likePost, likeComment } from "../likes/likesSlice";
import { fetchAllPosts } from "../../features/posts/globalPostsSlice";
import { createComment } from "../comments/commentsSlice";

import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { TfiCommentAlt, TfiComment } from "react-icons/tfi";

const PostsFeed = ({ posts }) => {
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState([]);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

/*  LEMBRAR DE FAZER A LOGICA PARA O USER CLICADO E NAO PARA O CURRENT USER  */

  const currentUser = useSelector((state) => state.auth.user.user);
  const allUsers = useSelector((state) => state.allUsers.allUsers);

  const currentUserFollowing = allUsers.filter((user) =>
    currentUser.following.includes(user._id)
  );
  const currentUserFollowers = allUsers.filter((user) =>
    currentUser.followers.includes(user._id)
  );

  const toggleComment = (index) => {
    const newShowComment = [...showComment];
    newShowComment[index] = !newShowComment[index];
    setShowComment(newShowComment);
  };

  const handleLikePost = (id) => {
    const response = dispatch(likePost(id));
    console.log(response, id);
    setUpdate(true);
  };

  const handleLikeComment = (id) => {
    const response = dispatch(likeComment(id));
    console.log(response, id);
    setUpdate(true);
  };

  const handleCreateComment = (postId, text) => {
    const body = { postId, text };
    const response = dispatch(createComment(body));
    //console.log(response, body);
    setText("");
    setUpdate(true);
    toggleComment();
  };

  const handleShowAvatarProfile = (user) => {
    setUser(user);
    setShowModal(true);
    console.log(currentUserFollowing);
  };

  const closeModal = () => {
    setShowModal(false);
    setUser(null);
  };

  useEffect(() => {
    dispatch(fetchAllPosts());
    setUpdate(false);
  }, [update]);

  return (
    <div className=" text-gray-200">
      {posts.map((post, index) => (
        <div key={post._id} className="bg-slate-800 my-4 rounded-t-2xl">
          <div className="flex justify-between items-center px-4 py-1">
            <div>
              <button onClick={() => handleShowAvatarProfile(post.user)}>
                <Avatar height="8" width="8" user={post.user} />
              </button>
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
                <button onClick={() => handleLikePost(post._id)}>
                  {/* send postID */}
                  <RiHeart2Line className="text-lux-pink text-xl hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500" />
                </button>
                <p className="mx-2 text-gray-400"> {post.likes.length || 0}</p>
              </div>
              <div className="flex">
                <button onClick={() => toggleComment(index)}>
                  <TfiComment className="text-lux-blue hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500" />
                </button>
                <p className="mx-2 text-gray-400">
                  {post.comments.length || 0}
                </p>
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
                <div>
                  <p>{comment.comment.text}</p>
                  <div>
                    <div className="flex opacity-75">
                      <button
                        onClick={() => handleLikeComment(comment.comment._id)}
                      >
                        <RiHeart2Line className="text-lux-pink text-sm hover:scale-105 hover:translate-x-0.5 hover:-translate-y-1 duration-500" />
                      </button>
                      <p className="mx-2 text-gray-400">
                        {comment.comment.likes.length || 0}
                      </p>
                    </div>
                  </div>
                </div>
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
                  name="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button onClick={() => handleCreateComment(post._id, text)}>
                  Comment
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
          <div className="bg-slate-800 w-11/12 md:w-1/2 xl:w-1/3 p-6 rounded-lg shadow-3xl">
            <div className="flex items-center mb-4">
              <Avatar height="20" width="20" user={user} />
              <h2 className="ml-4 text-gray-200 text-2xl font-medium">
                {user.name}
              </h2>
            </div>
            <p className="text-purple-400 mb-2">
              Followers:{" "}
              <span className="text-fuchsia-500">
                {currentUserFollowers.length}
              </span>
            </p>
            <p className="text-purple-400 mb-6">
              Following:{" "}
              <span className="text-fuchsia-500">
                {currentUserFollowing.length}
              </span>
            </p>
            <div className="flex justify-center">
              <button className="bg-lux-blue text-gray-200 font-bold py-1 px-2 mx-1 rounded-full hover:scale-105 hover:translate-x-1 hover:-translate-y-1 duration-500">
                See {user.name} profile
              </button>
              <button className="bg-fuchsia-600 text-gray-200 font-bold py-1 px-2 mx-1 rounded-full hover:scale-105 hover:translate-x-1 hover:-translate-y-1 duration-500">
                Follow {user.name}
              </button>
            </div>
            <div className="w-full my-4 flex items-center justify-center">
              <button
                className=" bg-red-500 text-gray-200 font-bold py-1 px-4 rounded-full hover:scale-105 hover:translate-x-1 hover:-translate-y-1 duration-500"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsFeed;
