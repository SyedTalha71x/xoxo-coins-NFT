/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import XoxoLogo from "../../../public/image 1.png";
import ProfileLogo from "../../../public/Ellipse 27.png";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Mini NFT", to: "/" },
  { name: "Transfer NFT", to: "/" },
  { name: "My NFTs", to: "/" },
  { name: "About", to: "/" },
];

const Page = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="">

    <nav className="border-b w-[85%]  mx-auto border-gray-200 ">
      <div className=" px-4 py-8  pb-3 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img src={XoxoLogo} alt="XOXO COINS" className="h-10 w-auto" />
            </a>
          </div>

          <div className="hidden sm:flex sm:space-x-8 items-center">
            {navItems.map((item, index) => (
              <Link
              to={item.to}
              key={index}
              className="text-gray-900 hover:text-blue-800 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-800"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center">
            <div className="flex items-center space-x-3">
              <img src={ProfileLogo} className="h-16 w-16 rounded-full" />
              <div className="flex flex-col justify-start items-start">
                <span className="text-md font-medium text-gray-900">John Doe</span>
                <span className="text-sm text-gray-500">john@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <Link
            to={item.to}
            key={index}
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <img
                src={ProfileLogo}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
                />
            </div>
            <div className="ml-3">
              <div className="flex flex-col justify-start items-start">
                <span className="text-md font-medium text-gray-900">John Doe</span>
                <span className="text-sm text-gray-500">john@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
                </div>
  );
};

export default Page;
