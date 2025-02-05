import React from 'react';
import { FC } from 'react'

const Hero = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Gender Toggle */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-4 pt-4 px-2 sm:px-4">
        <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-2 bg-black text-white rounded-full text-sm sm:text-base">
          <img 
            src="/api/placeholder/32/32"
            alt="Woman icon"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
          />
          Women
        </button>
        <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-2 bg-black text-white rounded-full text-sm sm:text-base">
          <img 
            src="/api/placeholder/32/32"
            alt="Man icon"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
          />
          Men
        </button>
      </div>

      {/* Hero Banner */}
      <div className="w-full h-32 sm:h-40 md:h-48 bg-pink-100 rounded-lg mx-auto px-2 sm:px-4 overflow-hidden">
        <div className="flex items-center justify-between h-full max-w-6xl mx-auto relative">
          {/* Fashion Items */}
          <div className="flex gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-300 rounded-lg" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-400 rounded-lg" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-400 rounded-lg" />
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink-400 rounded-lg" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white rounded-full absolute top-1/4 left-1/4" />
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-white/50 rounded-full absolute top-1/3 right-1/4" />
            <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white/30 rounded-full absolute bottom-1/4 left-1/3" />
          </div>
        </div>
      </div>

      {/* Popular Items Section */}
      <div className="mt-6 sm:mt-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 px-2 sm:px-4 text-black">MOST POPULAR</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square bg-blue-50 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/300/300"
                alt={`Popular item ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Offers Section */}
        <div className="mt-6 sm:mt-8 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">OFFERS</h2>
          <div className="flex justify-start sm:justify-center gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {/* Buy 1 Get 1 Free Offer */}
            <div className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] h-40 sm:h-48 md:h-60 bg-pink-200 rounded-2xl flex flex-col items-center justify-center relative snap-center shrink-0">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-8">Buy 1 Get 1 Free !</h3>
              <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Shop Now !
              </button>
            </div>

            {/* Second Offer */}
            <div className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] h-40 sm:h-48 md:h-60 bg-green-200 rounded-2xl flex flex-col items-center justify-center relative snap-center shrink-0">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-8">Special Discount</h3>
              <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Shop Now !
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${i === 0 ? 'bg-gray-800' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero }