/* eslint-disable no-unused-vars */
import React from "react";
import HomeImage from "../../../public/Mosaic.png";
import NFTbutton from "../../../public/button.png";
import MagicKey from "../../../public/magic-line.png";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="h-full lg:w-[90%] mx-auto ">
        <div className=" px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Empowering Artists to Create, Mint, and Share NFTs Effortlessly.
              </h1>
              <h2 className="text-lg text-gray-500 mb-8">
                Join a platform built for creators. Mint your digital art,
                secure it on the blockchain, and connect with a global audience.
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link to={"/dashboard/mint-nfts"}>
                <button className="inline-flex items-center gap-1 px-8 py-3 border border-transparent text-base font-medium rounded-full  text-black bg-white hover:bg-slate-200 transition-all duration-300 ease-in-out  shadow-2xl">
                  <img src={MagicKey} className="" alt="" />
                  Mint your First FT
                </button>
                </Link>

                <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-white bg-[#121212] ">
                  <img src={MagicKey} className="filter invert" alt="" />
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
    </div>
  );
};

export default Page;
