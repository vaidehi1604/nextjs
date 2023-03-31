import React, { useEffect, useState } from "react";

const checkout = ({ cart }) => {
  const [subtotal, setSubTotal] = useState(0);
  const [form,setForm]=useState({name:" ",email:" ",address:" "})
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("")

  useEffect(() => {
    console.log(cart);
    let myTotal = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1];
    }
    setSubTotal(myTotal);
  }, [])

const handleChange=(e)=>{
    setForm({...form,name:name,email:email,address:address})
    console.log({...form,name:name,email:email,address:address});
}


  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Checkout
            </h1>
            <h2>cart</h2>
            <div className="cart">{cart.length?`your cart detalis are as follows`:`Your cart is empty`}</div>
            <ul className="list-decimal">
              {cart.map((item) => {
                return (
                  <li className="px-8">
                    {item[0]} with a price of {item[1]}
                  </li>
                );
              })}
            </ul>
            <div className="font-bold">subtotal:{subtotal}</div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                   onChange={(e)=>setName(e.target.value)}
                   value={name}
                   type="text"
                   
                   
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                  onChange={(e)=>setAddress(e.target.value)}
                  value={address}
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
                  Buy Now
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default checkout;
