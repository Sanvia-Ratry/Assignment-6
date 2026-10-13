import { ShoppingCart } from "lucide-react";

const CartProduct = ({ cartProduct, totalPrc, removeHandle, checkoutBtn }) => {
  const total = totalPrc.toFixed(2);
  return (
    <div className="border border-gray-300 rounded-3xl p-10 space-y-4">
      <h2 className="font-bold text-2xl text-center sm:text-left">Your Cart</h2>
      {cartProduct.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-2">
            {cartProduct.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-3 sm:p-5 border border-gray-200 bg-[#F9FAFC] flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-3xl"
                >
                  <div className="flex  items-center gap-2.5 sm:gap-4 flex-1">
                    <div className="border border-none p-2 bg-white rounded-full">{item.icon}</div>
                    <div>
                      <h2 className="font-semibold text-[16px] sm:text-xl ">{item.name}</h2>
                      <p className="text-[#627382]">
                        <span>$</span>
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeHandle(item)}
                      className="font-bold text-red-600 cursor-pointer ml-12 sm:ml-0"
                    >
                      remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between">
            <h2 className="text-[#627382]">Total:</h2>
            <h2 className="font-bold">
              $<span>{total}</span>
            </h2>
          </div>
          <button
            onClick={() => checkoutBtn(cartProduct)}
            className="w-full text-white px-4 py-3 border border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl"
          >
            Proceed to checkout
          </button>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center text-gray-400 gap-2 p-8">
          <ShoppingCart className="w-12 h-12"></ShoppingCart>
          <h2 className="text-center">Your cart is currently empty.</h2>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
