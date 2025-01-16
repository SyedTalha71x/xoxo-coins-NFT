/* eslint-disable no-unused-vars */
import { useState } from "react";
import MagicKey from "../../../public/magic-line.png";
import InfoButton from "../../../public/info.png";
import Avatar from "../../../public/Avatar.png";

import CardHeader1 from '../../../public/card-header (1).png'
import CardHeader2 from '../../../public/card-header2.png'

export default function Page() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedNfts, setSelectedNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const nfts = [
    {
      id: 1,
      title: "Digital Masterpiece #001",
      tokenId: "#6767",
      username: "@Debbie111",
      image: "/card-header (1).png",
    },
    {
      id: 2,
      title: "Digital Masterpiece #002",
      tokenId: "#6768",
      username: "@Debbie222",
      image: "/card-header2.png",
    },
  ];

  const handleNftSelect = (id) => {
    setSelectedNfts((prev) => {
      if (prev.includes(id)) {
        return prev.filter((nftId) => nftId !== id);
      }
      return [...prev, id];
    });
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-black lg:p-7 md:p-6 sm:p-2 p-2">
      <h1 className="mb-6 text-xl font-medium text-white">
        Select NFT to Transfer
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-[#1F2A37] py-2 pl-8 pr-4 text-sm text-white placeholder-gray-400 rounded-lg outline-none"
            />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {nfts.map((nft) => (
            <div
              key={nft.id}
              onClick={() => handleNftSelect(nft.id)}
              className={`rounded-3xl cursor-pointer transition-all duration-200 bg-[#1E1E1E] 
                ${
                  selectedNfts.includes(nft.id)
                    ? "border-[1px] border-blue-700 shadow-md shadow-blue-500"
                    : "border-[1px] border-transparent"
                }`}
            >
              <div className="flex gap-4 overflow-hidden">
                <div className="h-40 w-40 bg-gray-700  rounded-l-3xl overflow-hidden">
                  <img
                    src={nft.image }
                    alt={nft.title}
                    className="w-40 h-40 object-cover  rounded-l-3xl"
                  />
                </div>

                <div className="flex flex-grow p-4 flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex gap-1 items-center">
                          <div>
                            <img
                              src={Avatar || "/placeholder.svg"}
                              alt=""
                              className="rounded-full h-4 w-4"
                            />
                          </div>
                          <span className="text-sm text-gray-400">
                            {nft.username}
                          </span>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-white">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {nft.title}
                    </h3>
                    <p className="text-sm flex justify-between items-center text-gray-400">
                      <div>Token ID</div>
                      <span className="text-white">{nft.tokenId}</span>
                    </p>
                  </div>
                  <button className="w-full mt-2 flex justify-center items-center py-2 mb-2 text-sm bg-white text-black cursor-pointer rounded-full transition">
                    <img
                      src={MagicKey || "/placeholder.svg"}
                      alt="Mint"
                      className="w-5 h-5 mr-2 text-black"
                    />
                    Mint your First FT
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-lg bg-[#1F2A37] p-4">
            <h3 className="text-sm text-white">Additional Details:</h3>
            <div className="mt-2 space-y-2 text-sm">
              <p className="text-white">
                Token ID: <span className="text-white">12345</span>
              </p>
              <p className="text-white">
                IPFS Link:{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  View your NFT on IPFS
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-[#1F2A37] lg:p-7 md:p-5 sm:p-3 p-3">
          <h2 className="mb-2 flex gap-1 items-center text-lg text-gray-200 font-bold">
            Recipient Wallet Address
            <div>
              <img
                src={InfoButton || "/placeholder.svg"}
                className="h-5 w-5"
                alt=""
              />
            </div>
          </h2>

          <form onSubmit={handleTransfer} className="space-y-4 mt-6 ">
            <div>
              <input
                type="text"
                placeholder="Enter recipient's wallet address (e.g. 0x1234...)"
                className="w-full rounded bg-[#D9D9D9] text-sm p-2 text-black outline-none "
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Add a Note (Optional)
              </label>
              <textarea
                className="h-32 w-full rounded bg-[#D9D9D9] text-sm p-2 text-black outline-none"
                placeholder="Enter Description"
              />
            </div>

            {[1, 2].map((index) => (
              <div key={index}>
                <label className="mb-1 block text-sm text-white">
                  Attributes(optional)
                </label>
                <input
                  type="text"
                  className="w-full rounded bg-[#D9D9D9] text-sm p-2 text-black outline-none"
                  placeholder="Add new Attributes"
                />
              </div>
            ))}

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 bg-[#22272E] text-blue-500 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-400">
                I understand that this transaction is irreversible.
              </span>
            </label>

            <div className="relative">
              {isLoading ? (
                <div className="w-full h-10 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              ) : (
                <button
                  type="submit"
                  className={`w-full flex justify-center border-[1px] border-slate-200 items-center rounded-full text-sm py-2 text-center transition-colors ${
                    isComplete
                      ? "bg-[#00C853] text-white"
                      : "bg-white text-white"
                  }`}
                >
                  <img
                    src={MagicKey || "/placeholder.svg"}
                    alt="Mint"
                    className="w-5 h-5 mr-2 "
                  />
                  <span className={isComplete ? "text-white" : "text-black"}>
                    {isComplete ? "NFT Mint Successful" : "Transfer Ownership"}
                  </span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
