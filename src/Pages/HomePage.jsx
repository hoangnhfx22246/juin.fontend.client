import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import PromotionalBanner from "../Components/Home/PromotionalBanner";
import ServiceSection from "../Components/Home/ServiceSection";
import CategorySection from "../Components/Home/CategorySection";
import FlashSale from "../Components/Home/FlashSale";
import FeedbackSection from "../Components/Home/FeedbackSection";
import NewsletterSection from "../Components/Home/NewsletterSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <FlashSale />
      <PromotionalBanner />
      <FeaturedProducts />
      <FeedbackSection />
      <ServiceSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
