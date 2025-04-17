import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "./Pagination";
import ProductHorizontal from "./Product/ProductHorizontal";
import ProductVertical from "./Product/ProductVertical";

const ProductsList = ({ viewModeList }) => {
  // Sample products data (replace with API call)
  const products = [
    {
      id: 1,
      name: "Smart 4K OLED TV",
      description: "Ultra HD Smart TV with AI Processing",
      price: 1299.99,
      image:
        "https://khomaylanhgiagoc.com/wp-content/uploads/ti-vi-sam-sung.gif",
      brand: "TechVision",
      rating: 4.8,
      reviews: 156,
      discount: 15,
      originalPrice: 1499.99,
      category: "Electronics",
      stock: "In Stock",
      shipping: "Free Shipping",
    },
    {
      id: 2,
      name: "Premium Coffee Maker",
      description: "Professional Grade Coffee Machine",
      price: 299.99,
      image:
        "https://atomismart.com/wp-content/uploads/2020/12/wifi_coffee_maker_product.jpg",
      brand: "BrewMaster",
      rating: 4.6,
      reviews: 89,
      discount: 20,
      originalPrice: 379.99,
      category: "Kitchen",
      stock: "Only 3 Left",
      shipping: "Free Shipping",
    },
    {
      id: 3,
      name: "Smart Refrigerator",
      description: "AI-Powered Cooling System",
      price: 2499.99,
      image:
        "https://www.jbhifi.com.au/cdn/shop/files/676259-Product-0-I-638490831603484589_211c14e0-2815-4f2f-b385-56469c5a37df.jpg?v=1714434859",
      brand: "CoolTech",
      rating: 4.9,
      reviews: 203,
      discount: 10,
      originalPrice: 2799.99,
      category: "Appliances",
      stock: "In Stock",
      shipping: "Free Installation",
    },
    {
      id: 4,
      name: "Robot Vacuum Cleaner",
      description: "Smart Navigation with Mapping",
      price: 599.99,
      image:
        "https://iotecheg.com/wp-content/uploads/2022/09/smart-vacuum-3.png",
      brand: "CleanTech",
      rating: 4.7,
      reviews: 178,
      discount: 25,
      originalPrice: 799.99,
      stock: "In Stock",
      shipping: "Free Shipping",
    },
    {
      id: 5,
      name: "Smart Dishwasher",
      description: "Energy Efficient with WiFi",
      price: 849.99,
      image:
        "https://brain-images-ssl.cdn.dixons.com/8/5/10183358/l_10183358_003.jpg",
      brand: "CleanPro",
      rating: 4.5,
      reviews: 134,
      discount: 15,
      originalPrice: 999.99,
      stock: "In Stock",
      shipping: "Free Installation",
    },
    {
      id: 6,
      name: "Air Purifier Pro",
      description: "HEPA Filter with Air Quality Monitor",
      price: 399.99,
      image:
        "https://res.cloudinary.com/sharkninja-na/image/upload/c_fit,h_600,w_600/v1/SharkNinja-NA/AF181C_01?_a=BAKAACDX0",
      brand: "PureAir",
      rating: 4.8,
      reviews: 167,
      discount: 20,
      originalPrice: 499.99,
      stock: "In Stock",
      shipping: "Free Shipping",
    },
  ];

  return (
    <>
      {/* Products Grid/List */}
      <div
        className={
          viewModeList
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
        }
      >
        <AnimatePresence>
          {products.map((product) => (
            <div key={product.id}>
              {!viewModeList ? (
                <ProductHorizontal product={product} />
              ) : (
                <ProductVertical product={product} />
              )}
            </div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            No Products Found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters or search terms
          </p>
        </div>
      )}

      {/* Pagination */}
      <Pagination />
    </>
  );
};

export default ProductsList;
