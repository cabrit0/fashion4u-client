import React, { useEffect } from "react";
import Banner from "../components/Banner";
import MyProfileBanner from "../components/MyProfileBanner";
import Navigation from "../components/Navigation";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../features/posts/globalPostsSlice";
import MyPostsFeed from "../features/posts/MyPostsFeed";

const MyProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const currentUserId = currentUser.user._id;
  const allPosts = useSelector((state) => state.globalPosts.posts);

  //console.log(currentUser);

  const filteredPosts = allPosts.data.filter(
    (post) => post.user._id === currentUserId
  );

  //console.log(filteredPosts);
  return (
    <div className="flex flex-col justify-center items-center w-screen px-2">
      <Banner className="" />
      <div className="py-14 flex flex-col justify-center items-center w-full">
        <div className="w-full">
          <MyProfileBanner />
          <div className="containerX sm:containerXx overflow-scroll scrollbar-hide mt-2">
            <MyPostsFeed posts={filteredPosts} />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default MyProfilePage;
