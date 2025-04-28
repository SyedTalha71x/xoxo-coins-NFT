/* eslint-disable no-unused-vars */
import React from "react";
import { FiMenu } from "react-icons/fi";
import { useDarkMode } from "../../Context/StateContext";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import NotificationMenu from "../DashboardComponents/NotificationMenu";

const Page = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user-visited-dashboard");
    navigate("/login");
  };

  const handleNavigateProfile =() => {
    navigate("/dashboard/profile");
  }

  const { setIsSidebarOpen, isSidebarOpen } = useDarkMode();
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
        <Link to={"/home"}>
          <div className="max-lg:hidden ">
            <img src={"/logo2.png"} alt="Logo" className="h-8 w-auto" />
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {/* notification system icon & menu  */}
          <NotificationMenu />

          {/* right profile avatar and profile menu  */}
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
            <img
              src={"/Avatar.png"}
              alt="User Avatar"
              className="w-full h-full object-cover"
              onClick={handleClick}
            />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& .MuiPaper-root": {
                ml: -2,
              },
            }}
          >
            <MenuItem onClick={handleNavigateProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Page;
