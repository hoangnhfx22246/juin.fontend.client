import React from "react";
import { motion } from "framer-motion";
import {
  FiTruck,
  FiTool,
  FiClock,
  FiShield,
  FiHeadphones,
  FiRefreshCw,
  FiCheckCircle,
  FiDollarSign,
} from "react-icons/fi";

const ServiceSection = () => {
  const services = [
    {
      icon: FiTruck,
      title: "Free Delivery & Installation",
      description:
        "Free shipping on orders over $500. Professional installation included.",
      features: [
        "Same-day delivery available",
        "Expert installation team",
        "Packaging removal",
      ],
      color: "blue",
    },
    {
      icon: FiTool,
      title: "Repair & Maintenance",
      description:
        "Professional repair services for all home appliances with warranty.",
      features: [
        "24/7 emergency repairs",
        "Genuine spare parts",
        "Preventive maintenance",
      ],
      color: "green",
    },
    {
      icon: FiShield,
      title: "Extended Warranty",
      description: "Comprehensive warranty coverage for your peace of mind.",
      features: [
        "Up to 5 years coverage",
        "Parts & labor included",
        "No hidden costs",
      ],
      color: "purple",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock support for all your queries and concerns.",
      features: [
        "Live chat support",
        "Expert consultation",
        "Quick response time",
      ],
      color: "orange",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getColorClasses = (color) => {
    const classes = {
      blue: "bg-blue-50 border-blue-200 hover:border-blue-300",
      green: "bg-green-50 border-green-200 hover:border-green-300",
      purple: "bg-purple-50 border-purple-200 hover:border-purple-300",
      orange: "bg-orange-50 border-orange-200 hover:border-orange-300",
    };
    return classes[color];
  };

  const getIconColorClasses = (color) => {
    const classes = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      orange: "text-orange-600 bg-orange-100",
    };
    return classes[color];
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We provide comprehensive services to ensure your home appliances
            work perfectly
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative rounded-xl border-2 p-6 ${getColorClasses(
                service.color
              )} transition-all duration-300`}
            >
              {/* Service Icon */}
              <div
                className={`w-12 h-12 rounded-full ${getIconColorClasses(
                  service.color
                )} flex items-center justify-center mb-4`}
              >
                <service.icon className="w-6 h-6" />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FiCheckCircle
                      className={`w-4 h-4 mr-2 ${getIconColorClasses(
                        service.color
                      )}`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 text-sm font-medium flex items-center ${getIconColorClasses(
                  service.color
                )}`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Need Emergency Repair?
          </h3>
          <p className="text-gray-600 mb-6">
            Our expert technicians are available 24/7 for emergency repairs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Contact Service Center
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
