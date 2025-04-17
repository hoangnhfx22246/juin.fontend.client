import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiStar,
  FiHeart,
  FiShoppingCart,
  FiCheck,
  FiTruck,
  FiShield,
} from "react-icons/fi";

const ProductVertical = ({ product }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      key={product.id}
      onHoverStart={() => setHoveredProduct(product.id)}
      onHoverEnd={() => setHoveredProduct(null)}
      className="bg-white rounded-2xl overflow-hidden flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
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

      <div className="p-6 flex flex-col grow justify-between">
        <div>
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
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        </div>
        <div>
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProductVertical;
