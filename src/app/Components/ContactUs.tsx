'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import GetQuoteForm from './GetQuoteForm'; // Import Get Quote form component

const ContactBanner = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const openQuoteForm = () => setShowQuoteForm(true);
  const closeQuoteForm = () => setShowQuoteForm(false);

  return (
    <section
      id="contact-us"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-center relative"
    >
      {/* Main Heading */}
      <div className="font-black text-black text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] leading-[0.9] flex flex-wrap justify-center items-center gap-4 max-w-7xl mx-auto">
        <span>Let's</span>

        {/* Mail Icon with tags */}
        <div className="relative flex flex-col items-center mx-4">
          <div className="bg-yellow-400 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
            <Mail
              size={32}
              className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
          </div>

          {/* Floating Labels */}
          <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-3 py-1 font-bold select-none shadow-lg border-2 border-green-300/50 backdrop-blur-sm">
            <span className="relative z-10">You</span>
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent rounded-full"></div>
          </div>
          <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-3 py-1 font-bold select-none shadow-lg border-2 border-orange-300/50 backdrop-blur-sm">
            <span className="relative z-10">HT Creative</span>
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent rounded-full"></div>
          </div>
        </div>

        <span>Work</span>
        <div className="w-full"></div>
        <span>Together</span>
      </div>

      {/* Subtext with arrow */}
      <div className="text-black text-base sm:text-lg lg:text-xl mt-8 flex items-center justify-center gap-3 max-w-md mx-auto">
        <span className="font-medium">Don’t hesitate to get in touch with us</span>
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 32 32"
          stroke="#FCD34D"
        >
          <path d="M8 16 Q12 12, 16 16 Q20 20, 24 16" />
          <path d="M20 12 L24 16 L20 20" />
        </svg>
      </div>

      {/* Contact Us Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={openQuoteForm} // Open GetQuoteForm modal
          className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/30 transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300/50"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent rounded-2xl"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white/30 rounded-full blur-sm"></div>
          <span className="relative z-10 drop-shadow-sm">Contact Us</span>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-yellow-400/20 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Render GetQuoteForm modal */}
      {showQuoteForm && <GetQuoteForm onClose={closeQuoteForm} />}

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-300 rounded-full opacity-60 hidden lg:block"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-green-300 rounded-full opacity-40 hidden lg:block"></div>
      <div className="absolute top-1/3 left-12 w-1.5 h-1.5 bg-orange-300 rounded-full opacity-50 hidden lg:block"></div>
    </section>
  );
};

export default ContactBanner;
