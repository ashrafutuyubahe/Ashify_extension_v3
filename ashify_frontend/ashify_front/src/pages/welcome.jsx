import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import "../styles/welcome.css";

const WelcomePage = () => {
  return (
    <div className="welcome-container flex flex-col items-center justify-center h-screen bg-[#1E1E1E]">
      <h2 className="welcome-heading text-5xl font-bold ">Welcome to Ashify</h2>
      <button onClick={handleContinueWithSpotify} className="spotify-button bg-green-500 p-6 rounded-full hover:bg-green-600 transition duration-300 ease-in-out">
        <FaSpotify className="spotify-icon text-white text-7xl" />
        <h4 className='icon_text'>continue with Spotify</h4>
      </button>
    </div>
  );
};

const handleContinueWithSpotify= ()=>{
    alert("you clicked")
}
export default WelcomePage;
