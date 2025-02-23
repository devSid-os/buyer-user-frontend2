'use client';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { SlidersHorizontal } from 'lucide-react';

// Add proper interface for filter structure
interface Filter {
  name: string;
  availableFilters: string[];
}

export default function Filters({
  isSmallScreen,
  filters,
  expandedFilter,
  selectedFilters,
  mobileFiltersMenu,
  toggleFilter,
  handleCheckboxChange,
  resetAllFilters,
}: {
  filters: Filter[];  // Replace any[] with Filter[]
  expandedFilter: string | null;
  toggleFilter: (filterName: string) => void;
  handleCheckboxChange: (category: string, option: string) => void;
  selectedFilters: { [key: string]: string[] };
  resetAllFilters: () => void;
  mobileFiltersMenu: boolean;
  isSmallScreen: boolean;
}) {
  return (
    <div
      style={{ zIndex: '2' }}
      className={`${isSmallScreen ? (mobileFiltersMenu ? 'fixed left-0 top-0 mt-[60px] h-screen w-screen bg-white py-2' : 'hidden') : 'hidden w-[16%] border border-gray-300 md:block'}`}
    >
      <div className="flex items-center justify-between border-b border-gray-300 p-2">
        <p className="flex items-center gap-1 text-sm font-semibold tracking-wider">
          <SlidersHorizontal size={14} />
          &nbsp;Filters
        </p>
        <button
          className="mr-3 text-[13px] font-semibold text-[#a8354b]"
          type="button"
          onClick={resetAllFilters}
        >
          CLEAR ALL
        </button>
      </div>
      <div className="flex flex-col items-stretch">
        {filters.map((filter) => (
          <div className={`border-b p-2 py-3`} key={filter.name}>
            {/* Button to toggle filter */}
            <button
              className="flex w-full items-center gap-1 tracking-wide focus:outline-none"
              onClick={() => toggleFilter(filter.name)}
            >
              {expandedFilter === filter.name ? (
                <RemoveIcon fontSize="small" />
              ) : (
                <AddIcon fontSize="small" />
              )}
              <span className="text-[13px] font-semibold tracking-wider">{filter.name}</span>
            </button>

            {/* Display checkboxes if expanded */}
            {expandedFilter === filter.name && (
              <div className="hidden-scrollbar mt-1 flex max-h-[170px] flex-col overflow-auto">
                {filter.availableFilters.map((option: any, index: number) => (
                  <div key={index} className="flex items-center py-1">
                    <label
                      htmlFor={`${filter.name}-${option}`}
                      className="flex cursor-pointer select-none items-center gap-1"
                    >
                      <Checkbox
                        id={`${filter.name}-${option}`}
                        sx={{ transform: 'scale(0.75)', padding: 0 }}
                        checked={selectedFilters[filter.name]?.includes(option) || false}
                        onChange={() => handleCheckboxChange(filter.name, option)}
                        color="primary"
                      />
                      <span className="text-[13px] tracking-wider">{option}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
