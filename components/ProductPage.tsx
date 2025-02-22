"use client";
import { useState } from "react";
import Filters from "./Filters";
import Products from "./Products";
import { SlidersHorizontal } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export  function ProductPage({ products }: { products: any[] }) {
    const productFilters = [
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
    };

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

    return (
        <div className="mt-20 mx-auto text-black pb-4 sm:px-auto">
            <div className="flex items-stretch gap-3">
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

                <button
                    style={{ "zIndex": "2" }}
                    onClick={() => setMobileFiltersMenu(prev => !prev)}
                    type="button"
                    className="fixed bottom-4 right-4 bg-[#073453] text-white p-3 rounded-full hover:bg-black md:hidden"
                >
                    <SlidersHorizontal size={16} />
                </button>

                <Products products={products} />
            </div>
        </div>
    );
}
