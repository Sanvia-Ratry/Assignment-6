import { Check } from "lucide-react";

const Card = ({ data, buyBtn, cartProduct }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-7.5">
        {data.map((item) => {
          const isAdded = cartProduct.some((cartItem) => cartItem.id === item.id);

          return (
            <div key={item.id} className="p-6 border border-gray-300 rounded-2xl space-y-4">
              <div>
                <span className="border border-gray-200 p-2 rounded-3xl">{item.icon}</span>
              </div>
              <h2 className="font-bold text-2xl">{item.name}</h2>
              <p>{item.description}</p>
              <h2>
                <span className="font-bold text-2xl">\$ {item.price}</span>/mo
              </h2>

              <ul>
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    <Check className="text-green-700" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => buyBtn(item)}
                disabled={isAdded}
                className={`w-full text-white px-4 py-3 border border-none rounded-2xl transition-all ${
                  isAdded
                    ? `bg-green-600 cursor-not-allowed`
                    : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                }`}
              >
                {isAdded ? (
                  <>
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Added to the cart</span>
                    </span>
                  </>
                ) : (
                  "Buy Now"
                )}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Card;
