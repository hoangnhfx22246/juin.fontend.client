import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiZap,
} from "react-icons/fi";
const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 30,
    seconds: 0,
  });

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashSaleProducts = [
    {
      id: 1,
      name: 'Smart 4K TV 55"',
      brand: "TechVision",
      originalPrice: 999.99,
      salePrice: 699.99,
      image:
        "https://khomaylanhgiagoc.com/wp-content/uploads/ti-vi-sam-sung.gif",
      rating: 4.5,
      reviews: 128,
      sold: 45,
      stock: 10,
      discount: 30,
    },
    {
      id: 2,
      name: "Robot Vacuum Cleaner",
      brand: "CleanTech",
      originalPrice: 599.99,
      salePrice: 399.99,
      image:
        "https://iotecheg.com/wp-content/uploads/2022/09/smart-vacuum-3.png",
      rating: 4.8,
      reviews: 95,
      sold: 38,
      stock: 15,
      discount: 33,
    },
    {
      id: 3,
      name: "Air Fryer Pro",
      brand: "KitchenMaster",
      originalPrice: 299.99,
      salePrice: 179.99,
      image:
        "https://res.cloudinary.com/sharkninja-na/image/upload/c_fit,h_600,w_600/v1/SharkNinja-NA/AF181C_01?_a=BAKAACDX0",
      rating: 4.7,
      reviews: 156,
      sold: 62,
      stock: 8,
      discount: 40,
    },
    {
      id: 4,
      name: "Smart Coffee Maker",
      brand: "BrewTech",
      originalPrice: 249.99,
      salePrice: 149.99,
      image:
        "https://atomismart.com/wp-content/uploads/2020/12/wifi_coffee_maker_product.jpg",
      rating: 4.6,
      reviews: 89,
      sold: 30,
      stock: 20,
      discount: 40,
    },
    {
      id: 5,
      name: "Smart Microwave",
      brand: "TechKitchen",
      originalPrice: 399.99,
      salePrice: 299.99,
      image:
        "https://www.jbhifi.com.au/cdn/shop/files/676259-Product-0-I-638490831603484589_211c14e0-2815-4f2f-b385-56469c5a37df.jpg?v=1714434859",
      rating: 4.4,
      reviews: 75,
      sold: 25,
      stock: 15,
      discount: 25,
    },
    {
      id: 6,
      name: "Dishwasher Pro",
      brand: "CleanMaster",
      originalPrice: 799.99,
      salePrice: 599.99,
      image:
        "https://brain-images-ssl.cdn.dixons.com/8/5/10183358/l_10183358_003.jpg",
      rating: 4.9,
      reviews: 112,
      sold: 40,
      stock: 5,
      discount: 25,
    },
  ];

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    console.log("MouseDown");

    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    console.log("MouseMove");

    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    console.log("MouseUp");

    setIsDragging(false);
  };

  const handleScroll = () => {
    const container = sliderRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    const container = sliderRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -left-1/4 -top-1/4 w-1/2 h-1/2 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute transform -rotate-45 -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full mb-4"
          >
            <FiZap className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">Flash Sale</span>
            <FiZap className="w-5 h-5 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Deals of the Day
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
              <FiClock className="w-6 h-6 text-red-600" />
              <span className="text-gray-600 font-medium">Ends in:</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-2xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-sm ml-1">hours</span>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-2xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-sm ml-1">mins</span>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-2xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-sm ml-1">secs</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll(-1)}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 -ml-6 group-hover:opacity-100 ${
              showLeftArrow ? "opacity-100" : "opacity-0"
            }`}
          >
            <FiChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={() => scroll(1)}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 -mr-6 group-hover:opacity-100 ${
              showRightArrow ? "opacity-100" : "opacity-0"
            }`}
          >
            <FiChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div
            ref={sliderRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="flex gap-6 transition-transform duration-300 cursor-grab active:cursor-grabbing">
              {flashSaleProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="w-[300px] bg-white rounded-xl shadow-lg overflow-hidden group flex-shrink-0 border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Save {product.discount}%
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200">
                      <FiHeart className="w-5 h-5 text-red-600" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="text-sm font-medium text-red-600 mb-2">
                      {product.brand}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-red-600">
                        ${product.salePrice}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">
                          Sold: {product.sold}
                        </span>
                        <span className="text-red-600 font-medium">
                          Only {product.stock} left!
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                          style={{
                            width: `${
                              (product.sold / (product.sold + product.stock)) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                    >
                      <FiShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg">
            View All Flash Sale Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FlashSale;
