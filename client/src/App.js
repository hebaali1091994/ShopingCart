import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import data from "../src/data.json";
import { useEffect, useState } from "react";
import Product from "./components/Product/Product";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import {Provider} from 'react-redux'
import store from "./components/Store/Store";
function App() {
  const [products, setProducts] = useState(data);
  const [order, setOrder] = useState("");
  const [size, setzsize] = useState("");
  const[cartItem,setCartItem]=useState(JSON.parse(localStorage.getItem('cartItem'))||[])
  const handleFilterSize = (e) => {
    setzsize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let newProducts = [...products];
      let ProductSet = newProducts.filter(
        (p) => p.size.indexOf(e.target.value) !== -1
      ); 
      setProducts(ProductSet);
    }
  };
  const handleFilterOrder = (e) => {
    let porder = e.target.value;
    setOrder(porder);
    let newProducts = [...products];
    let ProductSet = newProducts.sort(function (a, b) {
      if (porder ==="Lowest") {
        return a.price - b.price;
      } else if (porder === "Highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(ProductSet);
  };
const addToCart=(product)=>{
  const newProducts=[...cartItem]
  var isProductExist=false
  newProducts.forEach(p=>{
    if(p.id===product.id){
      p.quntity++
      isProductExist= true
    }
  })
  if(!isProductExist){
    newProducts.push({...product,quntity :1})
  }
  setCartItem(newProducts)

}
const remveProductfrmCart=(product)=>{
  const newProducts=[...cartItem]
  setCartItem(newProducts.filter(p=>p.id!==product.id))
  
}
// useEffect(()=>{
//   localStorage.setItem('cartItem',JSON.stringify(cartItem))
// },[cartItem])
  return (
    <Provider store={store}>
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product products={products} addToCart={addToCart}/>

          <Filter
          productsNumber={products.length}
            handleFilterSize={handleFilterSize}
            size={size}
            handleFilterOrder={handleFilterOrder}
            order={order}
          />
        </div>
  
        <Cart cartItem={cartItem} remveProductfrmCart={remveProductfrmCart}/>

      </main>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
