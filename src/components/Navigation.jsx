import { useNavigate } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { SlHome, SlUser } from "react-icons/sl";
import { TfiSettings } from "react-icons/tfi";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full h-16 bg-slate-800 flex justify-around items-center rounded-t-3xl">
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={() => navigate("/store")}
      >
        <GiClothes className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">Store</span>
      </div>
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={() => navigate("/search")}
      >
        <BsSearch className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">Search</span>
      </div>
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={() => navigate("/")}
      >
        <SlHome className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">Home</span>
      </div>
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={() => navigate("/my-profile")}
      >
        <SlUser className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">My Profile</span>
      </div>
      <div
        className="flex justify-center items-center text-3xl text-lux-purple hover:text-lux-yellow hover:scale-125 cursor-pointer duration-500"
        onClick={() => navigate("/settings")}
      >
        <TfiSettings className=" sm:inline" />
        <span className="mx-2 hidden sm:inline">Settings</span>
      </div>
    </div>
  );
};

export default Navigation;
