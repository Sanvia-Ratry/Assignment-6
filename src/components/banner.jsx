import { Play } from "lucide-react";
import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="mx-20 sm:mx-30 lg:mx-40 xl:mx-50 my-15 flex flex-col md:flex-row gap-15 items-stretch">
      <div className="w-full md:w-[50%] space-y-4 my-auto">
        <button className="flex gap-2 items-center text-purple-600 font-medium bg-[#E1E7FF] rounded-3xl px-4 py-2">
          <span className="relative">
            <span className=" inline-block w-3.5 h-3.5 bg-purple-300 border-2 border-purple-400 rounded-full"></span>
            <span className="absolute top-2 right-1 bottom-0.8 inline-block w-1.5 h-1.5 bg-purple-600 border-2 rounded-full"></span>
          </span>
          <span className="md:text-nowrap">New: AI-Powered Tools Available</span>
        </button>
        <h1 className=" text-5xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-[20px] text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity software—all in one
          place. Start creating faster today.<br></br> Explore Products
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="text-nowrap font-semibold text-white px-4 py-3 md:p-2 lg:px-4 lg:py-3 border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">
            Explore Products
          </button>
          <button className="text-purple-600 font-semibold px-4 py-3 md:p-3 lg:px-4 lg:py-3 border-2 border-purple-600  rounded-3xl flex lg:gap-2 justify-center items-center text-nowrap">
            <Play className="text-purple-600"></Play>
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-[50%] h-auto flex-1 flex items-center">
        <img src={bannerImg}></img>
      </div>
    </div>
  );
};

export default Banner;
