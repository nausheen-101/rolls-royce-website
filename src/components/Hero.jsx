import React from 'react';
import phantom1 from './phantom1.mp4'; // updated path since it's inside components folder

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={phantom1}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/50 to-black/90 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-7xl font-bold text-blue-300 tracking-wider drop-shadow-lg z-10">
          Rolls Royce Phantom
        </h1>
        <p className="mt-4 max-w-xl text-blue-200 text-sm md:text-lg z-10">
          Experience the timeless luxury and unparalleled engineering of the Rolls Royce Phantom series.
        </p>
      </div>
    </div>
  );
};

<div className="w-full h-[1px] bg-silver my-2 opacity-70" />

export default Hero;