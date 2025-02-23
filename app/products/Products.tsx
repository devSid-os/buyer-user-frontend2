'use client';
import { Heart, IndianRupee, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/data/cartData';
import { toast } from 'sonner';
import { IProductList } from '@/types/product';
import Link from 'next/link';

export default function Products({ products }: { products: IProductList[] }) {
  const router = useRouter();
  const { addItem } = useCartStore();
  const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({});

  const handleAddToCart = async (product: IProductList, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setLoadingStates(prev => ({ ...prev, [product.id]: true }));
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        src: product.src,
      });
      toast.success(`Added ${product.name} to cart`);
    } finally {
      setLoadingStates(prev => ({ ...prev, [product.id]: false }));
    }
  };

  const redirectToProductDetailPage = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div style={{ zIndex: '1' }} className="flex w-full flex-col gap-2 px-2 md:w-[84%] md:p-0 md:pr-1">
      <div className="flex items-center justify-between">
        <p className="text-[12px] tracking-wider">{products.length} items</p>
        <select className="rounded-md bg-gray-100 p-1 py-2 text-sm tracking-wide focus:outline-none">
          <option value={'discount'}>Discount</option>
          <option value={'newest_first'}>What's new</option>
          <option value={'price_low_high'}>Price-low to high</option>
          <option value={'price_high_low'}>Price-high to low</option>
          <option value={'customer_ratings'}>Customer Ratings</option>
        </select>
      </div>
      {/* PRODUCTS LIST */}
      <div className="grid grid-cols-2 gap-3 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <img
              onClick={() => redirectToProductDetailPage(product.id)}
              className="cursor-pointer rounded-md"
              src={product.src}
              alt={product.name}
            />
            <div className="mt-1 flex items-start justify-between gap-1">
              <p
                onClick={() => redirectToProductDetailPage(product.id)}
                className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-[13px] tracking-wide"
              >
                {product.name}
              </p>
              <button type="button">
                <Heart size={20} color="gray" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <Rating readOnly name="size-small" defaultValue={product.ratings} size="small" />
              {product.ratings}
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center text-[13px]">
                <IndianRupee size={13} />
                {product.price}
              </span>
              <Button 
                onClick={(e) => handleAddToCart(product, e)} 
                variant="destructive" 
                size="sm"
                disabled={loadingStates[product.id]}
              >
                {loadingStates[product.id] ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  'Add to Cart'
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex w-full justify-center">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            },
            '& .MuiPaginationItem-ellipsis': {
              color: 'black',
            },
            '& .Mui-selected': {
              backgroundColor: 'black!important',
              color: 'white',
            },
          }}
        />
      </div>
    </div>
  );
}
