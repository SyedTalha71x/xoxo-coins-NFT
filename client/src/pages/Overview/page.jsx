/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardHeader from "../../../public/card-header.png";
import CardHeader1 from "../../../public/card-header1.png";
import MagicKey from "../../../public/magic-line.png";
import Avatar from "../../../public/Avatar.png";
import { CiHeart } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import EtherumCoin from "../../../public/Icons-2.png";
import Icon1 from "../../../public/Icon.png";
import Icon2 from "../../../public/Icon (1).png";
import Graph1 from '../../../public/Graph.png'
import Graph2 from '../../../public/Graph (1).png'

export default function Overview() {
  return (
    <div className="min-h-screen w-full bg-black text-white p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="col-span-1 lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">Featured NFTs</h1>
             
            </div>
            <div className="flex gap-1">
            <button className="bg-gray-900 text-sm border border-slate-500 py-2 px-6 rounded-md text-white hover:bg-gray-700 transition-all duration-300 ease-in-out">
                Popular
              </button>
              <button className="bg-transparent border border-slate-500 text-xl p-2 rounded-md text-white hover:bg-gray-950 transition-all duration-300 ease-in-out">
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button className="bg-gray-900 p-2 rounded-md border border-slate-500 text-xl text-white hover:bg-gray-950 transition-all duration-300 ease-in-out">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  src={CardHeader || "/placeholder.svg"}
                  alt="NFT Artwork"
                  className="w-full h-48 object-cover object-top"
                />
              </div>
              <div className="p-4 cursor-pointer">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col gap-0.5 justify-start items-start">
                    <div className="flex gap-1">
                      <div>
                        <img
                          src={Avatar || "/placeholder.svg"}
                          alt=""
                          className="h-7 w-7 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">
                          @Debbie111
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full mb-2">
                  <h3 className="font-semibold mr-auto">Ready Players</h3>
                  <div>
                    <CiHeart className="text-xl text-gray-400" />
                  </div>
                </div>
                <div className="flex justify-between w-full mb-2 items-center">
                  <span className="text-sm text-gray-300">Last Bid</span>
                  <span className="text-sm text-gray-300">1.47 ETH</span>
                </div>
                <button className="w-full flex justify-center items-center py-2 mb-2 text-sm bg-white text-black cursor-pointer rounded-lg transition transition-all duration-200 ease-in-out hover:opacity-90">
                  <img
                    src={MagicKey || "/placeholder.svg"}
                    alt="Mint"
                    className="w-5 h-5 mr-2 text-black"
                  />
                  Mint your First FT
                </button>
                <button className="w-full flex justify-center items-center py-2 bg-black rounded-lg text-sm text-white cursor-pointer transition transition-all duration-200 ease-in-out hover:opacity-90">
                  <img
                    src={MagicKey || "/placeholder.svg"}
                    alt="Details"
                    className="w-5 h-5 mr-2 filter invert"
                  />
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  src={CardHeader1 || "/placeholder.svg"}
                  alt="NFT Artwork"
                  className="w-full h-48 object-cover object-top"
                />
              </div>
              <div className="p-4 cursor-pointer">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col gap-0.5 justify-start items-start">
                    <div className="flex gap-1">
                      <div>
                        <img
                          src={Avatar || "/placeholder.svg"}
                          alt=""
                          className="h-7 w-7 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">
                          @Debbie111
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full mb-2">
                  <h3 className="font-semibold mr-auto">Ready Players</h3>
                  <div>
                    <CiHeart className="text-xl text-gray-400" />
                  </div>
                </div>
                <div className="flex justify-between w-full mb-2 items-center">
                  <span className="text-sm text-gray-300">Last Bid</span>
                  <span className="text-sm text-gray-300">1.47 ETH</span>
                </div>
                <button className="w-full flex justify-center items-center py-2 mb-2 text-sm bg-white text-black cursor-pointer rounded-lg transition transition-all duration-200 ease-in-out hover:opacity-90">
                  <img
                    src={MagicKey || "/placeholder.svg"}
                    alt="Mint"
                    className="w-5 h-5 mr-2 text-black"
                  />
                  Mint your First FT
                </button>
                <button className="w-full flex justify-center items-center py-2 bg-black rounded-lg text-sm text-white cursor-pointer transition transition-all duration-200 ease-in-out hover:opacity-90">
                  <img
                    src={MagicKey || "/placeholder.svg"}
                    alt="Details"
                    className="w-5 h-5 mr-2 filter invert"
                  />
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-4 ">
          <h2 className="text-xl font-semibold mb-4">My Wallet</h2>
          <div className="bg-zinc-900 rounded-xl p-4">
            <h2 className="text-sm text-center text-gray-400 mb-2">Your Balance</h2>
            <div className="text-md text-gray-300 text-center font-semibold mb-4">ETH 21,533.10</div>

            <div className="flex mt-3 items-center gap-2 bg-black rounded-lg p-2 mb-6">
              <img
                src={EtherumCoin || "/placeholder.svg"}
                alt="ETH"
                className="w-6 h-6 rounded-full"
              />
              <span>Ethereum ETH</span>
              <svg
                className="w-4 h-4 ml-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={Icon1 || "/placeholder.svg"} alt="" />
                  </div>
                  <div className="flex flex-col gap-1 mt-7">
                    <div className="text-sm text-gray-400 mb-1">Earnings</div>
                    <div className="text-green-400">7,505 ETH</div>
                  </div>

                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={Icon2 || "/placeholder.svg"} alt="" />
                  </div>
                  <div className="flex flex-col gap-1 mt-7">
                    <div className="text-sm text-gray-400 mb-1">Spendings</div>
                    <div className="text-red-400">2,235 ETH</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-24">
                <img src={Graph1 || "/placeholder.svg"} alt="" />
              </div>
              <div className="h-24">
                <img src={Graph2 || "/placeholder.svg"} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <div className="bg-zinc-900 rounded-xl p-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="">
                <tr className="text-gray-400 border-b border-gray-700 text-sm">
                  <th className="text-left py-2">TRANSACTION</th>
                  <th className="text-left py-2">DATE & TIME</th>
                  <th className="text-left py-2">AMOUNT</th>
                  <th className="text-left py-2">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    transaction: "Payment from Bonnie Green",
                    date: "Apr 23, 2021",
                    amount: "$2300",
                    status: "Completed",
                  },
                  {
                    transaction: "Payment refund to #00910",
                    date: "Apr 23, 2021",
                    amount: "$670",
                    status: "Completed",
                  },
                  {
                    transaction: "Payment failed from #087651",
                    date: "Apr 18, 2021",
                    amount: "$234",
                    status: "Cancelled",
                  },
                  {
                    transaction: "Payment from Lana Byrd",
                    date: "Apr 15, 2021",
                    amount: "$5000",
                    status: "In progress",
                  },
                  {
                    transaction: "Payment from Jese Leos",
                    date: "Apr 15, 2021",
                    amount: "$2300",
                    status: "Completed",
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-t border-zinc-800">
                    <td className="py-3">{item.transaction}</td>
                    <td className="py-3">{item.date}</td>
                    <td className="py-3">{item.amount}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-md text-xs ${
                          item.status === "Completed"
                            ? "bg-[#DEF7EC] text-[#03543F]"
                            : item.status === "Cancelled"
                            ? "bg-red-100 text-[#03543F]"
                            : "bg-purple-100 text-blue-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

