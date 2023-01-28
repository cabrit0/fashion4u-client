import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  }, []);

  console.log(posts.data);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen px-2">
      <Banner className="" />
      <div className="py-14 flex flex-col justify-center items-center over w-full">
        <FeedBanner user={currentUser.user} handleModalOpen={handleModalOpen} />
        {isModalOpen && <CreatePostModal handleModalClose={handleModalClose} />}
        <div className="containerX overflow-scroll scrollbar-hide mt-4">
          {posts.data && <PostsFeed posts={posts.data} className="" />}
        </div>
      </div>
      <Navigation />
    </div>
  );
};
export default HomeProfilePage;
