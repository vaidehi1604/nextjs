import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { useEffect, useState } from "react";




export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("i am use effect")
  }, []);
  
  const [cart,setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);

  const addToCart=(item,qty,price)=>{
    console.log("addd to cart");
    let newCart=cart 
    for (let index = 0; index < qty; index++) {
      // const element = qty;
      newCart.push([item,price])
    }
   console.log(newCart);
    setCart(newCart)
    setReloadKey(Math.random())
  }
  const removeFromCart=(item,qty)=>{
    let newCart=cart 
    let index=newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }
  const clearCart=(item)=>{}

  return  <><Navbar  key={reloadKey} cart={cart}/> <Component cart={cart} removeFromCart={removeFromCart}  addToCart={addToCart} clearCart={clearCart} {...pageProps} /><Footer/></>
}
