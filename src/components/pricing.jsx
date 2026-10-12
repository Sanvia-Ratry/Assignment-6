import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-10 px-50 py-30">
      <div className="space-y-4 text-center">
        <h1 className="font-extrabold text-5xl">Simple, Transparent Pricing</h1>
        <p className="text-gray-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7.5">
        <div className="gap-6 px-6 py-6 flex flex-col border rounded-3xl border-gray-100  bg-[#F9FAFC]">
          <div>
            <h2 className="font-bold text-2xl">Starter</h2>
            <p className="text-gray-500">Perfect for getting started</p>
          </div>
          <h2 className="text-gray-500">
            <span className="font-bold text-[40px] text-black">$0</span>/month
          </h2>
          <ol className="text-gray-500">
            <li className="flex gap-1.5">
              <Check className="text-green-500"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-green-500"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-green-500"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-green-500"></Check>Access to 10 free tools
            </li>
          </ol>
          <button className="mt-auto text-white px-4 py-3 rounded-4xl font-bold border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full">
            Get Started Free
          </button>
        </div>
        <div className="relative gap-6 px-6 py-6 flex flex-col border border-none rounded-3xl border-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <button className="absolute -top-3 right-25 px-3 py-1 border border-none rounded-4xl bg-amber-100 text-amber-600">
            Most Popular
          </button>
          <div>
            <h2 className="font-bold text-2xl text-white">Pro</h2>
            <p className="text-gray-50">Perfect for getting started</p>
          </div>
          <h2 className="text-gray-50">
            <span className="font-bold text-[40px]  text-white">$29</span>/month
          </h2>
          <ol className="text-gray-50">
            <li className="flex gap-1.5">
              <Check className="text-white"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-white"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-white"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-white"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-white"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5 ">
              <Check className="text-white"></Check>Access to 10 free tools
            </li>
          </ol>
          <button className="text-purple-700 mt-auto px-4 py-3 rounded-4xl font-bold border bg-white w-full">
            Start Pro Trial
          </button>
        </div>
        <div className="gap-6 px-6 py-6 flex flex-col border rounded-3xl border-gray-100  bg-[#F9FAFC]">
          <div>
            <h2 className="font-bold text-2xl">Enterprise</h2>
            <p className="text-gray-500">Perfect for getting started</p>
          </div>
          <h2 className="text-gray-500">
            <span className="font-bold text-[40px]  text-black">$99</span>/month
          </h2>
          <ol className="text-gray-500">
            <li className="flex gap-1.5">
              <Check className="text-green-500"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-green-500"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-green-500"></Check>Access to 10 free tools
            </li>
            <li className="flex gap-1.5">
              <Check className="text-green-500"></Check>Access to 10 free tools
            </li>
          </ol>
          <button className="text-white mt-auto px-4 py-3 rounded-4xl font-bold border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full">
            Contact sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
