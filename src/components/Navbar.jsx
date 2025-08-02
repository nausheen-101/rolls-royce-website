import React, { useState } from 'react';
import logo from '../images/logo.png'; // Replace with your actual logo path

const Navbar = ({ setActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModels, setShowModels] = useState(false);

  const handleModelClick = () => {
    setShowModels(!showModels);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-black/80 via-blue-900/60 to-black/80 text-blue-400 shadow-md backdrop-blur-md w-full">
        
        {/* Left: Menu */}
        <div className="w-1/3 flex items-center">
          <div onClick={() => setIsOpen(!isOpen)} className="flex items-center cursor-pointer space-x-2">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-blue-400"></div>
              <div className="w-6 h-0.5 bg-blue-400"></div>
              <div className="w-6 h-0.5 bg-blue-400"></div>
            </div>
            <span className="text-sm font-semibold">Menu</span>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="w-1/3 flex justify-center">
          <img src={logo} alt="Rolls Royce Logo" className="h-12 object-contain" />
        </div>

        {/* Right: (Empty for now) */}
        <div className="w-1/3"></div>
      </div>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-2/3 sm:w-1/4 h-full bg-gradient-to-b from-blue-900/60 to-black/80 backdrop-blur-md p-6 text-white transition-transform duration-300 ease-in-out z-50 shadow-xl">
          <button
            onClick={() => setIsOpen(false)}
            className="text-right w-full text-2xl font-bold text-blue-300"
          >
            ×
          </button>
          <ul className="mt-8 space-y-4">
            <li className="cursor-pointer hover:text-blue-200" onClick={() => { setActive('home'); setIsOpen(false); }}>Home</li>
            <li className="cursor-pointer hover:text-blue-200" onClick={() => { setActive('parts'); setIsOpen(false); }}>Parts</li>
            <li className="cursor-pointer hover:text-blue-200" onClick={handleModelClick}>Models</li>

            {showModels && (
              <ul className="ml-4 space-y-2 text-blue-200">
                <li className="cursor-pointer" onClick={() => { setActive('phantom'); setIsOpen(false); }}>Phantom</li>
                <li className="cursor-pointer" onClick={() => { setActive('ghost'); setIsOpen(false); }}>Ghost</li>
                <li className="cursor-pointer" onClick={() => { setActive('cullinan'); setIsOpen(false); }}>Cullinan</li>
                <li className="cursor-pointer" onClick={() => { setActive('dawn'); setIsOpen(false); }}>Dawn</li>
              </ul>
            )}

            <li className="cursor-pointer hover:text-blue-200" onClick={() => { setActive('contact'); setIsOpen(false); }}>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;