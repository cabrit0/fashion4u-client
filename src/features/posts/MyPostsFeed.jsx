import React, { useState } from "react";

const MyPostsFeed = ({ posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [dateSortedComments, setdateSortedComments] = useState([]);
  const [sortedComments, setSortedComments] = useState([]);
  const [viewAllComments, setViewAllComments] = useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
    const postComments = post.comments.map((comment) => comment.comment);
    setdateSortedComments(postComments);
    const sortedCmm = postComments.sort(
      (a, b) => b.likes.length - a.likes.length
    );
    setSortedComments(sortedCmm);
  };
  console.log(dateSortedComments);

  const handleCloseModal = () => {
    setShowModal(false);
    setViewAllComments(false);
  };

  const handleViewAllComments = () => {
    setViewAllComments(!viewAllComments);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        {posts.map((post) => (
          <div
            className="w-3/12 mt-4 m-2 hover:scale-105 hover:translate-x-2 hover:-translate-y-2 duration-500"
            key={post._id}
            onClick={() => handlePostClick(post)}
          >
            <img
              src={post.image}
              alt="Post"
              className="w-full h-48 object-cover shadow-xl rounded-2xl"
            />
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 h-full w-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className=" w-11/12 p-4 bg-slate-800 rounded-lg shadow-xl">
            <img
              src={selectedPost.image}
              alt="Selected Post"
              className="w-full rounded-2xl"
            />
            <div className="flex mt-4 text-gray-400">
              <div className=" mr-4">
                <p className="text-sm font-medium">
                  Likes:{" "}
                  <span className="text-yellow-500">
                    {" "}
                    {selectedPost.likes.length}
                  </span>
                </p>
              </div>
              <div className="">
                <p className="text-sm font-medium">
                  Comments:
                  <span className="text-yellow-500">
                    {" "}
                    {selectedPost.comments.length}
                  </span>
                </p>
              </div>
            </div>
            {dateSortedComments.length === 0 ? (
              <p className="font-bold text-yellow-500 my-2">
                No comments in this post yet...
              </p>
            ) : (
              !viewAllComments && (
                <div className="mt-4 px-4">
                  <p className="font-bold text-yellow-500">
                    Most Liked Comments:
                  </p>
                  {sortedComments.slice(0, 2).map((comment, index) => (
                    <div className="bg-slate-700 px-4 rounded-2xl">
                      <p key={index} className="text-gray-400 my-2">
                        {comment.text}{" "}
                        <span className="inline-block ml-4 text-xs text-yellow-600">
                          (
                          <span className="text-yellow-600">
                            {comment.likes.length}
                          </span>{" "}
                          likes)
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )
            )}
            <button
              className="mt-8 mx-2 px-2 py-1 text-fuchsia-600 font-bold border rounded-xl border-fuchsia-600 hover:shadow-xl hover:border-none hover:text-gray-300 hover:bg-fuchsia-600 hover:scale-110 hover:translate-x-1 hover:-translate-y-2 duration-500"
              onClick={handleViewAllComments}
            >
              {viewAllComments ? "Hide comments" : "View all comments"}
            </button>
            {viewAllComments && (
              <div className="mt-4 h-48 overflow-y-auto no-scrollbar">
                {dateSortedComments.map((comment) => (
                  <div
                    key={comment._id}
                    className="flex items-center mb-2 py-0.5 text-gray-400 bg-slate-700 px-4 rounded-2xl"
                  >
                    <div className="w-11/12 pl-2">
                      <p className="text-sm">{comment.text}</p>
                    </div>
                    <div className="w-1/12">
                      <p className="text-xs font-medium text-center flex flex-col items-center justify-center">
                        Likes:{" "}
                        <span className="text-yellow-500 font-bold">
                          {comment.likes.length}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button
              className="mt-8 px-2 py-1 text-red-500 font-medium border rounded-xl border-red-500 hover:border-none hover:text-gray-300 hover:bg-red-500 hover:scale-110 hover:translate-x-1 hover:-translate-y-2 duration-500"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPostsFeed;
