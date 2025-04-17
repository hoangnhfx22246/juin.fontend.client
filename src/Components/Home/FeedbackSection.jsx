import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiStar,
  FiMessageSquare,
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiThumbsUp,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar:
        "https://heucollege.edu.vn/upload/2025/02/hinh-avatar-capybara-4.webp",
      rating: 5,
      comment:
        "Absolutely love my new smart refrigerator! The features are incredible and the customer service was outstanding. Installation was quick and professional.",
      product: "Smart Refrigerator XL",
      date: "2 days ago",
      verified: true,
      likes: 42,
    },
    {
      id: 2,
      name: "David Wilson",
      location: "London, UK",
      avatar:
        "https://www.danhgiaxe.edu.vn/upload/2025/01/nhung-capybara-meme-dang-yeu-khien-ban-cuoi-ngat-ngay-9.webp",
      rating: 5,
      comment:
        "The quality of their products is exceptional. My new washing machine is both energy-efficient and incredibly quiet. Highly recommended!",
      product: "EcoWash Pro",
      date: "1 week ago",
      verified: true,
      likes: 38,
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Sydney, AU",
      avatar:
        "https://i.pinimg.com/736x/71/24/29/7124296cc31f716e7c44bfe21f3a25f5.jpg",
      rating: 4,
      comment:
        "Great experience with their air conditioning system. The smart features make it so convenient to control from my phone.",
      product: "Smart AC Plus",
      date: "3 days ago",
      verified: true,
      likes: 27,
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        paginate(1);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-blue-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <FiMessageSquare className="mr-2" />
            Customer Reviews
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Customers Are Saying
          </motion.h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: FiStar,
              value: "4.8",
              label: "Average Rating",
              color: "text-yellow-500",
            },
            {
              icon: FiUsers,
              value: "15K+",
              label: "Happy Customers",
              color: "text-blue-500",
            },
            {
              icon: FiCheckCircle,
              value: "98%",
              label: "Satisfaction Rate",
              color: "text-green-500",
            },
            {
              icon: FiAward,
              value: "150+",
              label: "Awards Won",
              color: "text-purple-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`${stat.color} mb-4 inline-flex p-4 rounded-full bg-gray-50`}
              >
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div className="relative h-[400px] overflow-hidden">
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            onClick={() => paginate(-1)}
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            onClick={() => paginate(1)}
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full flex items-center justify-center px-4"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl max-w-3xl w-full">
                <div className="flex items-start mb-6">
                  <img
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold text-xl text-gray-900">
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {reviews[currentIndex].location}
                    </p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < reviews[currentIndex].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  {reviews[currentIndex].verified && (
                    <span className="inline-flex items-center bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      <FiCheckCircle className="w-4 h-4 mr-1" />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-gray-700 text-lg mb-6">
                  "{reviews[currentIndex].comment}"
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium">
                    {reviews[currentIndex].product}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">
                      {reviews[currentIndex].date}
                    </span>
                    <button className="inline-flex items-center text-gray-500 hover:text-blue-600">
                      <FiThumbsUp className="w-4 h-4 mr-1" />
                      {reviews[currentIndex].likes}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-green-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
          >
            <FiMessageSquare className="w-5 h-5" />
            Write a Review
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackSection;
