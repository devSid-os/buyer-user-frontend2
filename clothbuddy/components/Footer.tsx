import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 sm:py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Logo and Newsletter Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">ClothBuddy</h2>
          <div className="w-full sm:max-w-md">
            <h3 className="text-xs sm:text-sm mb-2">Subscribe to our Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="px-3 sm:px-4 py-2 rounded-md w-full bg-white text-black text-sm"
              />
              <button className="px-4 sm:px-6 py-2 bg-pink-300 text-black rounded-md hover:bg-pink-400 transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Help Section */}
          <div>
            <h3 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">Help</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 text-sm sm:text-base transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm sm:text-base transition-colors">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">About Us</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 text-sm sm:text-base transition-colors">
                  Who are we ?
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">Policies</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 text-sm sm:text-base transition-colors">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-sm sm:text-base transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };