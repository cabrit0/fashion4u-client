import { useNavigate } from "react-router-dom";
import { setCurrentPage, getCurrentPage } from "../pages/pageSlice";
import { useDispatch, useSelector } from "react-redux";

import { GiClothes } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { SlHome, SlUser } from "react-icons/sl";
import { TfiSettings } from "react-icons/tfi";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentPage = useSelector(getCurrentPage);
  //console.log(currentPage);

  const handleStoreClick = () => {
    dispatch(setCurrentPage("store"));
    navigate("/user/store");
  };
  const handleSearchClick = () => {
    dispatch(setCurrentPage("search"));
    navigate("/user/search");
  };
  const handleHomeClick = () => {
    dispatch(setCurrentPage("home"));
    navigate("/user/home");
  };
  const handleMyProfileClick = () => {
    dispatch(setCurrentPage("myProfile"));
    navigate("/user/myProfile");
  };
  const handleSettingsClick = () => {
    dispatch(setCurrentPage("settings"));
    navigate("/user/settings");
  };

  return (
    <div className="fixed bottom-0 w-full h-16 bg-slate-800 flex justify-around items-center rounded-t-3xl">
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={handleStoreClick}
      >
        <GiClothes className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">Store</span>
      </div>
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={handleSearchClick}
      >
        <BsSearch className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">Search</span>
      </div>
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={handleHomeClick}
      >
        <SlHome className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">Home</span>
      </div>
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={handleMyProfileClick}
      >
        <SlUser className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">My Profile</span>
      </div>
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={handleSettingsClick}
      >
        <TfiSettings className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">Settings</span>
      </div>
    </div>
  );
};

export default Navigation;
