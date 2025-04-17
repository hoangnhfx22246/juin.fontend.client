import React, { useState, useEffect, useRef } from "react";
import {
  FiArrowRight,
  FiShoppingCart,
  FiPercent,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const dragRef = useRef(null);
  const animationRef = useRef(null);

  const slides = [
    {
      title: "Smart Kitchen Appliances",
      subtitle: "Transform Your Kitchen Experience",
      description:
        "Up to 40% off on premium kitchen appliances. Free delivery and installation.",
      image: "https://cdn3630.cdn-template-4s.com/media/banner/slider1.webp",
      cta: "Shop Kitchen",
      bgColor: "from-green-600 to-green-800",
    },
    {
      title: "Premium Home Entertainment",
      subtitle: "Elevate Your Entertainment",
      description: "Latest Smart TVs and Sound Systems with exclusive deals.",
      image: "https://cdn3630.cdn-template-4s.com/media/banner/slider1.webp",
      cta: "Discover More",
      bgColor: "from-purple-600 to-purple-800",
    },
    {
      title: "Smart Home Cooling",
      subtitle: "Summer Ready Solutions",
      description:
        "Energy-efficient ACs and cooling appliances with smart features.",
      image: "https://cdn3630.cdn-template-4s.com/media/banner/slider1.webp",
      cta: "Stay Cool",
      bgColor: "from-green-600 to-green-800",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch and Mouse Event Handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.type === "mousedown" ? e.pageX : e.touches[0].pageX);
    cancelAnimationFrame(animationRef.current);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentPosition =
      e.type === "mousemove" ? e.pageX : e.touches[0].pageX;
    const diff = currentPosition - startPos;

    if (Math.abs(diff) > 100) {
      // Threshold for slide change
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const slider = dragRef.current;
    if (!slider) return;

    slider.addEventListener("touchstart", handleDragStart);
    slider.addEventListener("touchmove", handleDragMove);
    slider.addEventListener("touchend", handleDragEnd);
    slider.addEventListener("mousedown", handleDragStart);
    slider.addEventListener("mousemove", handleDragMove);
    slider.addEventListener("mouseup", handleDragEnd);
    slider.addEventListener("mouseleave", handleDragEnd);

    return () => {
      slider.removeEventListener("touchstart", handleDragStart);
      slider.removeEventListener("touchmove", handleDragMove);
      slider.removeEventListener("touchend", handleDragEnd);
      slider.removeEventListener("mousedown", handleDragStart);
      slider.removeEventListener("mousemove", handleDragMove);
      slider.removeEventListener("mouseup", handleDragEnd);
      slider.removeEventListener("mouseleave", handleDragEnd);
    };
  }, [isDragging]);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isDragging]);

  return (
    <div className="relative h-[600px] overflow-hidden" ref={dragRef}>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 text-gray-800 hover:text-gray-900"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 text-gray-800 hover:text-gray-900"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
            transition: isDragging ? "none" : "transform 0.5s ease-out",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r bg-opacity-80 z-10">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute transition-all ${
                currentSlide === index
                  ? "animate-slideIn"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <span className="text-green-400 font-semibold text-lg">
                {slide.subtitle}
              </span>
              <h1 className="mt-2 text-5xl font-bold text-white max-w-2xl leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-xl text-gray-200 max-w-xl">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  {slide.cta}
                  <FiArrowRight />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2">
                  View Deals
                  <FiPercent />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white w-8"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Sale Banner */}
      <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-full animate-bounce">
        <div className="flex items-center gap-2">
          <FiPercent className="w-5 h-5" />
          <span className="font-bold">Summer Sale - Up to 40% Off</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
