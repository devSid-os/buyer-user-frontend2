'use client';

import Link from 'next/link';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/data/cartData';

export default function Navbar() {
  const { totalItems } = useCartStore();

  return (
    <nav className="bg-black px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/men" className="text-xl font-bold text-white">
          ClothBuddy
        </Link>

        {/* Search Bar */}
        <div className="mx-4 hidden w-full max-w-md items-center md:flex">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search for Products"
              className="w-full rounded-md border-none bg-[#333333] py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:ring-0"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Right Navigation Items */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Icon */}
          <Button variant="ghost" size="icon" className="text-white md:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="text-white">
            <Heart className="h-5 w-5" />
          </Button>

          {/* Cart with Item Count */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative text-white">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Sign In Button */}
          <Button variant="ghost" className="text-white hover:bg-gray-800">
            <Link href="/auth/signin" className="text-xl font-bold text-white">
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
