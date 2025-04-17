import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiArrowRight,
  FiCheck,
  FiTruck,
  FiShield,
} from "react-icons/fi";
const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-xl">
              Discover our handpicked selection of premium home appliances
              designed to enhance your lifestyle
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center text-green-600 font-semibold hover:text-green-700"
          >
            View All Products
            <FiArrowRight className="ml-2" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="bg-white rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.discount}% OFF
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
                  >
                    <FiHeart className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-600">
                    {product.brand}
                  </span>
                  <div className="flex items-center">
                    <FiStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FiCheck className="w-4 h-4 text-green-500 mr-2" />
                    {product.stock}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FiTruck className="w-4 h-4 text-green-500 mr-2" />
                    {product.shipping}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FiShield className="w-4 h-4 text-purple-500 mr-2" />2 Year
                    Warranty
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center text-green-600 font-semibold">
            View All Products
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
