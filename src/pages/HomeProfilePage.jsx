import React, { useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import FeedBanner from "../components/FeedBanner";
import Navigation from "../components/Navigation";
import CreatePostModal from "../features/posts/CreatePost";

const HomeProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <Banner />
      <div className="overflow-hidden overflow-y-scroll no-scrollbar w-full">
        <FeedBanner user={currentUser.user} handleModalOpen={handleModalOpen} />
        {isModalOpen && <CreatePostModal handleModalClose={handleModalClose} />}
      </div>
      <Navigation />
    </div>
  );
};
export default HomeProfilePage;
