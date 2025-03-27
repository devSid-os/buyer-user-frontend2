"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { productList } from "@/constants/productData";
import { ScrollArea } from "@/components/ui/scroll-area";
import Products from "./Products";
import { usePathname, useRouter } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";

const productFilters = [
  { name: "Product Type", availableFilters: ["Casual", "Denim", "Formals"] },
  { name: "Trend", availableFilters: ["Graphics", "Korean", "Formal Attire", "Opium"] },
  { name: "Sleeve Type", availableFilters: ["Full Sleeve", "Half Sleeve", "Regular", "Short", "Short Sleeves"] },
  { name: "Size", availableFilters: ["S", "M", "L", "XL", "2XL", "3XL"] },
  { name: "Fit", availableFilters: ["Box Fit", "Loose Fit", "Oversized", "Printed"] },
  { name: "Color", availableFilters: ["Black", "White", "Blue", "Red", "Green", "Yellow", "Grey", "Brown", "Purple", "Orange"] },
];

export default function Men() {
  const router = useRouter();
  const pathname = usePathname();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [selectedMobileFilter, setselectedMobileFilter] = useState<any>(productFilters[0]);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [hasChanges, setHasChanges] = useState(false);

  const formatForStorage = (text: string) => text.replace(/\s+/g, "_").toLowerCase();
  const formatForDisplay = (text: string) => text.replace(/_/g, " ");


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let filters: { [key: string]: string[] } = {};

    productFilters.forEach(({ name }) => {
      const formattedCategory = formatForStorage(name);
      const paramValue = params.get(formattedCategory);
      if (paramValue) {
        filters[formattedCategory] = paramValue.split(",");
      }
    });

    setSelectedFilters(filters);
  }, []);

  const handleCheckboxChange = (category: string, option: string) => {
    const formattedCategory = formatForStorage(category);
    setSelectedFilters((prevFilters) => {
      const selectedOptions = prevFilters[formattedCategory] || [];
      const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
      setHasChanges(true);
      return { ...prevFilters, [formattedCategory]: updatedOptions };
    });
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    Object.keys(selectedFilters).forEach((category) => {
      if (selectedFilters[category]?.length) {
        params.set(category, selectedFilters[category].join(","));
      }
    });

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    setHasChanges(false);
    setShowMobileMenu(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="sm:px-auto mx-auto mt-28 pb-4 text-black md:mt-16">
        <div className="relative flex items-stretch gap-3">
          <div className="sticky top-20 left-0 h-[calc(100vh-5rem)] overflow-auto w-[20%] hidden md:block">
            <ScrollArea className="h-full pr-1">
              <div className="flex flex-col relative">
                <div className="px-3 flex flex-wrap justify-between items-center">
                  <p className="font-bold tracking-wide text-sm">FILTERS</p>
                  <button
                    className="text-[#083554] text-[12px] font-semibold hover:text-[#4a6e8d]"
                    type="button"
                    onClick={() => {
                      setSelectedFilters({});
                      setHasChanges(false);
                      router.push(pathname, { scroll: false });
                    }}
                  >
                    CLEAR ALL
                  </button>
                </div>

                <div className="mt-1 border-r border-t border-b border-[#f0e0e0]">
                  {productFilters.map((item, index) => (
                    <div className="p-2 px-3" key={index}>
                      <p className="text-[13px] text-[#083554] tracking-wide font-semibold">
                        {formatForDisplay(item.name).toUpperCase()}
                      </p>
                      <div className="flex flex-col gap-1 items-start mt-[2px]">
                        {item.availableFilters.map((filter, i) => (
                          <div className="flex gap-1 items-center" key={i}>
                            <Checkbox
                              checked={selectedFilters[formatForStorage(item.name)]?.includes(filter) || false}
                              onCheckedChange={() => handleCheckboxChange(item.name, filter)}
                              className="data-[state=checked]:bg-[#083554] h-3 w-3 before:w-1.5 before:h-1.5"
                            />
                            <button
                              onClick={() => handleCheckboxChange(item.name, filter)}
                              type="button"
                              className="cursor-pointer tracking-wide text-[12px]"
                            >
                              {filter}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {hasChanges && (
                  <button
                    className="absolute top-6 right-1 mt-3 mx-3 bg-[#083554] text-white rounded-md text-[12px] p-1 px-2 hover:bg-[#4a6e8d] transition-all"
                    type="button"
                    onClick={applyFilters}
                  >
                    APPLY FILTERS
                  </button>
                )}
              </div>
            </ScrollArea>
          </div>

          <div className="flex-1 w-full py-4">
            <Products products={productList} />
          </div>
        </div>

        {/* FOR SMALLER SCREENS */}
        {(showMobileMenu && isSmallScreen) && <div style={{ zIndex: 2000 }} className="z-10 fixed top-0 left-0 w-full h-full bg-white">
          <div className="w-full h-full flex relative">

            <div className="bg-[#eaeaea] w-[30%] flex flex-col items-start">
              {
                productFilters.map((item) => (
                  <button key={item.name} onClick={() => setselectedMobileFilter(item)} className={`p-2 font-[500] ${selectedMobileFilter.name === item.name && 'bg-white '} w-full text-black text-left`}>
                    {item.name}
                  </button>
                ))
              }
            </div>
            <div className="flex-1 flex flex-col items-start gap-4 p-2 px-4">
              {selectedMobileFilter.availableFilters.map((item: any, i: any) => (
                <div className="flex gap-1 items-center" key={i}>
                  <Checkbox
                    checked={selectedFilters[formatForStorage(selectedMobileFilter.name)]?.includes(item) || false}
                    onCheckedChange={() => handleCheckboxChange(selectedMobileFilter.name, item)}
                    className="data-[state=checked]:bg-[#083554] h-4 w-4 before:w-1.5 before:h-1.5"
                  />
                  <button
                    onClick={() => handleCheckboxChange(selectedMobileFilter.name, item)}
                    type="button"
                    className="cursor-pointer tracking-wide text-sm"
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-3 w-full absolute left-0 bottom-0 p-2 bg-white" style={{borderTop: '1px solid black'}}>
              <button onClick={() => setShowMobileMenu(false)} className="font-[500] flex-1 p-1 rounded-md" style={{border: '1px solid #000'}}>Close</button>
              <button onClick={applyFilters} className="font-[500] flex-1 p-1 rounded-md bg-[#083554] text-white" style={{border: '1px solid #083554'}}>Apply</button>
            </div>
          </div>
        </div>}

        <div className="fixed z-5 bottom-0 left-0 w-full md:hidden">
          <button onClick={() => setShowMobileMenu(true)} className="flex items-center justify-center gap-2 py-2 w-full bg-[#083554] text-white uppercase font-[500] tracking-wider">
            <SlidersHorizontal size={16} /><span className="mt-[2px]">Filters</span>
          </button>
        </div>
      </div>
    </Suspense>
  );
}
