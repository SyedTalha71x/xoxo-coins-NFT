/* eslint-disable no-unused-vars */
import React from "react";
import HomeImage from "../../../public/Mosaic.png";
import NFTbutton from "../../../public/button.png";
const Page = () => {
  return (
    <div className="h-full lg:w-[90%] mx-auto bg-white">
      <div className=" px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Artists to Create, Mint, and Share NFTs Effortlessly.
            </h1>
            <h2 className="text-lg text-gray-600 mb-8">
              Join a platform built for creators. Mint your digital art, secure
              it on the blockchain, and connect with a global audience.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full  text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-lg">
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Mint your First FT
              </button>

              <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <div>
              <img
                src={HomeImage}
                alt="Main NFT character"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
