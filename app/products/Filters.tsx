"use client";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { SlidersHorizontal } from "lucide-react";

export default function Filters({ isSmallScreen, filters, expandedFilter, selectedFilters, mobileFiltersMenu, toggleFilter, handleCheckboxChange, resetAllFilters }: { filters: any[], expandedFilter: string | null, toggleFilter: (filterName: string) => void, handleCheckboxChange: (category: string, option: string) => void, selectedFilters: { [key: string]: string[] }, resetAllFilters: () => void, mobileFiltersMenu: boolean, isSmallScreen: boolean }) {


    return (
        <div style={{"zIndex": "2"}} className={`${isSmallScreen ? mobileFiltersMenu ? "mt-[60px] fixed top-0 left-0 py-2 h-screen w-screen bg-white" : "hidden" : "w-[16%] border border-gray-300 hidden md:block"}`}>
            <div className="flex justify-between items-center p-2 border-b border-gray-300">
                <p className="tracking-wider flex items-center gap-1 font-semibold text-sm">
                    <SlidersHorizontal size={14} />&nbsp;Filters
                </p>
                <button
                    className="text-[13px] text-[#a8354b] mr-3 font-semibold"
                    type="button"
                    onClick={resetAllFilters}
                >
                    CLEAR ALL
                </button>
            </div>
            <div className="flex flex-col items-stretch">
                {filters.map((filter) => (
                    <div className={`p-2 py-3 border-b`} key={filter.name}>
                        {/* Button to toggle filter */}
                        <button
                            className="flex gap-1 w-full items-center tracking-wide focus:outline-none"
                            onClick={() => toggleFilter(filter.name)}
                        >
                            {expandedFilter === filter.name ?
                                <RemoveIcon fontSize="small" /> :
                                <AddIcon fontSize="small" />
                            }
                            <span className="tracking-wider font-semibold text-[13px]">{filter.name}</span>
                        </button>

                        {/* Display checkboxes if expanded */}
                        {expandedFilter === filter.name && (
                            <div className="mt-1 flex flex-col max-h-[170px] overflow-auto hidden-scrollbar">
                                {filter.availableFilters.map((option: any, index: number) => (
                                    <div key={index} className="flex items-center py-1">
                                        <label htmlFor={`${filter.name}-${option}`} className="select-none flex items-center gap-1 cursor-pointer">
                                            <Checkbox
                                                id={`${filter.name}-${option}`}
                                                sx={{ transform: "scale(0.75)", padding: 0 }}
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