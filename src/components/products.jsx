import Card from "./card";
import CartProduct from "./cartProduct";

const Products = ({
  data,
  buyBtn,
  Count,
  cartProduct,
  productBtn,
  cartBtn,
  activeView,
  totalPrc,
  removeHandle,
}) => {
  return (
    <>
      <div className="px-50 py-30 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="font-extrabold text-5xl">Premium Digital Tools</h1>
          <p className="text-[20px] text-[#627382]">
            Choose from our curated collection of premium digital products designed <br></br>to
            boost your productivity and creativity.
          </p>
          <div className="border border-gray-300 rounded-4xl w-fit">
            <button
              onClick={productBtn}
              className={` px-4 py-3 border border-none rounded-3xl 
                ${
                  activeView === "products"
                    ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                    : "text-black"
                }
                `}
            >
              Products
            </button>
            <button
              onClick={cartBtn}
              className={`
            px-4 py-3 border border-none rounded-3xl
                ${
                  activeView === "cartView"
                    ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                    : "text-black"
                }
                `}
            >
              Cart <span>({Count})</span>
            </button>
          </div>
        </div>
        {activeView === "products" && (
          <Card cartProduct={cartProduct} buyBtn={buyBtn} data={data}></Card>
        )}

        {activeView === "cartView" && (
          <CartProduct
            removeHandle={removeHandle}
            totalPrc={totalPrc}
            cartProduct={cartProduct}
          ></CartProduct>
        )}
      </div>
    </>
  );
};

export default Products;
