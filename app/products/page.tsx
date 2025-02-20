"use client";
import { useState } from "react";
import Filters from "./Filters";
import Products from "./Products";
import { SlidersHorizontal } from "lucide-react";
import { useMediaQuery } from "react-responsive";


export default function Men() {
    const productFilters: { name: string, availableFilters: string[] }[] = [
        { name: 'Product Type', availableFilters: ["Casual", "Denim", "Formals"] },
        { name: "Trend", availableFilters: ["Graphics", "Korean", "Formal Attire", "Opium"] },
        { name: "Sleeve Type", availableFilters: ["Full Sleeve", "Half Sleeve", "Regular", "Short", "Short Sleeves"] },
        { name: "Size", availableFilters: ["S", "M", "L", "XL", "2XL", "3XL"] },
        { name: "Fit", availableFilters: ["Box Fit", "Loose Fit", "Oversized", "Printed"] },
        { name: "Color", availableFilters: ["Alloy", "Baby Pink", "Beige", "Black", "Blue", "Blue Hue", "Brown", "Coral", "Dark Blue", "Red"] },
        { name: "Fabric", availableFilters: ["100% Cotton", "100% Rayon", "85% Cotton 15% Linen", "Airtech", "Boski", "Boski Cotton"] }
    ];

    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
    const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
    const [mobileFiltersMenu, setMobileFiltersMenu] = useState<boolean>(false);

    const resetAllFilters = (): void => {
        setSelectedFilters({});
    }

    const toggleFilter = (filterName: string) => {
        setExpandedFilter(prev => (prev === filterName ? null : filterName));
    };

    const handleCheckboxChange = (category: string, option: string) => {
        setSelectedFilters(prevFilters => {
            const selectedOptions = prevFilters[category] || [];
            return {
                ...prevFilters,
                [category]: selectedOptions.includes(option)
                    ? selectedOptions.filter(item => item !== option)
                    : [...selectedOptions, option]
            };
        });
    };

    const productList = [
        { id: 1, src: "/products/shirts/s1.jpg", price: 687, ratings: 3, name: "BLACK SOLID COTTON SHIRT" },
        { id: 2, src: "/products/shirts/s2.jpg", price: 688, ratings: 4.5, name: "BEIGE SOLID CASA LINEN SHIRT" },
        { id: 3, src: "/products/shirts/s3.jpg", price: 687, ratings: 4, name: "RED SOLID COTTON-SATIN SHIRT" },
        { id: 4, src: "/products/shirts/s4.jpg", price: 687, ratings: 3, name: "TERACOTTA BROWN SOLID COTTON SHIRT" },
        { id: 5, src: "/products/shirts/s5.jpg", price: 725, ratings: 2.5, name: "SELF TEXTURED WAFFLE KNIT HALF SLEEVES SHIRT WITH CUBAN COLLAR" },
        { id: 6, src: "/products/shirts/s6.jpg", price: 749, ratings: 4, name: "BLUE OXFORD SOLID SHIRT" },
        { id: 7, src: "/products/shirts/s7.jpg", price: 764, ratings: 3.5, name: "CREAM OXFORD SOLID SHIRT" },
        { id: 8, src: "/products/shirts/s8.jpg", price: 764, ratings: 4, name: "DOODLE SHIRT" },
        { id: 9, src: "/products/shirts/s9.jpg", price: 765, ratings: 5, name: "MELANGE SKY BLUE SOLID SHIRT" },
        { id: 10, src: "/products/shirts/s10.jpg", price: 799, ratings: 3, name: "MELANGE WHITE SOLID SHIRT" },
        { id: 11, src: "/products/shirts/s11.jpg", price: 809, ratings: 3.5, name: "FIND YOUR PERFECT MENS WAFFLE KNIW SOLID SHIRT" },
        { id: 12, src: "/products/shirts/s12.jpg", price: 999, ratings: 4.5, name: "MENS CUT AWAY COLLAR STRIPED SHIRT" },
    ]

    return (
        <div className="mt-20 mx-auto text-black pb-4 sm:px-auto">
            <div className="flex items-stretch gap-3">
                {/* FILTERS SECTION */}
                <Filters
                    selectedFilters={selectedFilters}
                    handleCheckboxChange={handleCheckboxChange}
                    toggleFilter={toggleFilter}
                    expandedFilter={expandedFilter}
                    filters={productFilters}
                    resetAllFilters={resetAllFilters}
                    mobileFiltersMenu={mobileFiltersMenu}
                    isSmallScreen={isSmallScreen}
                />

                {/* FILTERS BUTOTN FOR SMALL SCREEN AND BELOW */}
                <button style={{ "zIndex": "2" }} onClick={() => setMobileFiltersMenu(prev => !prev)} type="button" className="fixed bottom-4 right-4 bg-[#073453] text-white p-3 rounded-full hover:bg-black md:hidden">
                    <SlidersHorizontal size={16} />
                </button>


                {/* PRODUCTS LIST */}
                <Products products={productList} />

            </div>
        </div>
    );
}