import React, { useState } from 'react';

const SearchDealer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
    //   alert(Searching for dealer in: ${query});
      setQuery('');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Search Dealer Button (Top-Right) */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 hover:bg-blue-900 text-blue-100 px-4 py-2 rounded shadow-md"
        >
          Search Dealer
        </button>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-black via-blue-900/90 to-black text-blue-200 flex flex-col justify-center items-center p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-4xl font-bold text-blue-300 hover:text-blue-100"
          >
            &times;
          </button>

          <h2 className="text-4xl font-bold mb-4 text-blue-300 tracking-wider">Find a Dealer</h2>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter city or ZIP"
            className="w-full max-w-md bg-black/60 text-blue-200 placeholder-blue-400 border border-blue-700 px-4 py-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-700 hover:bg-blue-900 text-blue-100 px-6 py-3 rounded"
          >
            Search
          </button>
        </div>
      )}
    </>
  );
};

export default SearchDealer;