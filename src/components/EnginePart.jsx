import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import engine1 from '../images/parts/engine1.jpg';
import engine2 from '../images/parts/engine2.jpg';
import engine3 from '../images/parts/engine3.jpg';

export default function EnginePart() {
  const images = [engine1, engine2, engine3];
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
        alt="Engine"
        className="w-full md:w-1/3 rounded-lg shadow-xl object-cover"
      />

      <div className="max-w-md text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Engine</h2>
        <p className="text-gray-300 text-sm md:text-base">
          The Rolls-Royce engine is a masterpiece of engineering, delivering unmatched performance and refinement with whisper-quiet smoothness.
        </p>
      </div>
    </motion.div>
  );
}