import React from 'react'
import { useEffect,useState } from "react";
import axios from 'axios';

const cart = ({cart}) => {
  const [subtotal, setSubTotal] = useState(0);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const token =
        "6d29396afd49f3d38034694e43b3c6b01f5619673eef8e8515b5be4e186bdcb71fdc53e4da2eb6a856a7368afffc26b068385915febfc41123eec56fe04e10f4bd1682d6db868074494965089e913bbe0683e4cc0d5c3bfb0df470fe71f06b48ee51524b4580b4ffe33cdeb65e17761e60146d16af6c4204bb161f013df9f00b";
      const axiosInstance = axios.create({
        headers: { Authorization: `Bearer ${token}` },
      });

      const response = await axiosInstance.get(
        "http://localhost:1337/api/products?populate=*"
      );
      setData(response.data.data);
      console.log(response.data.data);
    };

    fetchData();
  }, []);

    const removeFromCart=(item)=>{
  
        let newCart = cart;
        let index = newCart.indexOf(item);
        newCart.splice(index);
        setSubTotal(0)
      }
        useEffect(() => {
          console.log(cart);
          let myTotal = 0;
          for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            myTotal = myTotal + cart[index][1];
          }
          setSubTotal(myTotal);
        }, []);
    return (
        <div className=" flex container mx-auto py-60 px-80 justify-center ">
   <a href="#" className="block max-w-sm p-6 text-white bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
          <h1><strong>cart</strong></h1>
            <div className="card">
              {cart.length
                ? `your cart detalis are as follows:-`
                : `Your cart is empty`}
            </div>
           
            
              {cart.map((item) => {
                return (
                    <ul>
                  <li key={Math.random()} className="px-8">
                    {item[0]} with a price of ₹{item[1]}
                  </li>
                 
                </ul>
               
                );
           
                  
                 
        })}

            <div className="font-bold text-center">subtotal: ₹{subtotal}</div>
         
            <button
                 onClick={()=>removeFromCart(cart,cart ? cart:null)}
                  className=" flex p-10  mx-auto content-center  text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg justify-center"
                >
                  Remove Cart
                </button>
        </a>
          </div>
      
      );
}

export default cart