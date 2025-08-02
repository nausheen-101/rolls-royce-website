// src/components/DealerSearch.jsx
import React from 'react';

const DealerSearch = () => {
  return (
    <section className="bg-black text-white py-12 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-300">Find a Dealer</h2>
      <p className="text-gray-400 mb-6">Locate your nearest Rolls Royce dealership with ease.</p>
      <input
        type="text"
        placeholder="Enter city or zip code"
        className="px-4 py-2 rounded-md text-black w-full max-w-md mb-4"
      />
      <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-md">
        Search
      </button>
    </section>
  );
};

export default DealerSearch;