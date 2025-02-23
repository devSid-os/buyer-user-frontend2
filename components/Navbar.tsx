'use client';
import { useCartStore } from '@/data/cartData';
import { useWishlistStore } from '@/data/wishlistData';
import { ShoppingBag } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Search } from 'lucide-react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const { totalItems } = useCartStore();
  const { wishlist, toggleWishlist } = useWishlistStore();

  const router = useRouter();

  const redirect = (route: string) => {
    router.push(route);
  }

  return (
    <nav className="fixed top-0 left-0 z-20 bg-white px-2 py-2 shadow-md w-full sm:px-4 md:px-6">
      <div className="flex justify-between items-center w-full">
        <div className='flex items-center'>
          <Link href={"/men"} className='flex items-center'>
            <img className="w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px]" src="/clothbuddy_logo.png" />
            <p className='text-black text-lg font-semibold md:text-xl'>ClothBuddy</p>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div style={{ "border": "1px solid #bebebe" }} className='hidden items-center min-w-[350px] rounded-sm md:flex'>
            <button type="button" style={{ "borderRight": '1px solid #4a6e8d' }} className="p-2 bg-[#4a6e8d] flex items-center justify-center">
              <Search className='w-5 h-5' color="white" />
            </button>
            <input placeholder='Search in ClothBuddy' className='text-[13px] px-2 w-full h-full text-black focus:outline-none' />
          </div>
          <div className="hidden items-center gap-1 md:flex">
            <MapPin className="w-6 h-6" color="black" />
            <div className="flex flex-col items-start">
              <p className="text-black italic text-[12px] md:text-[13px]">
                Delivering to your Doorstep
              </p>
              <button className="text-[11px] text-[#1b3a57] md:text-[12px] hover:text-[#4a6e8d]">Update Location</button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <button onClick={() => redirect('/wishlist')} type="button" className='relative'>
            <Heart className='w-4 h-4 md:w-5 md:h-5' color='black' />
            {wishlist.length > 0 && <span className='text-[9px] flex justify-center items-center font-bold w-[13px] h-[13px] absolute -right-2 -top-2 rounded-full text-white bg-red-500 md:w-[16px] md:h-[16px]'>{wishlist.length}</span>}
          </button>
          <button onClick={() => redirect('/cart')} type="button" className='relative'>
            <ShoppingBag className='w-4 h-4 md:w-5 md:h-5' color='black' />
            {totalItems > 0 && <span className='text-[9px] flex justify-center items-center font-bold w-[13px] h-[13px] absolute -right-2 -top-2 rounded-full text-white bg-red-500 md:w-[16px] md:h-[16px]'>{totalItems}</span>}
          </button>
          <p className="flex gap-1 items-center text-black text-base md:text-lg">
            Sign In
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 md:hidden">
        <MapPin className="w-6 h-6" color="black" />
        <div className="flex gap-3 items-center">
          <p className="text-black italic text-[13px]">
            Delivering to your Doorstep
          </p>
          <button className="text-[11px] bg-[#1b3a57] text-white px-2 p-1 rounded-sm">Update Location</button>
        </div>
      </div>


      <div style={{ "border": "1px solid #bebebe" }} className='flex items-center w-full mt-2 rounded-sm md:hidden'>
        <button type="button" style={{ "borderRight": '1px solid #4a6e8d' }} className="p-2 bg-[#4a6e8d] flex items-center justify-center">
          <Search className='w-4 h-4' color="white" />
        </button>
        <input placeholder='Search in ClothBuddy' className='text-[13px] px-2 w-full h-full text-black focus:outline-none' />
      </div>

    </nav>
  );
}
