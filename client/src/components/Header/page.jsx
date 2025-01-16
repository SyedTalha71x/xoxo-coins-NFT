/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import XoxoLogo2 from '../../../public/edited_logo.png'
import Avatar from '../../../public/Avatar.png'

const navItems = [
  { name: "Home", to: "/home" },
  { name: "Mint NFT", to: "/dashboard/mint-nfts" },
  { name: "Transfer NFT", to: "/dashboard/transfer-nft" },
  { name: "My NFTs", to: "/dashboard/my-nft" },
  { name: "About", to: "/home" },
];

const Page = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#1F2A37] border-b border-slate-500">
      <nav className="max-w-7xl mx-auto  p-5 ">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/home" className="flex items-center">
              <img src={XoxoLogo2} alt="XOXO COINS" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-4 items-center">
            {navItems.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className="text-white hover:text-blue-500 transition-all duration-300 ease-in-out px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-blue-800"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center">
            <div className="flex items-center space-x-3">
              <img src={Avatar} width={48} height={48} className="rounded-full" alt="Profile" />
              <div className="flex flex-col justify-start items-start">
                <span className="text-md font-medium text-white">John Doe</span>
                <span className="text-sm text-gray-300">john@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden transition-all duration-500 ease-in-out">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex transition-all duration-500 ease-in-out items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden transition-all duration-500 ease-in-out`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-500 hover:bg-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img src={Avatar} width={40} height={40} className="rounded-full" alt="Profile" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">John Doe</div>
                <div className="text-sm font-medium text-gray-400">john@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Page;
