import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import FeedBanner from "../components/FeedBanner";
import Navigation from "../components/Navigation";
import CreatePostModal from "../features/posts/CreatePost";
import { fetchAllPosts } from "../features/posts/globalPostsSlice";
import PostsFeed from "../features/posts/PostsFeed";

const HomeProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.globalPosts.posts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center w-screen px-2"
    >
      <Banner className="" />
      <motion.div
        className="py-14 flex flex-col justify-center items-center over w-full"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="containerX sm:containerXx overflow-scroll scrollbar-hide mt-2">
          <FeedBanner
            user={currentUser.user}
            handleModalOpen={handleModalOpen}
          />
          {isModalOpen && (
            <CreatePostModal handleModalClose={handleModalClose} />
          )}
          {posts.data ? (
            <PostsFeed posts={posts.data} className="" />
          ) : (
            <span className="loader"></span>
          )}
        </div>
      </motion.div>
      <Navigation />
    </motion.div>
  );
};
export default HomeProfilePage;
