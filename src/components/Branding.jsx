import React from 'react';
import { motion } from 'framer-motion';

const Branding = () => {
  const capabilities = [
    {
      title: 'Engineering Excellence',
      desc: 'Handcrafted with aerospace precision for unmatched durability and performance.',
    },
    {
      title: 'Supreme Comfort',
      desc: 'Silent cabins with premium leather seats for a flying carpet ride.',
    },
    {
      title: 'Bespoke Design',
      desc: 'Infinite customization to reflect your unique taste.',
    },
    {
      title: 'Effortless Power',
      desc: 'V12 engines delivering smooth acceleration with minimal noise.',
    },
    {
      title: 'Advanced Technology',
      desc: 'Cutting-edge infotainment and intelligent safety systems.',
    },
    {
      title: 'Legendary Presence',
      desc: 'Spirit of Ecstasy and iconic Pantheon grille for an unmatched arrival.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-blue-900 to-black text-white py-16 px-4 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-300 tracking-wider">
        Luxury Defined
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-5 rounded-lg p-6 border border-blue-700 hover:scale-105 transition-transform backdrop-blur-sm shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-2">
              {item.title}
            </h3>
            <p className="text-blue-100 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Branding;