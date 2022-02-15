import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import data from "../src/data.json";
import { useState } from "react";
import Product from "./components/Product/Product";
import Filter from "./components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(data);
  const [order, setOrder] = useState("");
  const [size, setzsize] = useState("");
  const handleFilterSize = (e) => {
    setzsize(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let newProducts = [...products];
      let ProductSet = newProducts.filter(
        (p) => p.size.indexOf(e.target.value) != -1
      );
      setProducts(ProductSet);
    }
  };
  const handleFilterOrder = (e) => {
    let porder = e.target.value;
    setOrder(porder);
    let newProducts = [...products];
    let ProductSet = newProducts.sort(function (a, b) {
      if (porder =="Lowest") {
        return a.price - b.price;
      } else if (porder == "Highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(ProductSet);
  };
  console.log(products);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product products={products} />

          <Filter
            handleFilterSize={handleFilterSize}
            size={size}
            handleFilterOrder={handleFilterOrder}
            order={order}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
