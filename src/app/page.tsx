

"use client";

import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import CustomerTestimonials from "@/components/home/CustomerTestimonials";
import NewArrivals from "@/components/home/NewArrivals";
import BrandsPartners from "@/components/home/BrandsPartners";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SocialMediaLinks from "@/components/home/SocialMediaLinks";
import CategorySidebar from "@/components/category/CategorySidebar";


const Homepage = () => {
  return (
    <div>
      
   
      {/* Hero Section */}
      <Hero />

         {/* Category Sidebar */}
      <CategorySidebar />

      {/* Featured Categories Section */}
      <FeaturedCategories />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Promotional Banner Section */}
      <PromotionalBanner />

      {/* Customer Testimonials Section */}
      <CustomerTestimonials />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Brands / Partners Section */}
      <BrandsPartners />

      {/* Newsletter Signup Section */}
      <NewsletterSignup />

      {/* Social Media Links Section */}
      <SocialMediaLinks />
    </div>
  );
};

export default Homepage;
