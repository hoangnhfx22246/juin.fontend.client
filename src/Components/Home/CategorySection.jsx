import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiBox,
  FiMonitor,
  FiWind,
  FiCoffee,
  FiWifi,
  FiWatch,
  FiShoppingCart,
  FiArrowRight,
} from "react-icons/fi";

const CategorySection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Kitchen Appliances",
      icon: FiBox, // Use Font Awesome icon
      image:
        "https://www.tomhowley.co.uk/wp-content/uploads/TH076_Foxton_20_feature.jpg",
      items: ["Refrigerators", "Dishwashers", "Microwaves", "Ovens"],
      color: "from-blue-500 to-blue-700",
      count: "250+ Products",
    },
    {
      id: 2,
      name: "Entertainment",
      icon: FiMonitor,
      image:
        "https://aws-obg-image-lb-2.tcl.com/content/dam/brandsite/global/images-for-blog/what-is-a-smart-tv-PC.png",
      items: ["Smart TVs", "Home Theater", "Gaming", "Speakers"],
      color: "from-purple-500 to-purple-700",
      count: "180+ Products",
    },
    {
      id: 3,
      name: "Climate Control",
      icon: FiWind,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-loc-khong-khi-xiaomi-air-purifier-4-compact-1.png",
      items: ["Air Conditioners", "Heaters", "Air Purifiers", "Fans"],
      color: "from-green-500 to-green-700",
      count: "120+ Products",
    },
    {
      id: 4,
      name: "Small Appliances",
      icon: FiCoffee,
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2024/08/23201644/10-must-have-appliances-for-your-kitchen-f-686x400.png",
      items: ["Coffee Makers", "Blenders", "Toasters", "Food Processors"],
      color: "from-orange-500 to-orange-700",
      count: "300+ Products",
    },
    {
      id: 5,
      name: "Smart Devices",
      icon: FiWifi,
      image:
        "https://i.pcmag.com/imagery/roundup-groups/051b3JvCaz7TUe9VW12gb2m-6.fit_lim.size_1050x.jpg",
      items: [
        "Smart Speakers",
        "Security Cameras",
        "Smart Lighting",
        "Thermostats",
      ],
      color: "from-red-500 to-red-700",
      count: "150+ Products",
    },
    {
      id: 6,
      name: "Wearable Tech",
      icon: FiWatch,
      image:
        "https://ciowomenmagazine.com/wp-content/uploads/2024/01/1.3-Personalized-and-Adaptive-User-Interfaces.jpg",
      items: [
        "Smart Watches",
        "Fitness Trackers",
        "Health Monitors",
        "Accessories",
      ],
      color: "from-teal-500 to-teal-700",
      count: "90+ Products",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-green-600 font-semibold text-sm uppercase tracking-wide"
          >
            Explore Our Categories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Shop by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our wide range of home appliances and smart devices
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}
                ></div>
              </div>

              {/* Content */}
              <Link
                to={`/category/${category.id}`}
                className="relative block p-8"
              >
                <div className="h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                    <h3 className="ml-3 text-xl font-bold text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          hoveredCategory === category.id
                            ? { opacity: 1, x: 0 }
                            : {}
                        }
                        transition={{ delay: index * 0.1 }}
                        className="text-white text-sm flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Product Count and CTA */}
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-white text-sm">{category.count}</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-white"
                    >
                      <span className="text-sm mr-2">Shop Now</span>
                      <FiArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Categories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/categories"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-blue-700 transition-colors duration-300"
          >
            View All Categories
            <FiShoppingCart className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
