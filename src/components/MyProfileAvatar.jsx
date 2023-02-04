const MyProfileAvatar = ({ user, onClick }) => {
  let initials;
  if (!user) {
    return null;
  }

  if (user.avatar) {
    return (
      <div className="relative w-20 h-20 rounded-full hover:scale-105 hover:translate-x-1 hover:-translate-y-0.5 duration-500">
        <img
          src={user.avatar}
          className="w-full h-full rounded-full"
          alt={user.name}
        />
        <div className="absolute bottom-0 right-0 rounded-full bg-lux-purple  w-5 h-5 flex justify-center items-center hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5 duration-500">
          <button
            className="text-white text-center text-xl font-bold"
            onClick={onClick}
          >
            +
          </button>
        </div>
      </div>
    );
  } else {
    if (!user.name) {
      return null;
    }
    initials = user.name
      .split(" ")
      .map((name) => name[0].toUpperCase())
      .join("");
    return (
      <div className="relative w-20 h-20 bg-gray-400 rounded-full flex justify-center items-center hover:scale-105 hover:translate-x-1 hover:-translate-y-0.5 duration-500">
        <p className="text-lux-purple text-xl">{initials}</p>
        <div className="absolute bottom-0 right-0 rounded-full bg-lux-purple  w-5 h-5 flex justify-center items-center hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5 duration-500">
          <button
            className="text-white text-center text-xl font-bold"
            onClick={onClick}
          >
            +
          </button>
        </div>
      </div>
    );
  }
};

export default MyProfileAvatar;
