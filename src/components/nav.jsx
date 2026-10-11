import Cart from "./cart";

const Nav = () => {
  return (
    <>
      <div className="nav flex justify-between items-center mx-50 py-4">
        <div className="text-4xl font-bold text-purple-800">DigiTools</div>
        <div>
          <ol className="flex gap-8 font-semibold">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ol>
        </div>
        <div className=" flex items-center gap-4 font-semibold">
          <Cart></Cart>
          <button>Login</button>
          <button className="text-white px-4 py-3 border border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">
            Get Started
          </button>
        </div>
      </div>
      <hr className="border-zinc-400"></hr>
    </>
  );
};

export default Nav;
