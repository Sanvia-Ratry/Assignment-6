import user from "../assets/user.png";
import pack from "../assets/package.png";
import rocket from "../assets/rocket.png";

const Manual = () => {
  return (
    <div className=" flex flex-col gap-10 bg-[#F9FAFC] px-20 sm:px-30 md:px-40 lg:px-50 py-20 md:py-30">
      <div className="space-y-4 text-center">
        <h1 className="font-extrabold text-5xl text-left sm:text-center">Get Started in 3 Steps</h1>
        <p className="text-gray-400 text-left sm:text-center">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border border-none rounded-4xl">
        <div className="relative min-h-96 flex flex-col justify-center items-center bg-white border border-gray-100 rounded-2xl p-8 space-y-4">
          <span className="absolute top-3 right-6 px-2.5 py-2 border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            01
          </span>
          <img className="p-1.5 border border-none bg-purple-200 rounded-full" src={user}></img>
          <h2 className="font-bold text-2xl text-center">Create Account</h2>
          <p className="text-center text-gray-400">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="relative min-h-96 flex flex-col justify-center items-center bg-white border border-gray-100 rounded-2xl p-8 space-y-4">
          <span className="absolute top-3 right-6 px-2.5 py-2 border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            02
          </span>
          <img className="p-1.5 border border-none bg-purple-200 rounded-full" src={pack}></img>
          <h2 className="font-bold text-2xl text-center">Choose Products</h2>
          <p className="text-center text-gray-400">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="relative min-h-96 flex flex-col justify-center items-center bg-white border border-gray-100 rounded-2xl p-8 space-y-4">
          <span className="absolute top-3 right-6 px-2.5 py-2 border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            03
          </span>
          <img className="p-1.5 border border-none bg-purple-200 rounded-full" src={rocket}></img>
          <h2 className="font-bold text-2xl text-center">Start Creating</h2>
          <p className="text-center text-gray-400">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manual;
