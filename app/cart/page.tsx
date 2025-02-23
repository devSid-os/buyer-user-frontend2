'use client';
import { toast } from 'sonner';

export default function CartPage() {
  toast('Item added to cart');
  return (
    <div className="mx-auto max-w-4xl p-6" style={{ color: 'black' }}>
      <h1 className="mb-4 text-3xl font-bold">Your Cart</h1>
      <p className="text-gray-700">Review items before checkout.</p>
      {/* Cart Items List, Remove/Update Items can be added here */}
    </div>
  );
}
