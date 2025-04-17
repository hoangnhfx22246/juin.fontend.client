import React from "react";
import { motion } from "framer-motion";

const ProductFilters = ({ onClose }) => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-6 mt-6 border-t">
      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <input type="range" className="w-full accent-primary" />
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands">
        <div className="space-y-2">
          {["Nike", "Adidas", "Puma", "Reebok"].map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox text-primary rounded"
              />
              <span className="text-gray-600">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Ratings */}
      <FilterSection title="Rating">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                className="form-radio text-primary"
              />
              <div className="flex text-yellow-400">
                {Array(rating)
                  .fill("★")
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>
              <span className="text-gray-600">& up</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Availability */}
      <FilterSection title="Availability">
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="form-checkbox text-primary rounded"
            />
            <span className="text-gray-600">In Stock</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="form-checkbox text-primary rounded"
            />
            <span className="text-gray-600">On Sale</span>
          </label>
        </div>
      </FilterSection>
    </div>
  );
};

const FilterSection = ({ title, children }) => (
  <div>
    <h3 className="font-medium text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

export default ProductFilters;
