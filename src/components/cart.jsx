import { ShoppingCart } from "lucide-react";

const Cart = ({ Count }) => {
  return (
    <button className="relative">
      <span className="flex justify-center items-center min-h-5 min-w-5 text-xs text-amber-50 absolute bottom-4 left-4.5 border border-none rounded-full bg-red-600">
        {Count}
      </span>
      <ShoppingCart></ShoppingCart>
    </button>
  );
};

export default Cart;
