import { use, useState } from "react";
import "./App.css";
import Banner from "./components/banner";
import Nav from "./components/nav";
import Products from "./components/products";
import Rating from "./components/rating";
import Footer from "./components/footer";

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
    updatePrc(totalPrc + item.price);
  };
  const removeHandle = (itemRemove) => {
    updateCart(initial - 1);
    updatePrc(totalPrc - itemRemove.price);
    const updatedList = cartProduct.filter((item) => item.id !== itemRemove.id);
    updateProduct(updatedList);
  };
  const [totalPrc, updatePrc] = useState(0);

  const data = use(promise);
  console.log(data);
  return (
    <>
      <Nav Count={initial}></Nav>
      <Banner></Banner>
      <Rating></Rating>
      <Products
        productBtn={productBtn}
        cartBtn={cartBtn}
        cartProduct={cartProduct}
        Count={initial}
        buyBtn={buyBtn}
        data={data}
        activeView={activeView}
        totalPrc={totalPrc}
        removeHandle={removeHandle}
      ></Products>
      <Footer></Footer>
    </>
  );
}

export default App;
