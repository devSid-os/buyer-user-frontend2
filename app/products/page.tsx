"use client";
import { useState, useEffect } from "react";
import Products from "@/components/Products";
import Filters from "@/components/Filters";
import CircularProgress from "@mui/material/CircularProgress"; // MUI loader

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  // Filter logic
  const applyFilters = () => {
    let updatedProducts = products;
    if (selectedFilters["category"]?.length) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters["category"].includes(product.category)
      );
    }
    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  return (
    <div className="max-w-7xl mx-auto p-6 flex gap-8">
      {/* Filters Sidebar */}
      <aside className=" -[16%] min-h-screen border border-gray-300 hidden md:block bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <Filters
          filters={[
            { name: "category", availableFilters: ["electronics", "jewelery", "men's clothing", "women's clothing"] },
          ]}
          selectedFilters={selectedFilters}
          handleCheckboxChange={(category, option) =>
            setSelectedFilters((prev) => ({
              ...prev,
              [category]: prev[category]?.includes(option)
                ? prev[category].filter((item) => item !== option)
                : [...(prev[category] || []), option],
            }))
          }
          resetAllFilters={() => setSelectedFilters({})}
          expandedFilter="category"
          toggleFilter={() => {}}
          mobileFiltersMenu={false}
          isSmallScreen={false}
        />
      </aside>

      {/* Products List */}
      <main className="w-3/4">
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <CircularProgress size={60} />
          </div>
        ) : (
          <Products products={filteredProducts} />
        )}
      </main>
    </div>
  );
}
