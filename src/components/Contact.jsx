import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-blue-200 min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
      <form className="w-full max-w-md bg-gradient-to-br from-blue-900/50 to-black/70 p-6 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-black/70 border border-blue-500 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-black/70 border border-blue-500 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded bg-black/70 border border-blue-500 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-700 to-blue-900 rounded text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;