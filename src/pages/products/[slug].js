import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Slug = ({ addToCart }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const paramsDATA = new URLSearchParams(window.location.search);
      const name = paramsDATA.get("slug");

      const token =
        "6d29396afd49f3d38034694e43b3c6b01f5619673eef8e8515b5be4e186bdcb71fdc53e4da2eb6a856a7368afffc26b068385915febfc41123eec56fe04e10f4bd1682d6db868074494965089e913bbe0683e4cc0d5c3bfb0df470fe71f06b48ee51524b4580b4ffe33cdeb65e17761e60146d16af6c4204bb161f013df9f00b";
      const axiosInstance = axios.create({
        headers: { Authorization: `Bearer ${token}` },
      });

      const response = await axiosInstance.get(
        `http://localhost:1337/api/products?filters[slug]=${slug}&populate=*`
      );
      console.log(slug);

      setData(response.data.data[0]);

      console.log(response.data.data[0]);

      console.log(slug);
    };

    fetchData();
  }, []);

  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      {data == undefined ? (
        <h1>loading...</h1>
      ) : (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap md:w-auto">
              {data.attributes.Image.data.attributes && (
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={`http://localhost:1337${data.attributes.Image.data.attributes.url}`}
                  // src={data.attributes.Image.data.attributes.url}
                />
              )}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {data ? data.attributes.title : null}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                 Pink Dress
                </h1>

                <p className="leading-relaxed">
                  {data ? data.attributes.description : null}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-400 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-orange-100 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹{data ? data.attributes.price : null}
                  </span>
                 
               
                </div>
                <div className="flex" >
                <button
                    onClick={() =>
                      addToCart(slug, 1, data ? data.attributes.price : null)
                    }
                    className="flex ml-auto text-white bg-gray-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      router.push("/checkout");
                    }}
                    className="flex ml-auto text-white bg-gray-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Checkout
                  </button>

                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Slug;
