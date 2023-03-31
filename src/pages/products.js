import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const products = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token =
        "26124a4732fbefeaaa11410544f23ae6ebfc786361fd4acc82ab90ebfe855b6aa8fc63640575179a26f63744029cabf181c891157e606404f718d25327d6b023ee57101d273206f026081926129ac29694c2bab91841fd6100c454af28824edd07e3963c95f50bed9e9c4577e3d2893c436a338a912dab465d4b0018224d007e";
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
  // return <div>{data ? data : 'Loading...'}</div>;
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Product List{" "}
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Buy the Product from List
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {data &&
              data.map((item) => (
                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-60 rounded w-full  object-center mb-6"
                      src={
                        item.attributes.Image.data &&
                        item.attributes.Image.data.attributes.url
                      }
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.attributes.slug}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.attributes.title}
                    </h2>
                    <div className="hidden bg-red-800 bg-black-800 bg-red-800 bg-pink-800 bg-blue-800 bg-black"></div>
                    <button
                      className={
                        "border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " +
                        `bg-${item.attributes.color}-800`
                      }
                    ></button>
                    <p className="leading-relaxed text-base">
                      {item.attributes.description}
                    </p>
                    <Link href={`/products/${item.attributes.slug}`}>
                    <button className="text-white inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      Buy Now
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// export  const getServerSideProps=async() =>{
//   headers={Authorization:"Bearer d70900758d744e6c6b3f63178a224d86807b79c083c007b430ace65e2f27ab4f39ef81eae49eee0c47b5b6310d3d6a61081560b4001961ecd2929f0803bd2debb2102bad4e7022918f39fb75f26b815a7e39c3aae7087c0f7cb7943bf952c74ad60eb809c0d96f7aaf4fe081480d67f631b95b1120dbda7a4d767bdee8f4b626"}

// await axios.get("http://localhost:1337/api/categories",{headers: headers}).then(res => console.log(res.data))
// let products = await response.data;
// console.log(" produts---> ", response);
// return {
//   props: {
//     products: products,
//   },

// };
// }

export default products;
