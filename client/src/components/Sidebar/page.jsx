/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiLayers, FiMenu } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { RiNftLine } from "react-icons/ri";
import { CiCircleList, CiUnlock } from "react-icons/ci";
import { Link, Navigate } from "react-router-dom";
import { useDarkMode } from "../../Context/StateContext";
import { LogOutIcon } from "lucide-react";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdFilterList, MdListAlt } from "react-icons/md";

const Sidebar = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useDarkMode();

  const [isMintOpen, setIsMintOpen] = useState(false);
  const [isMyNFTOpen, setIsMyNFTOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("overview");

  const toggleMint = () => setIsMintOpen(!isMintOpen);
  const toggleMyNFT = () => setIsMyNFTOpen(!isMyNFTOpen);

  const handleClick = (item) => {
    setActiveItem(item);
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user-visited-dashboard");
    Navigate("/login");
  };

  return (
    <div>
      <div
        className={`lg:w-64 w-[270px] h-screen  bg-[#1F2A37] md:translate-x-0 border-r-1 border-slate-400 text-white fixed left-0 z-30   transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="space-y-4 mt-3 p-3 cursor-pointer">
          <ul className="space-y-2">
            <Link
              to={"/dashboard/overview"}
              className={`px-4 py-2 text-sm flex items-center rounded-lg cursor-pointer group ${
                activeItem === "overview"
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              }`}
              onClick={() => handleClick("overview")}
            >
              <FiLayers size={18} className="mr-2" />
              Overview
            </Link>

            <Link
              to={"/dashboard/mint-nfts"}
              // onClick={toggleMint}
              className={`flex justify-between items-center  ${
                activeItem === "mint"
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              } rounded-lg`}
            >
              <Link
                to={"/dashboard/mint-nfts"}
                className={`px-4 py-2 text-sm flex justify-between items-center cursor-pointer group `}
                onClick={() => handleClick("mint")}
              >
                <IoDocumentOutline size={18} className="mr-2" />
                Mint NFT
              </Link>
              {/* <span>{isMintOpen ? <FiChevronUp /> : <FiChevronDown />}</span> */}
            </Link>

            {isMintOpen && (
              <ul className="pl-8 space-y-2">
                <li className="py-2 text-sm p-2 hover:bg-white hover:text-black cursor-pointer rounded-lg">
                  Sub-Option 1
                </li>
                <li className="py-2 text-sm p-2 hover:bg-white hover:text-black cursor-pointer rounded-lg">
                  Sub-Option 2
                </li>
              </ul>
            )}

            <Link
              to={"/dashboard/transfer-nft"}
              className={`px-4 py-2 text-sm flex items-center hover:bg-white hover:text-black cursor-pointer rounded-lg group ${
                activeItem === "transfer" ? "bg-white text-black" : ""
              }`}
              onClick={() => handleClick("transfer")}
            >
              <CiUnlock size={18} className="mr-2" />
              Transfer NFT
            </Link>

            <Link
              to={"/dashboard/my-nft"}
              className={`flex justify-between items-center ${
                activeItem === "myNFT"
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              } rounded-lg`}
            >
              <li
                className={`px-4 py-2 text-sm flex justify-between items-center cursor-pointer group `}
                onClick={() => handleClick("myNFT")}
              >
                <RiNftLine size={18} className="mr-2" />
                My NFT
              </li>
            </Link>

            <Link
              className={`px-4 py-2 text-sm flex justify-between items-center cursor-pointer group `}
              to={"/dashboard/create-class"}
            >
              <li className="flex">
                <VscGitPullRequestCreate size={18} className="mr-2" />
                Create Class
              </li>
              <span onClick={toggleMyNFT}>
                {isMyNFTOpen ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </Link>
            {isMyNFTOpen && (
              <Link to={"/dashboard/my-classes"}>
                <ul className="pl-8 space-y-2">
                  <li className="py-2 text-sm p-2 hover:bg-white hover:text-black cursor-pointer rounded-lg flex items-center">
                    <MdFilterList className="mr-2" size={18} />
                    My Classes
                  </li>
                </ul>
              </Link>
            )}

            <Link
              className={`px-4 py-2 text-sm flex items-center rounded-lg cursor-pointer group ${
                activeItem === "logout"
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              }`}
              onClick={handleLogout}
            >
              <LogOutIcon size={18} className="mr-2" />
              Logout
            </Link>
          </ul>
          <div className="h-[0.5px] w-full bg-slate-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
