import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiShield,
  FiTruck,
  FiClock,
  FiGift,
} from "react-icons/fi";

const PromotionalBanner = () => {
  return (
    <section className="py-16">
      {/* Main Promotional Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute transform rotate-45 -left-1/4 -top-1/4 w-1/2 h-1/2 bg-white rounded-full"></div>
            <div className="absolute transform -rotate-45 -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-white rounded-full"></div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            {/* Content */}
            <div className="text-white">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                Special Offer
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Summer Sale is Live!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/90 text-lg mb-8"
              >
                Get up to 50% off on premium home appliances. Limited time offer
                with free installation and extended warranty.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                  Shop Now <FiArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  Learn More <FiArrowRight />
                </motion.button>
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <img
                src="https://media.istockphoto.com/id/1446609885/photo/3d-illustration.jpg?s=612x612&w=0&k=20&c=CyPRMZ7rN8jbbKWkdNR1Gn486jlwfB8xHgAJtuVZp1I="
                alt="Home Appliances"
                className="w-full h-full object-contain"
              />
              {/* Floating Discount Badge */}
              <div className="absolute top-4 right-4 bg-red-500 text-white w-20 h-20 rounded-full flex items-center justify-center flex-col transform rotate-12">
                <span className="text-2xl font-bold">50%</span>
                <span className="text-sm">OFF</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            {
              icon: FiTruck,
              title: "Free Delivery",
              description: "On orders over $500",
              color: "bg-blue-50 text-blue-600",
            },
            {
              icon: FiShield,
              title: "2 Year Warranty",
              description: "Extended coverage",
              color: "bg-purple-50 text-purple-600",
            },
            {
              icon: FiClock,
              title: "24/7 Support",
              description: "Expert assistance",
              color: "bg-green-50 text-green-600",
            },
            {
              icon: FiGift,
              title: "Special Gifts",
              description: "On selected items",
              color: "bg-orange-50 text-orange-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${feature.color} rounded-2xl p-6 text-center`}
            >
              <feature.icon className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Promotional Strips */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {/* Left Strip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-white flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">New Customers</h3>
              <p className="text-white/90">
                Get 10% off on your first purchase
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-6 py-2 rounded-xl font-semibold hover:bg-green-50 transition-colors"
            >
              Claim Now
            </motion.button>
          </motion.div>

          {/* Right Strip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Refer & Earn</h3>
              <p className="text-white/90">Get $50 for every referral</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-6 py-2 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
