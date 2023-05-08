import React from "react";
import Link from "next/link";

const Navbar = ({ cart }) => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src="/shopping-cart-icon.svg" alt="" className="w-10" />
            <span className="ml-3 text-gray-500 text-xl">Shopify</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/products" className="mr-5 hover:text-gray-900">
              Product
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/cart" className="mr-5 hover:text-gray-900">
              Cart({cart.length})
            </Link>
          </nav>
          <button className="text-white inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
