import React from 'react';
import { motion } from 'framer-motion';

import exp1 from '../images/gallery/exp1.jpg';
import exp2 from '../images/gallery/exp2.jpg';
import exp3 from '../images/gallery/exp3.jpg';
import trust1 from '../images/gallery/trust1.png';
import trust2 from '../images/gallery/trust2.png';

const GalleryQuotes = () => {
  const experiences = [
    {
      image: exp1,
      quote: '“Driving a Rolls Royce is like floating on a cloud of engineering perfection.”',
    },
    {
      image: exp2,
      quote: '“The Spirit of Ecstasy truly defines silent power and elegance.”',
    },
    {
      image: exp3,
      quote: '“Luxury is redefined when you experience a bespoke Rolls Royce.”',
    },
  ];

  const trusties = [
    { image: trust1, title: 'ISO Certified Excellence' },
    { image: trust2, title: 'Global Luxury Awards 2024' },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-blue-900 to-black text-white py-16 px-4 md:px-12">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-300 tracking-wide">
        Our Legacy & Trust
      </h2>

      {/* Experiences Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm"
          >
            <img src={exp.image} alt="Experience" className="w-full h-60 object-cover" />
            <p className="p-4 text-sm md:text-base text-center text-blue-100 italic">{exp.quote}</p>
          </motion.div>
        ))}
      </div>

      {/* Trusties */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto items-center">
        {trusties.map((trust, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <img src={trust.image} alt={trust.title} className="h-16 md:h-20 mb-2" />
            <p className="text-xs md:text-sm text-blue-100 text-center">{trust.title}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default GalleryQuotes;