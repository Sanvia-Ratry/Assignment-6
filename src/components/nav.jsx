import { Menu } from "lucide-react";
import Cart from "./cart";

const Nav = ({ Count, menuToggle, menu }) => {
  return (
    <>
      <div className="flex justify-between items-center w-[85%] md:w-[85%]  xl:w-[70%] mx-auto py-4">
        <div className="lg:text-4xl text-2xl md:text-3xl font-bold text-purple-800">DigiTools</div>
        <div>
          <ol className="hidden lg:flex gap-2 md:gap-4 lg:gap-8 font-semibold">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ol>
        </div>
        <div className=" flex items-center gap-4 font-semibold">
          <Cart Count={Count}></Cart>
          <button>Login</button>
          <button className="hidden md:block w-fit text-white px-4 py-3 border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">
            Get Started
          </button>
          <button className="lg:hidden" onClick={() => menuToggle()}>
            <Menu></Menu>
          </button>
        </div>
      </div>
      {menu === true && (
        <div className="lg:hidden absolute top-15 right-[8%]  w-[35%] md:w-[40%] ml-auto pb-6 animate-fade-in">
          <ol className="flex flex-col gap-4 font-semibold text-purple-700 bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <li className="py-2 border-b border-gray-200 active:shadow-md active:shadow-purple-200">
              Products
            </li>
            <li className="py-2 border-b border-gray-200 active:shadow-md active:shadow-purple-200">
              Features
            </li>
            <li className="py-2 border-b border-gray-200 active:shadow-md active:shadow-purple-200">
              Pricing
            </li>
            <li className="py-2 border-b border-gray-200 active:shadow-md active:shadow-purple-200">
              Testimonials
            </li>
            <li className="pb-2 active:shadow-md active:shadow-purple-200">FAQ</li>
          </ol>
        </div>
      )}
      <hr className="border-zinc-400"></hr>
    </>
  );
};

export default Nav;
