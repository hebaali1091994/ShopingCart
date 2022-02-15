import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import data from "../src/data.json"
import { useState } from "react";
import Product from "./components/Product/Product";

function App() {
  const [products,setProducts]=useState(data)
  console.log(products)
  return (
 
      <div className="layout">
       <Header/>
        <main>

          <div className="wrapper">
          <Product products={products}/>
            <div className="fliter">Filter</div>
          </div>

        </main>
       <Footer/>
      </div>
   
  );
}

export default App;
