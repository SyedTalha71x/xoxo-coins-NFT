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
    <div className="bg-[#1F2A37]  p-4 border-b-2 sticky top-0 border-black text-white flex items-center">
      <div className="flex justify-between max-lg:justify-end relative items-center w-full ">
      <div className="lg:hidden absolute left-0">
        <FiMenu
          size={20}
          className="text-white cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
        <div className="max-lg:hidden ">
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
