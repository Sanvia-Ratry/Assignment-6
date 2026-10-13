const Rating = () => {
  return (
    <div className="text-white grid grid-cols-3 px:40 lg:px-45 xl:px-52 py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className=" flex flex-col items-center gap-3 border-r border-r-fuchsia-300 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl">50K</h1>
        <p className="font-medium text-xl sm:text-2xl">Active Users</p>
      </div>

      <div className="flex flex-col items-center gap-3 border-r border-r-fuchsia-300 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl">200+</h1>
        <p className="font-medium text-xl sm:text-2xl">Premium Tools</p>
      </div>

      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl">4.9</h1>
        <p className="font-medium text-xl sm:text-2xl">Rating</p>
      </div>
    </div>
  );
};

export default Rating;
