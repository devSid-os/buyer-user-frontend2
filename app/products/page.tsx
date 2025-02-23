'use client';
import { useState } from 'react';
import Filters from './Filters';
import Products from './Products';
import { SlidersHorizontal } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { productList } from '@/constants/productData';

export default function Men() {
  const productFilters: { name: string; availableFilters: string[] }[] = [
    { name: 'Product Type', availableFilters: ['Casual', 'Denim', 'Formals'] },
    { name: 'Trend', availableFilters: ['Graphics', 'Korean', 'Formal Attire', 'Opium'] },
    {
      name: 'Sleeve Type',
      availableFilters: ['Full Sleeve', 'Half Sleeve', 'Regular', 'Short', 'Short Sleeves'],
    },
    { name: 'Size', availableFilters: ['S', 'M', 'L', 'XL', '2XL', '3XL'] },
    { name: 'Fit', availableFilters: ['Box Fit', 'Loose Fit', 'Oversized', 'Printed'] },
    {
      name: 'Color',
      availableFilters: [
        'Alloy',
        'Baby Pink',
        'Beige',
        'Black',
        'Blue',
        'Blue Hue',
        'Brown',
        'Coral',
        'Dark Blue',
        'Red',
      ],
    },
    {
      name: 'Fabric',
      availableFilters: [
        '100% Cotton',
        '100% Rayon',
        '85% Cotton 15% Linen',
        'Airtech',
        'Boski',
        'Boski Cotton',
      ],
    },
  ];

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [mobileFiltersMenu, setMobileFiltersMenu] = useState<boolean>(false);

  const resetAllFilters = (): void => {
    setSelectedFilters({});
  };

  const toggleFilter = (filterName: string) => {
    setExpandedFilter((prev) => (prev === filterName ? null : filterName));
  };

  const handleCheckboxChange = (category: string, option: string) => {
    setSelectedFilters((prevFilters) => {
      const selectedOptions = prevFilters[category] || [];
      return {
        ...prevFilters,
        [category]: selectedOptions.includes(option)
          ? selectedOptions.filter((item) => item !== option)
          : [...selectedOptions, option],
      };
    });
  };

  return (
    <div className="sm:px-auto mx-auto mt-20 pb-4 text-black">
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
        <button
          style={{ zIndex: '2' }}
          onClick={() => setMobileFiltersMenu((prev) => !prev)}
          type="button"
          className="fixed bottom-4 right-4 rounded-full bg-[#073453] p-3 text-white hover:bg-black md:hidden"
        >
          <SlidersHorizontal size={16} />
        </button>

        {/* PRODUCTS LIST */}
        <Products products={productList} />
      </div>
    </div>
  );
}
