/* eslint-disable no-unused-vars */
import React from "react";
import { FaBell } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import Logo from "../../../public/logo2.png";
import AvatarImage from "../../../public/Avatar.png";
import { FiMenu } from "react-icons/fi";
import {  useDarkMode } from "../../Context/StateContext";

const Page = () => {
  const {setIsSidebarOpen, isSidebarOpen} = useDarkMode();
  return (
    <div className="bg-[#1F2A37] z-50 p-4 border-b-2 sticky top-0 border-black text-white flex items-center">
      <div className="lg:hidden p-3 fixed top-0 left-0 right-0 z-50 bg-[#1F2A37]">
        <FiMenu
          size={30}
          className="text-white cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
      <div className="flex justify-between items-center w-full ">
        <div className="700">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <FaBell size={19} className="text-white" />
          </div>

          <div>
            <MdOutlineDashboard size={19} className="text-white" />
          </div>

          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={AvatarImage}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
