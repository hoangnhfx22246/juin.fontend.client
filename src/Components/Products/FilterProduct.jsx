import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiChevronDown,
  FiCheck,
  FiSliders,
  FiRotateCcw,
} from "react-icons/fi";

const FilterProduct = ({ onApplyFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState(null);
  const [expandedSections, setExpandedSections] = useState([
    "categories",
    "price",
  ]);

  // Filter Options Data
  const categories = [
    { id: "electronics", name: "Electronics", count: 245 },
    { id: "fashion", name: "Fashion", count: 182 },
    { id: "home", name: "Home & Living", count: 156 },
    { id: "sports", name: "Sports", count: 98 },
    { id: "beauty", name: "Beauty", count: 76 },
  ];

  const brands = [
    { id: "nike", name: "Nike", count: 89 },
    { id: "adidas", name: "Adidas", count: 76 },
    { id: "puma", name: "Puma", count: 54 },
    { id: "reebok", name: "Reebok", count: 45 },
    { id: "underArmour", name: "Under Armour", count: 32 },
  ];

  const colors = [
    { id: "white", name: "White", value: "#FFFFFF", border: true },
    { id: "black", name: "Black", value: "#000000" },
    { id: "red", name: "Red", value: "#FF0000" },
    { id: "blue", name: "Blue", value: "#0000FF" },
    { id: "green", name: "Green", value: "#00FF00" },
    { id: "yellow", name: "Yellow", value: "#FFFF00" },
    { id: "purple", name: "Purple", value: "#800080" },
    { id: "orange", name: "Orange", value: "#FFA500" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleBrandToggle = (brandId) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const handleColorToggle = (colorId) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((id) => id !== colorId)
        : [...prev, colorId]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 1000]);
    setRating(null);
  };

  const FilterSection = ({ title, id, children }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => toggleSection(id)}
        className="flex items-center justify-between w-full"
      >
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <motion.span
          animate={{ rotate: expandedSections.includes(id) ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className="text-gray-500" />
        </motion.span>
      </button>
      <AnimatePresence>
        {expandedSections.includes(id) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FiSliders className="text-primary" size={20} />
          <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
        </div>
        <button
          onClick={resetFilters}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
        >
          <FiRotateCcw size={16} />
          <span>Reset</span>
        </button>
      </div>

      {/* Categories */}
      <FilterSection title="Categories" id="categories">
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.label
              key={category.id}
              className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryToggle(category.id)}
                  className="form-checkbox text-primary rounded"
                />
                <span className="text-gray-700">{category.name}</span>
              </div>
              <span className="text-sm text-gray-500">({category.count})</span>
            </motion.label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range" id="price">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">${priceRange[0]}</span>
            <span className="text-gray-600">${priceRange[1]}</span>
          </div>
          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="absolute h-2 bg-primary rounded-full"
                style={{
                  left: `${(priceRange[0] / 1000) * 100}%`,
                  right: `${100 - (priceRange[1] / 1000) * 100}%`,
                }}
              />
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([parseInt(e.target.value), priceRange[1]])
              }
              className="absolute w-full h-2 opacity-0 cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="absolute w-full h-2 opacity-0 cursor-pointer"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Min"
              />
            </div>
            <div className="flex-1">
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Colors" id="colors">
        <div className="grid grid-cols-4 gap-3">
          {colors.map((color) => (
            <motion.button
              key={color.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleColorToggle(color.id)}
              className={`relative w-10 h-10 rounded-full ${
                color.border ? "border border-gray-300" : ""
              } ${
                selectedColors.includes(color.id)
                  ? "ring-2 ring-primary ring-offset-2"
                  : ""
              }`}
              style={{ backgroundColor: color.value }}
            >
              {selectedColors.includes(color.id) && (
                <span
                  className={`absolute inset-0 flex items-center justify-center ${
                    color.value === "#FFFFFF" ? "text-black" : "text-white"
                  }`}
                >
                  <FiCheck size={14} />
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection title="Sizes" id="sizes">
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <motion.button
              key={size}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSizeToggle(size)}
              className={`py-2 rounded-lg text-center transition-colors ${
                selectedSizes.includes(size)
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands" id="brands">
        <div className="space-y-2">
          {brands.map((brand) => (
            <motion.label
              key={brand.id}
              className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => handleBrandToggle(brand.id)}
                  className="form-checkbox text-primary rounded"
                />
                <span className="text-gray-700">{brand.name}</span>
              </div>
              <span className="text-sm text-gray-500">({brand.count})</span>
            </motion.label>
          ))}
        </div>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection title="Rating" id="rating">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <motion.button
              key={stars}
              whileHover={{ x: 4 }}
              onClick={() => setRating(stars)}
              className={`flex items-center w-full p-2 rounded-lg ${
                rating === stars
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < stars ? "text-yellow-400" : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm">& up</span>
              </div>
            </motion.button>
          ))}
        </div>
      </FilterSection>

      {/* Active Filters */}
      {(selectedCategories.length > 0 ||
        selectedBrands.length > 0 ||
        selectedColors.length > 0 ||
        selectedSizes.length > 0 ||
        rating) && (
        <div className="mt-6 pt-6 border-t">
          <h3 className="text-sm font-medium text-gray-500 mb-3">
            Active Filters
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((categoryId) => {
              const category = categories.find((c) => c.id === categoryId);
              return (
                <motion.button
                  key={categoryId}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1"
                  onClick={() => handleCategoryToggle(categoryId)}
                >
                  {category.name}
                  <FiX size={14} />
                </motion.button>
              );
            })}
            {/* Add similar buttons for other active filters */}
          </div>
        </div>
      )}

      {/* Apply Filters Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() =>
          onApplyFilters({
            categories: selectedCategories,
            brands: selectedBrands,
            colors: selectedColors,
            sizes: selectedSizes,
            priceRange,
            rating,
          })
        }
        className="mt-6 w-full bg-primary text-white py-3 rounded-xl hover:bg-primary/90 transition-colors"
      >
        Apply Filters
      </motion.button>
    </div>
  );
};

export default FilterProduct;
