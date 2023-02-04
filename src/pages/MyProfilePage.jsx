import React from "react";
import Banner from "../components/Banner";
import MyProfileBanner from "../components/MyProfileBanner";
import Navigation from "../components/Navigation";

const MyProfilePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen px-2">
      <Banner className="" />
      <div className="py-14 flex flex-col justify-center items-center w-full">
        <div className="w-full">
          <MyProfileBanner />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default MyProfilePage;
