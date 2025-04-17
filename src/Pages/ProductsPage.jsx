import { useState } from "react";
import ProductsList from "../Components/Products/ProductsList";
import SearchProduct from "../Components/Products/SearchProducts";
import { FiGrid, FiList, FiSliders, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ProductFilters from "../Components/Products/ProductFilters";

export default function ProductsPage() {
  const [viewModeList, setViewModeList] = useState(true);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(true);

  // Sample data (move to a separate data file in real application)
  const categories = [
    { id: "all", name: "All Products", icon: "🌟" },
    { id: "electronics", name: "Electronics", icon: "📱" },
    { id: "fashion", name: "Fashion", icon: "👕" },
    { id: "home", name: "Home & Living", icon: "🏠" },
    { id: "beauty", name: "Beauty", icon: "✨" },
  ];

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SearchProduct />
      <div className="md:grid grid-cols-1 md:grid-cols-4 md:gap-x-14 gap-y-6 my-10 flex flex-col">
        <div className="col-span-1">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <FiSliders />
            <span>Filters</span>
            <motion.span
              animate={{ rotate: showFilters ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown />
            </motion.span>
          </button>
        </div>

        <div className="flex items-center gap-2 col-span-3 justify-between order-3 md:order-none">
          <button
            onClick={() => setViewModeList((prevState) => !prevState)}
            className={`p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200`}
          >
            {viewModeList ? <FiList size={20} /> : <FiGrid size={20} />}
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {/* Filters */}
        <div className="col-span-1 order-2 md:order-none">
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ProductFilters onClose={() => setShowFilters(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={`order-last md:order-none ${
            showFilters ? `col-span-3` : `col-span-4`
          }`}
        >
          <ProductsList viewModeList={viewModeList} />
        </div>
      </div>
    </div>
  );
}
