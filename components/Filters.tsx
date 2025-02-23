'use client';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import { SlidersHorizontal } from 'lucide-react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
  filters: any[];
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
      className={`${
        isSmallScreen
          ? mobileFiltersMenu
            ? 'fixed left-0 top-0 z-50 h-screen w-full overflow-y-auto bg-white p-4'
            : 'hidden'
          : 'w-64 border border-gray-300 bg-white p-4 shadow-md'
      }`}
    >
      {/* Header with Filter Icon & Clear Button */}
      <div className="flex items-center justify-between border-b border-gray-300 pb-2">
        <p className="flex items-center gap-2 text-lg font-semibold">
          <SlidersHorizontal size={18} />
          Filters
        </p>
        <button className="text-sm font-semibold text-red-500" onClick={resetAllFilters}>
          CLEAR ALL
        </button>
      </div>

      {/* Filter Options */}
      <div className="mt-3" style={{ color: 'black' }}>
        {filters.map((filter) => (
          <div key={filter.name} className="mb-3">
            {/* Filter Toggle Button */}
            <button
              className="text-md flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-2 font-semibold"
              onClick={() => toggleFilter(filter.name)}
            >
              <span>{filter.name}</span>
              {expandedFilter === filter.name ? (
                <RemoveIcon fontSize="small" />
              ) : (
                <AddIcon fontSize="small" />
              )}
            </button>

            {/* Checkbox List - Only Show if Filter is Expanded */}
            {expandedFilter === filter.name && (
              <div className="mt-2 flex max-h-40 flex-col gap-2 overflow-y-auto pl-2">
                {filter.availableFilters.map((option: any, index: number) => (
                  <label
                    key={index}
                    htmlFor={`${filter.name}-${option}`}
                    className="text-md flex cursor-pointer items-center gap-2"
                  >
                    <Checkbox
                      id={`${filter.name}-${option}`}
                      sx={{ transform: 'scale(0.8)', padding: 0 }}
                      checked={selectedFilters[filter.name]?.includes(option) || false}
                      onChange={() => handleCheckboxChange(filter.name, option)}
                      color="primary"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
