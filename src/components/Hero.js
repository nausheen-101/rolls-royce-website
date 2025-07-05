import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        src="https://www.rolls-roycemotorcars.com/content/dam/rollsroyce/motor-cars/phantom/phantom-extended-ii/phantom-extended-ii-homepage-hero-1920x1080.jpg"
        alt="Rolls Royce Phantom"
      />
      <div className="hero-text">
        <h2>Experience Ultimate Luxury</h2>
        <p>The Rolls-Royce Phantom defines luxury and excellence.</p>
        <button>Explore More</button>
      </div>
    </div>
  );
}

export default Hero;