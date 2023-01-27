import React from "react";
import Banner from "../components/Banner";
import FeedBanner from "../components/FeedBanner";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";

const HomeProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col items-center">
      <Banner />
      <div className="overflow-hidden overflow-y-scroll no-scrollbar w-full">
        <FeedBanner user={currentUser.user} />
      </div>
      <Navigation />
    </div>
  );
};

export default HomeProfilePage;
