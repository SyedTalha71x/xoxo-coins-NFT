/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FireApi, imageURL } from "../../utils/FireApi";
import toast from "react-hot-toast";

export default function Page() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedNfts, setSelectedNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [popularNfts, setPopularNfts] = useState([]);

   const GetPopularNft = async () => {
      try {
        setIsLoading(true);
        const getRes = await FireApi("/get-popular-nfts", "GET");
        setPopularNfts(getRes);
      } catch (error) {
        console.error(error);
        toast.error(error.message || "Failed to load NFTs");
      } finally {
        setIsLoading(false);
      }
    };
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

  useEffect(() => {
    GetPopularNft();
  }, []);

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

          {popularNfts.length > 0 ? (
            popularNfts.map((nft) => (
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
                    src={`${imageURL}${nft?.image_url}`}
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
                              src={`${imageURL}${nft?.creator?.profile_image}`}
                              alt="Avatar.png"
                              className="rounded-full h-4 w-4"
                            />
                          </div>
                          <span className="text-sm text-gray-400">
                            @{nft?.creator?.username}
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
                      {nft?.nft_title}
                    </h3>
                    {/* <p className="text-sm flex gap-3 items-center text-gray-400">
                      <div>Token ID</div>
                      <span className="text-white">{nft?.token_id}</span>
                    </p> */}
                    <p className="text-sm flex gap-8 items-center text-gray-400">
                      <div>Price</div>
                      <span className="text-white">{nft?.amount}</span>
                    </p>
                  </div>
                  <button className="w-full mt-2 flex justify-center items-center py-2 mb-2 text-sm bg-white text-black cursor-pointer rounded-full transition">
                    <img
                      src={"/magic-line.png"}
                      alt="Mint"
                      className="w-5 h-5 mr-2 text-black"
                    />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No NFTs found</p>
        )}

          {/* <div className="rounded-lg bg-[#1F2A37] p-4">
            <h3 className="text-sm text-white">Additional Details:</h3>
            <div className="mt-2 space-y-2 text-sm">
              <p className="text-white">
                Token ID: <span className="text-white"></span>
              </p>
              <p className="text-white">
                IPFS Link:{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  View your NFT on IPFS
                </a>
              </p>
            </div>
          </div> */}
        </div>

        <div className="rounded-lg bg-[#1F2A37] lg:p-7 md:p-5 sm:p-3 p-3">
          <h2 className="mb-2 flex gap-1 items-center text-lg text-gray-200 font-bold">
            Recipient Wallet Address
            <div>
              <img
                src={"/info.png"}
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
                    src={"/magic-line.png"}
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
