import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import bg1 from '../images/technical/bg1.jpg';
import bg2 from '../images/technical/bg2.jpg';
import bg3 from '../images/technical/bg3.jpg';

const TechnicalExcellence = () => {
  const technicalSpecs = [
    { title: 'Top Speed', value: '250 km/h' },
    { title: 'Acceleration (0-100km/h)', value: '4.6 sec' },
    { title: 'Engine Type', value: '6.75L V12' },
    { title: 'Power Output', value: '563 hp' },
    { title: 'Torque', value: '900 Nm' },
    { title: 'Fuel Capacity', value: '100 L' },
  ];

  const backgroundImages = [bg1, bg2, bg3];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="bg-gradient-to-b from-black via-blue-900 to-black text-white py-16 px-4 md:px-12">
      {/* Technical Excellence Section */}
      <div className="relative w-full h-[90vh] overflow-hidden mb-12 rounded-lg shadow-2xl">
        {/* Cycling Background Images */}
        <img
          src={backgroundImages[currentBg]}
          alt="Technical Background"
          className="object-cover w-full h-full absolute top-0 left-0 z-0 transition-opacity duration-1000 ease-in-out"
        />

        {/* Overlay with Specs */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center z-10 p-6 overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6 tracking-wide">
            Technical Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-200">
                  {spec.title}
                </h3>
                <p className="text-blue-100 text-sm md:text-base">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExcellence;