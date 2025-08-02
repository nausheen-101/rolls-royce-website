import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-black text-gray-300 pt-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4">Rolls Royce</h1>
          <p className="text-gray-400">
            Redefining luxury automobiles with timeless design, unmatched performance, and handcrafted perfection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-blue-300 mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-200 cursor-pointer">Home</li>
            <li className="hover:text-blue-200 cursor-pointer">Parts</li>
            <li className="hover:text-blue-200 cursor-pointer">Models</li>
            <li className="hover:text-blue-200 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Models */}
        <div>
          <h2 className="text-xl font-semibold text-blue-300 mb-4">Models</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-200 cursor-pointer">Phantom</li>
            <li className="hover:text-blue-200 cursor-pointer">Ghost</li>
            <li className="hover:text-blue-200 cursor-pointer">Cullinan</li>
            <li className="hover:text-blue-200 cursor-pointer">Dawn</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-blue-300 mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">Rolls Royce HQ</p>
          <p className="text-gray-400 mb-2">+44 1234 567890</p>
          <p className="text-gray-400 mb-2">support@rollsroyce.com</p>
          <div className="flex space-x-4 mt-4">
            <i className="fab fa-facebook text-blue-400 hover:text-blue-200 cursor-pointer"></i>
            <i className="fab fa-instagram text-blue-400 hover:text-blue-200 cursor-pointer"></i>
            <i className="fab fa-twitter text-blue-400 hover:text-blue-200 cursor-pointer"></i>
            <i className="fab fa-linkedin text-blue-400 hover:text-blue-200 cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 py-6">
        © {new Date().getFullYear()} Rolls Royce. All rights reserved.
      </div>
    </footer>
  );
}