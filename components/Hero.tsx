import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Gender Toggle */}
      <div className="mb-4 flex justify-center gap-2 px-2 pt-4 sm:gap-4 sm:px-4">
        <Link href="/women">
          <button className="flex items-center gap-1 rounded-full bg-black px-3 py-1 text-sm text-white sm:gap-2 sm:px-6 sm:py-2 sm:text-base">
            <img
              src="/api/placeholder/32/32"
              alt="Woman icon"
              className="h-6 w-6 rounded-full object-cover sm:h-8 sm:w-8"
            />
            Women
          </button>
        </Link>
        <Link href="/men">
          <button className="flex items-center gap-1 rounded-full bg-black px-3 py-1 text-sm text-white sm:gap-2 sm:px-6 sm:py-2 sm:text-base">
            <img
              src="/api/placeholder/32/32"
              alt="Man icon"
              className="h-6 w-6 rounded-full object-cover sm:h-8 sm:w-8"
            />
            Men
          </button>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="mx-auto h-32 w-full overflow-hidden rounded-lg bg-pink-100 px-2 sm:h-40 sm:px-4 md:h-48">
        <div className="relative mx-auto flex h-full max-w-6xl items-center justify-between">
          {/* Fashion Items */}
          <div className="flex gap-2 sm:gap-4">
            <div className="h-8 w-8 rounded-lg bg-blue-300 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            <div className="h-8 w-8 rounded-lg bg-orange-400 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            <div className="h-8 w-8 rounded-lg bg-purple-400 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            <div className="h-8 w-8 rounded-lg bg-pink-400 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          </div>

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-white sm:h-3 sm:w-3 md:h-4 md:w-4" />
            <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-white/50 sm:h-4 sm:w-4 md:h-6 md:w-6" />
            <div className="absolute bottom-1/4 left-1/3 h-4 w-4 rounded-full bg-white/30 sm:h-6 sm:w-6 md:h-8 md:w-8" />
          </div>
        </div>
      </div>

      {/* Popular Items Section */}
      <div className="mt-6 sm:mt-8">
        <h2 className="mb-4 px-2 text-xl font-bold text-black sm:mb-6 sm:px-4 sm:text-2xl">
          MOST POPULAR
        </h2>
        <div className="grid grid-cols-2 gap-2 px-2 sm:gap-4 sm:px-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square overflow-hidden rounded-lg bg-blue-50">
              <img
                src="/api/placeholder/300/300"
                alt={`Popular item ${item}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Offers Section */}
        <div className="mt-6 px-2 sm:mt-8 sm:px-4">
          <h2 className="mb-4 text-xl font-bold text-black sm:mb-6 sm:text-2xl">OFFERS</h2>
          <div className="flex snap-x snap-mandatory justify-start gap-3 overflow-x-auto pb-4 sm:justify-center sm:gap-4">
            {/* Buy 1 Get 1 Free Offer */}
            <div className="relative flex h-40 min-w-[280px] shrink-0 snap-center flex-col items-center justify-center rounded-2xl bg-pink-200 sm:h-48 sm:min-w-[350px] md:h-60 md:min-w-[450px]">
              <h3 className="mb-4 text-lg font-bold sm:mb-8 sm:text-xl">Buy 1 Get 1 Free !</h3>
              <button className="rounded-md bg-white px-4 py-1.5 text-sm transition-colors hover:bg-gray-100 sm:px-6 sm:py-2 sm:text-base">
                Shop Now !
              </button>
            </div>

            {/* Second Offer */}
            <div className="relative flex h-40 min-w-[280px] shrink-0 snap-center flex-col items-center justify-center rounded-2xl bg-green-200 sm:h-48 sm:min-w-[350px] md:h-60 md:min-w-[450px]">
              <h3 className="mb-4 text-lg font-bold sm:mb-8 sm:text-xl">Special Discount</h3>
              <button className="rounded-md bg-white px-4 py-1.5 text-sm transition-colors hover:bg-gray-100 sm:px-6 sm:py-2 sm:text-base">
                Shop Now !
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="mt-3 flex justify-center gap-1.5 sm:mt-4 sm:gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${i === 0 ? 'bg-gray-800' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
