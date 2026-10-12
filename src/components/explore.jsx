const Explore = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  px-50 py-30 text-center text-white space-y-4">
      <h2 className="font-extrabold text-4xl">Ready to Transform Your Workflow?</h2>
      <p className="text-gray-300">
        Join thousands of professionals who are already using Digitools to work smarter. Start your
        free trial today.
      </p>
      <div className="space-x-4 mt-8">
        <button className="min-w-40 font-medium text-[16px] px-4 py-3 border border-none rounded-4xl bg-white text-purple-600">
          Explore Products
        </button>
        <button className="min-w-40 font-medium px-4 py-3 border border-white rounded-4xl ">
          View Pricing
        </button>
      </div>
      <p className="text-gray-300">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Explore;
