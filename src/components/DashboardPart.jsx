import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import dashboard1 from '../images/parts/dashboard1.jpg';
import dashboard2 from '../images/parts/dashboard2.jpg';
import dashboard3 from '../images/parts/dashboard3.jpg';

export default function DashboardPart() {
  const images = [dashboard1, dashboard2, dashboard3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-center bg-black text-white py-10 px-4 md:px-10 space-y-6 md:space-y-0 md:space-x-10"
    >
      <img
        src={images[currentIndex]}
        alt="Dashboard"
        className="w-full md:w-1/3 rounded-lg shadow-xl object-cover"
      />

      <div className="max-w-md text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Dashboard</h2>
        <p className="text-gray-300 text-sm md:text-base">
          The Rolls-Royce dashboard integrates advanced technology with a handcrafted finish for an intuitive, luxurious cockpit.
        </p>
      </div>
    </motion.div>
  );
}