import React from 'react';
import { FC } from 'react'



const Hero = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Gender Toggle */}
      <div className="flex justify-center gap-4 mb-4 pt-4">
        <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full">
          <img 
            src="/api/placeholder/32/32"
            alt="Woman icon"
            className="w-8 h-8 rounded-full object-cover"
          />
          Women
        </button>
        <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full">
          <img 
            src="/api/placeholder/32/32"
            alt="Man icon"
            className="w-8 h-8 rounded-full object-cover"
          />
          Men
        </button>
      </div>

      {/* Hero Banner */}
      <div className="w-full h-48 bg-pink-100 rounded-lg mx-auto px-4 overflow-hidden">
        <div className="flex items-center justify-between h-full max-w-6xl mx-auto">
          {/* Fashion Items */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-300 rounded-lg" /> {/* Hat */}
            <div className="w-12 h-12 bg-orange-400 rounded-lg" /> {/* Sunglasses */}
            <div className="w-12 h-12 bg-purple-400 rounded-lg" /> {/* Necklace */}
            <div className="w-12 h-12 bg-pink-400 rounded-lg" /> {/* Shoes */}
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-4 h-4 bg-white rounded-full absolute top-1/4 left-1/4" />
            <div className="w-6 h-6 bg-white/50 rounded-full absolute top-1/3 right-1/4" />
            <div className="w-8 h-8 bg-white/30 rounded-full absolute bottom-1/4 left-1/3" />
          </div>
        </div>
      </div>

      {/* Popular Items Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 px-4">MOST POPULAR</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
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
      </div>
    </div>
  );
};

export { Hero }