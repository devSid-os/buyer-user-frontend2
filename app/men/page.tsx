"use client";
import SwiperComponent from "@/components/swiper/SwiperComponent";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Men() {

    const images: { src: string, label?: string }[] = [
        { src: '/carousel_images/mens/mens_5.png' },
        { src: '/carousel_images/mens/mens_3.png' },
        { src: '/carousel_images/mens/mens_1.png' },
        { src: '/carousel_images/mens/mens_2.png' },
        { src: '/carousel_images/mens/mens_6.png' }
    ]

    const quickPickImages: { src: string, label?: string, url: string }[] = [
        { src: '/carousel_images/quick_picks/image_1.png', label: 'Top Wear', url: 'products' },
        { src: '/carousel_images/quick_picks/image_2.png', label: 'Bottom Wear', url: 'products' },
        { src: '/carousel_images/quick_picks/image_3.png', label: 'Graphic T-Shirts', url: 'products' },
        { src: '/carousel_images/quick_picks/image_4.png', label: 'Shirts', url: 'products' },
        { src: '/carousel_images/quick_picks/image_5.png', label: 'Hoodies & Jackets', url: 'products' },
        { src: '/carousel_images/quick_picks/image_6.png', label: 'Co-ords', url: 'products' },
        { src: '/carousel_images/quick_picks/image_7.png', label: 'Athleisure', url: 'products' },
        { src: '/carousel_images/quick_picks/image_8.png', label: 'Innerwear', url: 'products' }
    ]
    const router = useRouter();
    const handleRedirect = (url: string, queryParams: any = {}) => {
        const urlWithQuery = new URL(url, window.location.origin);
        Object.keys(queryParams).forEach((key) => {
            urlWithQuery.searchParams.append(key, queryParams[key]);
        });

        router.push(urlWithQuery.toString());
    };

    return (
        <div className="mt-20 relative bg-white min-h-screen container mx-auto px-[1rem] sm:px-auto">
            <div className="flex justify-center gap-4 mb-4 pt-4">
                <Link href="/men">
                    <button type="button" className="bg-[#073453] mt-6 flex flex-row rounded-full relative border bg-gradient-to-l cursor-pointer w-36 h-[40px] text-[12px] sm:text-sm md:text-base md:w-44 md:h-12">
                        <img src="/mens.png" alt="Men icon" className="absolute bottom-0 left-2 h-14 md:h-20" />
                        <div className="flex items-center justify-center h-full w-full">
                            <p className="pl-6 text-white font-semibold md:pl-8">Mens</p>
                        </div>
                    </button>
                </Link>

                <Link href="/women">
                    <button type="button" className="mt-6 flex flex-row rounded-full relative border bg-gradient-to-l cursor-pointer bg-black hover:bg-[#073453] w-36 h-[40px] text-[12px] sm:text-sm md:text-base md:w-44 md:h-12">
                        <img src="/womens.png" alt="Women icon" className="absolute bottom-0 left-3 h-14 md:h-20" />
                        <div className="flex items-center justify-center h-full w-full">
                            <p className="pl-12 text-white font-semibold md:pl-14">Womens</p>
                        </div>
                    </button>
                </Link>
            </div>

            <div className="mt-4 text-black pb-4">
                <h3 className="text-xl mb-1">QUICK PICKS</h3>
                <div className="grid grid-cols-4 gap-4 lg:gap-x-8 lg:grid-cols-8">
                    {quickPickImages.map((item, index) => (
                        <div onClick={() => handleRedirect(item.url, item.label)} key={index} className="cursor-pointer flex flex-col justify-center items-center gap-1">
                            <img src={item.src} />
                            <p className="text-center w-full truncate text-[10px] sm:text-[12px] lg:text-sm">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full pb-4">
                <SwiperComponent showPagination={true} images={images} spaceBetween={50} slidesPerView={1} keyboard={true} autoplay={3500} />
            </div>

            <div className="w-full mt-4 py-4 text-black">
                <p className="text-center text-2xl">TOP CATEGORIES</p>
                <div className="mt-2 grid gap-3 md:grid-cols-2">
                    <img src="/categories/shirts.png" className="w-full rounded-xl" />
                    <img src="/categories/tshirts.png" className="w-full rounded-xl" />
                    <img src="/categories/cargos.png" className="w-full rounded-xl" />
                    <img src="/categories/denims.png" className="w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
}
