/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar/page";
import Sidebar from "../components/Sidebar/page";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <DashboardNavbar />
      <div className="flex relative">
        <Sidebar />
        <main className="flex-1 lg:pl-64  min-h-screen overflow-y-auto">
          <div className="">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
