import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import phantom1 from '../images/models/phantom1.jpg';
import phantom2 from '../images/models/phantom2.jpg';
import phantom3 from '../images/models/phantom3.jpg';

const PhantomPart = () => {
  const images = [phantom1, phantom2, phantom3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 md:p-6">
      <img
        src={images[currentIndex]}
        alt="Phantom"
        className="w-full h-64 object-cover rounded-lg transition-all duration-500 md:w-[350px] md:h-[250px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-center"
      >
        <h3 className="text-2xl font-bold text-blue-100 mb-2">Phantom</h3>
        <p className="text-sm text-gray-400">
          The Rolls-Royce Phantom redefines timeless luxury, blending power, prestige, and perfection.
        </p>
      </motion.div>
    </div>
  );
};

export default PhantomPart;