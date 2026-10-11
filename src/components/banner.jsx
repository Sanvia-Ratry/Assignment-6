import { Play } from "lucide-react";
import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="mx-50 my-15 flex gap-15 items-stretch">
      <div className="max-w-160 space-y-4 my-auto">
        <button className="flex gap-2 items-center text-purple-600 font-medium bg-[#E1E7FF] rounded-3xl px-4 py-2">
          <span className="relative">
            <span className=" inline-block w-3.5 h-3.5 bg-purple-300 border-2 border-purple-400 rounded-full"></span>
            <span className="absolute top-2 right-1 bottom-0.8 inline-block w-1.5 h-1.5 bg-purple-600 border-2 rounded-full"></span>
          </span>
          <span>New: AI-Powered Tools Available</span>
        </button>
        <h1 className="text-7xl font-extrabold">Supercharge Your Digital Workflow</h1>
        <p className="text-[20px] text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity software—all in one
          place. Start creating faster today.<br></br> Explore Products
        </p>
        <div className="flex gap-4">
          <button className="font-semibold text-white px-4 py-3 border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">
            Explore Products
          </button>
          <button className="text-purple-600 font-semibold px-4 py-3 border-2 border-purple-600  rounded-3xl flex gap-2.5 items-center">
            <Play className="text-purple-600"></Play>Watch Demo
          </button>
        </div>
      </div>
      <div className="min-h-full flex-1">
        <img src={bannerImg}></img>
      </div>
    </div>
  );
};

export default Banner;
