// 'use client';
// import { notFound, useRouter } from 'next/navigation';
// import Rating from '@mui/material/Rating';
// import { productList } from '@/constants/productData';
// import { toast } from 'sonner';
// import { useCartStore } from '@/data/cartData';
// import { Button } from '@/components/ui/button';
// import { useEffect, useState } from 'react';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   src: string;
// }

// export default function ProductDetails({ params }: { params: { id: string } }) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const { addItem } = useCartStore();
//   const router = useRouter();

//   useEffect(() => {
//     const foundProduct = productList.find((p) => p.id.toString() === params.id);
//     if (!foundProduct) {
//       router.push('/404');
//       return;
//     }
//     setProduct(foundProduct);
//     setIsLoading(false);
//   }, [params.id, router]);

//   const handleAddToCart = () => {
//     if (product) {
//       addItem({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: 1,
//         src: product.src,
//       });
//       toast.success(`Added ${product.name} to cart`);
//     }
//   };

//   if (isLoading || !product) {
//     return (
//       <div className="flex h-[70vh] items-center justify-center">
//         <div className="text-lg">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="mx-auto grid max-w-6xl grid-cols-1 gap-10 p-6 md:grid-cols-2"
//       style={{ color: 'black' }}
//     >
//       {/* Product Image Section */}
//       <div className="flex flex-col items-center">
//         <img
//           src={product.src}
//           alt={product.name}
//           className="w-full max-w-md rounded-lg shadow-md"
//         />
//         <div className="mt-4 flex gap-2">
//           {/* Product Thumbnails */}
//           {[product.src, product.src, product.src].map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="Thumbnail"
//               className="h-16 w-16 cursor-pointer rounded-md border object-cover"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Product Details Section */}
//       <div>
//         <h1 className="text-3xl font-semibold">{product.name}</h1>
//         <Rating value={4.5} precision={0.5} readOnly className="mt-2" />
//         <p className="mt-2 text-gray-600">{product.description}</p>

//         <h2 className="mt-3 text-2xl font-bold text-red-500">₹{product.price}</h2>
//         <p className="font-semibold text-green-600">Inclusive of all taxes</p>

//         {/* Offers & Delivery */}
//         <div className="mt-4 rounded-md border bg-gray-50 p-3">
//           <p>
//             <strong>Available Offers:</strong>
//           </p>
//           <ul className="ml-6 list-disc text-sm text-gray-700">
//             <li>Bank Offer: 10% Instant Discount on HDFC Cards</li>
//             <li>Get ₹200 cashback on UPI Payments</li>
//             <li>No Cost EMI Available</li>
//           </ul>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-5 flex gap-4">
//           <Button variant="default" size="lg" className="w-full">
//             Buy Now
//           </Button>
//           <Button onClick={handleAddToCart} variant="outline" size="lg" className="w-full">
//             Add to Cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import { notFound } from 'next/navigation';
import Rating from '@mui/material/Rating';
import { productList } from '@/constants/productData';
import { toast } from 'sonner';
import { useCartStore } from '@/data/cartData';
import { Button } from '@/components/ui/button';
import { useEffect, useState, use } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  src: string;
  rating?: number;
  images?: string[];
}

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params); // ✅ Unwrapping the params Promise
  const [product, setProduct] = useState<Product | null>(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    const foundProduct = productList.find((p) => p.id.toString() === resolvedParams.id);
    if (!foundProduct) {
      notFound(); // Proper 404 handling
      return;
    }
    setProduct(foundProduct);
  }, [resolvedParams.id]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        src: product.src,
      });
      toast.success(`Added ${product.name} to cart`);
    }
  };

  if (!product) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 mt-32 p-6 md:grid-cols-2 md:mt-20">
      {/* Product Image Section */}
      <div className="flex flex-col items-center">
        <img
          src={product.src}
          alt={product.name}
          className="w-full max-w-md rounded-lg shadow-md"
        />
        <div className="mt-4 flex gap-2">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className="h-16 w-16 cursor-pointer rounded-md border object-cover"
            />
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <Rating value={product.rating || 4.5} precision={0.5} readOnly className="mt-2" />
        <p className="mt-2 text-gray-600">{product.description}</p>

        <h2 className="mt-3 text-2xl font-bold text-red-500">₹{product.price}</h2>
        <p className="font-semibold text-green-600">Inclusive of all taxes</p>

        {/* Offers & Delivery */}
        <div className="mt-4 rounded-md border bg-gray-50 p-3">
          <p>
            <strong>Available Offers:</strong>
          </p>
          <ul className="ml-6 list-disc text-sm text-gray-700">
            <li>Bank Offer: 10% Instant Discount on HDFC Cards</li>
            <li>Get ₹200 cashback on UPI Payments</li>
            <li>No Cost EMI Available</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex gap-4">
          <Button size="lg" className="w-full">
            Buy Now
          </Button>
          <Button onClick={handleAddToCart} size="lg" style={{border: "1px solid #1b3a57"}} className="bg-white text-[#1b3a57] w-full hover:text-white">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
