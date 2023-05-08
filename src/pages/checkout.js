import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const checkout = ({ cart }) => {
  const router = useRouter();
  const [subtotal, setSubTotal] = useState(0);
  const [form, setForm] = useState({ name: " ", email: " ", address: " " });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  let headers = {
    Authorization:
      "Bearer 6d29396afd49f3d38034694e43b3c6b01f5619673eef8e8515b5be4e186bdcb71fdc53e4da2eb6a856a7368afffc26b068385915febfc41123eec56fe04e10f4bd1682d6db868074494965089e913bbe0683e4cc0d5c3bfb0df470fe71f06b48ee51524b4580b4ffe33cdeb65e17761e60146d16af6c4204bb161f013df9f00b",
  };
const removeFromCart=(item)=>{
  
  let newCart = cart;
  let index = newCart.indexOf(item);
  newCart.splice(index);
  // setSubTotal(0)
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

  const handleChange = (e) => {
    setForm({ ...form, name: name, email: email, address: address });
    console.log({ ...form, name: name, email: email, address: address });
  };
  const submit = async () => {
    let orderId = "ORDER" + Math.floor(10000 * Math.random());
    let otp = "OTP" + Math.floor(1000000 * Math.random());
    let url = "http://localhost:1337/api/order/pretransaction";
    // console.log("data --->", {
    //   orderId: orderId,
    //   otp: otp,
    //   ...name,
    //   ...email,
    //   ...address,
    //   cart: cart,
    //   name,
    //   email,
    //   address,
    //   amount:subtotal,
    // });
    await fetch(url, {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        address,
        orderId,
        otp: otp,
        product: cart,
        amount: subtotal,
      }),
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Checkout
            </h1>
            <h2>cart</h2>
            <div className="cart">
              {cart.length
                ? `your cart detalis are as follows:-`
                : `Your cart is empty`}
            </div>
            <ul>
              {cart.map((item) => {
                return (
                  <li key={Math.random()} className="px-8">
                    {item[0]} with a price of ₹{item[1]}
                  </li>
                );
              })}
            </ul>
            <div className="font-bold">subtotal: ₹{subtotal}</div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
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
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={submit}
                  className="px-5 mx-20  text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg"
                >
                  <Link href="/success">pay Now</Link>
                </button>
                {/* onClick={() =>
                      addToCart(slug, 1, data ? data.attributes.price : null)
                    } */}

                <button
                 onClick={()=>removeFromCart(cart,cart ? cart:null)}
                  className="px-2  mx-15  text-white bg-blue-900 border-0 py-2  focus:outline-none hover:bg-blue-900 rounded text-lg"
                >
                  <Link href="">Remove Cart</Link>
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
