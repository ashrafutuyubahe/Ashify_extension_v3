import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import "../styles/welcome.css"

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h2 className="text-4xl text-white  mb-9">Welcome to Ashify</h2>
      <button className='bg-green-500 text-white p-4 rounded-full hover:bg-green-600 '>
        <FaSpotify className="text-6xl" />
      </button>
    </div>
  );
};

export default WelcomePage;
