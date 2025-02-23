'use client';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import Products from './Products';
import { SlidersHorizontal } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { productList } from '@/constants/productData';

const productFilters = [
  { 
    name: 'Product Type', 
    availableFilters: ['Casual', 'Denim', 'Formals'] 
  },
  { 
    name: 'Trend', 
    availableFilters: ['Graphics', 'Korean', 'Formal Attire', 'Opium'] 
  },
  {
    name: 'Sleeve Type',
    availableFilters: ['Full Sleeve', 'Half Sleeve', 'Regular', 'Short', 'Short Sleeves'],
  },
  { 
    name: 'Size', 
    availableFilters: ['S', 'M', 'L', 'XL', '2XL', '3XL'] 
  },
  { 
    name: 'Fit', 
    availableFilters: ['Box Fit', 'Loose Fit', 'Oversized', 'Printed'] 
  },
  {
    name: 'Color',
    availableFilters: [
      'Black',
      'White',
      'Blue',
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Brown',
      'Purple',
      'Orange'
    ],
  },
];

export default function Men() {
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [mobileFiltersMenu, setMobileFiltersMenu] = useState<boolean>(false);

  // Apply filters whenever selectedFilters changes
  useEffect(() => {
    const applyFilters = () => {
      let result = productList;

      Object.entries(selectedFilters).forEach(([category, selectedOptions]) => {
        if (selectedOptions.length > 0) {
          result = result.filter(product => {
            const categoryKey = category.toLowerCase() as keyof typeof product;
            const productValue = product[categoryKey];
            return selectedOptions.some(option => {
              if (Array.isArray(productValue)) {
                return productValue.includes(option);
              }
              return productValue === option;
            });
          });
        }
      });

      setFilteredProducts(result);
    };

    applyFilters();
  }, [selectedFilters]);

  const resetAllFilters = (): void => {
    setSelectedFilters({});
    setFilteredProducts(productList);
  };

  const toggleFilter = (filterName: string) => {
    setExpandedFilter((prev) => (prev === filterName ? null : filterName));
  };

  const handleCheckboxChange = (category: string, option: string) => {
    setSelectedFilters((prevFilters) => {
      const selectedOptions = prevFilters[category] || [];
      const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
      
      return {
        ...prevFilters,
        [category]: updatedOptions,
      };
    });
  };

  return (
    <div className="sm:px-auto mx-auto mt-20 pb-4 text-black">
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
          style={{ zIndex: '2' }}
          onClick={() => setMobileFiltersMenu((prev) => !prev)}
          type="button"
          className="fixed bottom-4 right-4 rounded-full bg-[#073453] p-3 text-white hover:bg-black md:hidden"
        >
          <SlidersHorizontal size={16} />
        </button>

        <Products products={filteredProducts} />
      </div>
    </div>
  );
}
