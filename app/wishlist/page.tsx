"use client";

import { useCartStore } from "@/data/cartData";
import { useWishlistStore } from "@/data/wishlistData";

const WishlistPage = () => {
    const { wishlist, toggleWishlist } = useWishlistStore();
    const { addItem, isItemInCart } = useCartStore();

    return (
        <div className="p-6 bg-gray-100 min-h-screen mt-32 md:mt-20">
            <h1 className="text-2xl font-semibold mb-4" style={{ color: "black" }}>Your Wishlist</h1>

            {wishlist.length === 0 ? (
                <p style={{ color: "black" }}>Your wishlist is empty.</p>
            ) : (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    {wishlist.map((item:any) => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
                            <img src={item.src} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold" style={{ color: "black" }}>{item.name}</h2>
                                <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                            </div>

                            <div className="flex space-x-2">
                                {!isItemInCart(item.id) && (
                                    <button
                                        onClick={() => {
                                            addItem({ ...item, quantity: 1 });
                                            toggleWishlist(item);
                                        }}
                                        className="bg-blue-500 text-white px-4 py-1 rounded"
                                    >
                                        Move to Cart
                                    </button>
                                )}

                                <button
                                    onClick={() => toggleWishlist(item)}
                                    className="bg-red-500 text-white px-4 py-1 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={() => wishlist.forEach(toggleWishlist)}
                        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
                    >
                        Clear Wishlist
                    </button>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;