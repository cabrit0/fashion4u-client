import React from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";

const UserPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <h2 className="text-3xl text-center mt-24 text-lux-blue">User Page</h2>
      <Navigation />
    </div>
  );
};

export default UserPage;
