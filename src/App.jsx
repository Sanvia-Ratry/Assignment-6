import { use, useState } from "react";
import "./App.css";
import Banner from "./components/banner";
import Nav from "./components/nav";
import Products from "./components/products";

const promise = fetch("data.json").then((res) => res.json());

function App() {
  const [initial, updateCart] = useState(0);
  const [cartProduct, updateProduct] = useState([]);
  const [activeView, setView] = useState("products");
  const cartBtn = () => {
    console.log("cart button clicked...");
    setView("cartView");
  };
  const productBtn = () => {
    console.log("product button clicked...");
    setView("products");
  };
  const buyBtn = (item) => {
    updateProduct([...cartProduct, item]);
    updateCart(initial + 1);
  };

  const data = use(promise);
  console.log(data);
  return (
    <>
      <Nav Count={initial}></Nav>
      <Banner></Banner>
      <Products
        productBtn={productBtn}
        cartBtn={cartBtn}
        cartProduct={cartProduct}
        Count={initial}
        buyBtn={buyBtn}
        data={data}
        activeView={activeView}
      ></Products>
    </>
  );
}

export default App;
