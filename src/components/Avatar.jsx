const Avatar = ({ user }) => {
  let initials;
  if (!user) {
    return null;
  }

  if (user.avatar) {
    return (
      <img
        src={user.avatar}
        className="relative w-10 h-10 rounded-full hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5 duration-500"
        alt={user.name}
      />
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
      <div className="flex justify-center mx-1 bg-gray-400 w-10 h-10 rounded-full items-center text-lux-purple hover:scale-110 hover:translate-x-1 hover:-translate-y-0.5 duration-500">
        <p className="text-xl text-center">{initials}</p>
      </div>
    );
  }
};

export default Avatar;
