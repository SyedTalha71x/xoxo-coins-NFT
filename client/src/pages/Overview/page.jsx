import { useState, useEffect } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { FireApi, imageURL } from "../../utils/FireApi";
import toast from "react-hot-toast";
import MyWallet from "../../components/DashboardComponents/MyWallet";
import TransactionTable from "../../components/DashboardComponents/TransactionTable";
import { CircularProgress } from "@mui/material";

export default function Overview() {
  const [popularNfts, setPopularNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 2; 

  const GetPopularNft = async () => {
    try {
      setLoading(true);
      const getRes = await FireApi("/get-popular-nfts", "GET");
      setPopularNfts(getRes);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to load NFTs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetPopularNft();
  }, []);

  const formatPrice = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const getFullImageUrl = (path) => {
    if (!path) return "/placeholder.svg";
    if (path.startsWith("http")) return path;
    return `${imageURL}${path}`;
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < popularNfts.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedNfts = popularNfts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="min-h-screen w-full bg-black text-white p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="col-span-1 lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">Featured NFTs</h1>
            </div>
            <div className="flex gap-1">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
                className={`bg-transparent border border-slate-500 text-xl p-2 rounded-md text-white hover:bg-gray-950 transition-all duration-300 ease-in-out ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button
                onClick={handleNextPage}
                disabled={
                  (currentPage + 1) * itemsPerPage >= popularNfts.length
                }
                className={`bg-gray-900 p-2 rounded-md border border-slate-500 text-xl text-white hover:bg-gray-950 transition-all duration-300 ease-in-out ${
                  (currentPage + 1) * itemsPerPage >= popularNfts.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <CircularProgress />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paginatedNfts.length > 0 ? (
                paginatedNfts.map((nft) => (
                  <div
                    key={nft.token_id}
                    className="bg-zinc-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={getFullImageUrl(nft.image_url)}
                        alt={nft.nft_title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={getFullImageUrl(nft.creator?.profile_image)}
                            alt={nft.creator?.username}
                            className="h-7 w-7 rounded-full object-cover"
                            onError={(e) => {
                              e.target.src = "/placeholder.svg";
                            }}
                          />
                          <span className="text-sm text-gray-400">
                            @{nft.creator?.username || "Unknown"}
                          </span>
                        </div>
                        <button
                          className={`p-1 rounded-full ${
                            nft.is_wishlisted ? "text-red-500" : "text-gray-400"
                          }`}
                        >
                          <CiHeart className="text-xl" />
                        </button>
                      </div>

                      <div className="mb-2">
                        <h3 className="font-semibold text-lg mb-1">
                          {nft.nft_title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {nft.nft_description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-sm text-gray-300">
                            Last Bid
                          </span>
                          <p className="text-white">
                            {formatPrice(nft.last_bid || 0)}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-300">Price</span>
                          <p className="text-white">
                            {formatPrice(nft.amount)}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 flex justify-center items-center py-2 text-sm bg-white text-black rounded-lg hover:bg-gray-200 transition-all">
                          <CiShoppingCart className="mr-2" />
                          Buy Now
                        </button>
                        <button className="flex-1 flex justify-center items-center py-2 text-sm bg-black text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col justify-center items-center h-64 col-span-full">
                  <h2 className="text-white text-2xl font-bold">
                    No NFTs found
                  </h2>
                </div>
              )}
            </div>
          )}
        </div>

        <MyWallet />
        <TransactionTable />
      </div>
    </div>
  );
}
