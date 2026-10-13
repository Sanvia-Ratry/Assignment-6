import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twite.png";

const Footer = () => {
  return (
    <div className="text-white px-13 sm:px-20 lg:px-30 pt-15 md:pt-30 pb-8 flex flex-col gap-10 sm:gap-20 bg-[#101727]">
      <div className="flex justify-between flex-wrap lg:flex-nowrap gap-8">
        <div className="flex-1 flex flex-col gap-4 max-w-sm">
          <h2 className="font-bold text-3xl">Digitools</h2>
          <p className="text-gray-300">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our
            suite of powerful tools.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-xl">Products</h2>
          <ol className="text-gray-300">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ol>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-xl">Company</h2>
          <ol className="text-gray-300">
            <li>About</li>
            <li>Blogs</li>
            <li>Career</li>
            <li>Press</li>
          </ol>
        </div>
        <div className="flex flex-col gap-4 flex-1 md:flex-initial">
          <h2 className="font-medium text-xl">Resources</h2>
          <ol className="text-gray-300">
            <li>Documentation</li>
            <li>Help</li>
            <li>Community</li>
            <li>Contacts</li>
          </ol>
        </div>
        <div className="flex flex-1 md:flex-initial flex-col gap-4 sm:mr-0">
          <h2 className="font-medium text-xl">Social Links</h2>
          <ol className="flex gap-3 flex-wrap sm:flex-nowrap ">
            <li className="w-fit border border-none p-2 bg-white rounded-4xl flex justify-center items-center">
              <img src={insta} className="h-6.25 w-6.25"></img>
            </li>
            <li className="w-fit border border-none p-2 bg-white rounded-4xl flex justify-center items-center">
              <img src={fb} className="h-6.25 w-6.25"></img>
            </li>
            <li className="w-fit border border-none p-2 bg-white rounded-4xl flex justify-center items-center">
              <img src={twitter} className="h-6.25 w-6.25"></img>
            </li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row justify-between border-t border-t-gray-400 pt-7">
        <div className="flex">
          <p className="text-gray-300 text-wrap">© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-3 text-gray-300">
          <p>Privacy Policy</p>
          <p> Terms of Service </p>
          <p>cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
