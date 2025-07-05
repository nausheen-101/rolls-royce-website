import React from 'react';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
  const cars = [
    {
      model: 'Phantom',
      image: '/phantom.webp',
      info: 'The epitome of luxury sedan.'
    },
    {
      model: 'Ghost',
      image: '/ghost.jpg',
      info: 'Understated and pure elegance.'
    },
    {
      model: 'Cullinan',
      image: '/cullinan.webp',
      info: 'The luxury SUV redefining adventure.'
    }
  ];

  return (
    <>
      <nav className="navbar">
        <h1>Rolls-Royce</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#models">Models</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>Experience Ultimate Luxury</h2>
          <p>The Rolls-Royce defines timeless luxury and excellence.</p>
          <button>Explore More</button>
        </div>
      </section>

      <section id="models" className="models">
        <h2>Our Models</h2>
        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={car.image} alt={car.model} />
                    <h3>{car.model}</h3>
                  </div>
                  <div className="flip-card-back">
                    <h3>{car.model}</h3>
                    <p>{car.info}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 Rolls-Royce Motors. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;