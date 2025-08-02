import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const TechnicalVideo = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: false });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div className="bg-gradient-to-b from-black via-blue-900 to-black text-white py-12 px-4 md:px-12">
      
      {/* Praise Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-2 tracking-wide">
          The Pinnacle of Speed & Beauty
        </h2>
        <p className="text-sm md:text-base text-blue-100 max-w-xl mx-auto">
          Experience the unparalleled engineering and breathtaking elegance that defines every Rolls Royce masterpiece.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full max-w-3xl mx-auto mt-6 rounded-lg overflow-hidden shadow-2xl border border-blue-800">
        <video
          ref={videoRef}
          src={require('./technical.mp4')}
          autoPlay
          muted
          controls
          className="w-full max-h-[250px] md:max-h-[350px] object-cover rounded-lg"
          playsInline
        />

        {/* Overlay Info Animation from left */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-4 left-4 md:top-6 md:left-6 text-left"
        >
          <h3 className="text-xs md:text-sm font-bold text-blue-300">Speed & Acceleration</h3>
          <p className="text-xs md:text-sm text-blue-100">Top Speed: 250 km/h</p>
          <p className="text-xs md:text-sm text-blue-100">0-100 km/h: 4.6 sec</p>
        </motion.div>

        {/* Overlay Info Animation from right */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-right"
        >
          <h3 className="text-xs md:text-sm font-bold text-blue-300">Engine & Power</h3>
          <p className="text-xs md:text-sm text-blue-100">Engine: 6.75L V12</p>
          <p className="text-xs md:text-sm text-blue-100">Power: 563 hp</p>
          <p className="text-xs md:text-sm text-blue-100">Torque: 900 Nm</p>
          <p className="text-xs md:text-sm text-blue-100">Fuel: 100 L</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalVideo;