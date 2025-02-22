"use client";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import { SlidersHorizontal } from "lucide-react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
            ? "fixed top-0 left-0 w-full h-screen bg-white z-50 p-4 overflow-y-auto"
            : "hidden"
          : "w-64 border border-gray-300 p-4 shadow-md bg-white"
      }`}
    >
      {/* Header with Filter Icon & Clear Button */}
      <div className="flex justify-between items-center pb-2 border-b border-gray-300">
        <p className="flex items-center gap-2 font-semibold text-lg">
          <SlidersHorizontal size={18} />
          Filters
        </p>
        <button
          className="text-red-500 text-sm font-semibold"
          onClick={resetAllFilters}
        >
          CLEAR ALL
        </button>
      </div>

      {/* Filter Options */}
      <div className="mt-3 " style={{color:"black"}}>
        {filters.map((filter) => (
          <div key={filter.name} className="mb-3">
            {/* Filter Toggle Button */}
            <button
              className="flex items-center justify-between w-full py-2 text-md font-semibold bg-gray-100 px-2 rounded-md"
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
              <div className="mt-2 pl-2 flex flex-col gap-2 max-h-40 overflow-y-auto">
                {filter.availableFilters.map((option: any, index: number) => (
                  <label
                    key={index}
                    htmlFor={`${filter.name}-${option}`}
                    className="flex items-center gap-2 cursor-pointer text-md"
                  >
                    <Checkbox
                      id={`${filter.name}-${option}`}
                      sx={{ transform: "scale(0.8)", padding: 0 }}
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
