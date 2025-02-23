'use client';
import { Heart, IndianRupee } from 'lucide-react';
import Pagination from '@mui/material/Pagination';
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Products({ products }: { products: any[] }) {
  const router = useRouter();

  const redirectToProductDetailPage = (productId: any) => {
    const urlWithQuery = new URL('/product', window.location.origin);

    router.push(urlWithQuery + `/${productId}`);
  };

  return (
    <div
      style={{ zIndex: '1' }}
      className="flex w-full flex-col gap-2 px-2 md:w-[84%] md:p-0 md:pr-1"
    >
      <div className="flex items-center justify-between">
        <p className="text-[12px] tracking-wider">350 items</p>
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
        {products.map((product, index: number) => (
          <div key={index} className="flex flex-col">
            <img
              onClick={() => redirectToProductDetailPage(product.id)}
              className="cursor-pointer rounded-md"
              src={product.src}
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
            <Rating readOnly name="size-small" defaultValue={product.ratings} size="small" />
            <p className="flex items-center text-[13px]">
              <IndianRupee size={13} />
              {product.price}
              <Button variant="destructive">Add to Cart</Button>
            </p>
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
