import React from "react";
import { FaUser, FaSearch } from "react-icons/fa"; // Import both icons
import "../styles/dashboard.css";

const DashBoard = () => {
  return (
    <>
      <div className="dash_board_Navbar">
        <div className="search_container flex items-center justify-between p-4 bg-gray-800">
          <span className="Dotted_botton">...</span>
          <div className="search_box flex items-center bg-gray-700 p-2 rounded-md w-1/2">
            <input
              type="text"
              placeholder="Search any music..."
              className=" search_text bg-transparent  focus:outline-none text-white w-full"
            />
            <FaSearch className=" search_icon text-gray-400 text-lg mr-2" />
          </div>

          <FaUser className="text-white text-4xl cursor-pointer" />
        </div>
        <div className="DashBoard_Section_container">
            <div className="playList_section"></div>
            <div className="popular_music_section"></div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
