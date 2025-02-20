"use client";
import { Heart, IndianRupee } from "lucide-react";
import Pagination from '@mui/material/Pagination';
import Rating from '@mui/material/Rating';
import { useRouter } from "next/navigation";

export default function Products({ products }: { products: any[] }) {

    const router = useRouter();

    const redirectToProductDetailPage = (productId: any) => {
        const urlWithQuery = new URL('/product', window.location.origin);

        urlWithQuery.searchParams.append('id', productId);

        router.push(urlWithQuery.toString());
    }

    return (
        <div style={{ "zIndex": "1" }} className="flex flex-col gap-2 w-full px-2 md:p-0 md:pr-1 md:w-[84%]">
            <div className="flex items-center justify-between">
                <p className="text-[12px] tracking-wider">350 items</p>
                <select className="p-1 py-2 bg-gray-100 rounded-md tracking-wide text-sm focus:outline-none">
                    <option value={"discount"}>Discount</option>
                    <option value={"newest_first"}>What's new</option>
                    <option value={"price_low_high"}>Price-low to high</option>
                    <option value={"price_high_low"}>Price-high to low</option>
                    <option value={"customer_ratings"}>Customer Ratings</option>
                </select>
            </div>
            {/* PRODUCTS LIST */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-4">
                {
                    products.map((product, index: number) => (
                        <div key={index} className="flex flex-col">
                            <img onClick={() => redirectToProductDetailPage(product.id)} className="rounded-md cursor-pointer" src={product.src} />
                            <div className="flex justify-between items-start gap-1 mt-1">
                                <p 
                                    onClick={() => redirectToProductDetailPage(product.id)} 
                                    className="text-[13px] cursor-pointer tracking-wide overflow-hidden whitespace-nowrap text-ellipsis"
                                >
                                    {product.name}
                                </p>
                                <button type="button">
                                    <Heart size={20} color="gray" />
                                </button>
                            </div>
                            <Rating readOnly name="size-small" defaultValue={product.ratings} size="small" />
                            <p className="flex items-center text-[13px]">
                                <IndianRupee size={13} />{product.price}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="w-full flex justify-center mt-2">
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