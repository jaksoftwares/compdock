

"use client";

// import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import CustomerTestimonials from "@/components/home/CustomerTestimonials";
import NewArrivals from "@/components/home/NewArrivals";
import BrandsPartners from "@/components/home/BrandsPartners";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SocialMediaLinks from "@/components/home/SocialMediaLinks";
import CategorySidebar from "@/components/category/CategorySidebar";
import FlashSalesSection from "@/components/layout/FlashSalesSection";
import { flashSalesProducts } from "@/constants/flashSalesProducts";
import ProductCarouselSection from "@/components/layout/ProductsCarouselSection";
import Breadcrumb from "@/components/category/Breadcrumb";

const sponsoredProducts = [
  {
    id: "1",
    name: "Waterproof Sealing Strip",
    imageUrl: "/image5.jpg",
    price: 1426,
    oldPrice: 1502,
    discountPercent: 5,
  },
  {
    id: "2",
    name: "OVERALL/ COVERALL",
    imageUrl: "/image6.jpg",
    price: 1400,
    oldPrice: 1700,
    discountPercent: 18,
  },
  {
    id: "3",
    name: "Organic Beard Balm",
    imageUrl: "/image7.jpg",
    price: 1196,
    oldPrice: 1199,
    discountPercent: 1,
  },
  {
    id: "4",
    name: "Organic Beard Balm",
    imageUrl: "/image8.jpg",
    price: 1196,
    oldPrice: 1199,
    discountPercent: 1,
  },
  {
    id: "5",
    name: "Organic Beard Balm",
    imageUrl: "/image9.jpg",
    price: 1196,
    oldPrice: 1199,
    discountPercent: 1,
  },
  {
    id: "6",
    name: "Organic Beard Balm",
    imageUrl: "/image4.jpg",
    price: 1196,
    oldPrice: 1199,
    discountPercent: 1,
  },
  {
    id: "3",
    name: "Organic Beard Balm",
    imageUrl: "/image7.jpg",
    price: 1196,
    oldPrice: 1199,
    discountPercent: 1,
  },
  // Add more products...
];

import TopPicksSection from "@/components/layout/TopPicks";

const topPicksProducts = [
  {
    id: "1",
    name: "Vitron HTC4388FS - 43'' Smart TV",
    imageUrl: "/image5.jpg",
    price: 17499,
    oldPrice: 28599,
    discountPercent: 39,
  },
  {
    id: "2",
    name: "Starlink Mini Kit",
    imageUrl: "/image6.jpg",
    price: 24000,
    oldPrice: 30000,
    discountPercent: 20,
  },
  {
    id: "3",
    name: "VON 3-Burner Gas Cooker",
    imageUrl: "/image7.jpg",
    price: 18499,
    oldPrice: 35000,
    discountPercent: 47,
  },
  // Add more products...
];






const Homepage = () => {
  return (
    <div>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero Section */}
      {/* <Hero /> */}

         {/* Category Sidebar */}
      <CategorySidebar />

      {/* Featured Categories Section */}
      <FeaturedCategories />

      {/* Featured Products Section */}

      <FlashSalesSection
        title="Flash Sales"
        products={flashSalesProducts}
        endTime={new Date(new Date().getTime() + 2 * 60 * 60 * 1000)} // 2 hrs from now
      />
      <ProductCarouselSection
        title="Sponsored Products"
        products={sponsoredProducts}
        seeAllUrl="/sponsored"
      />
       <ProductCarouselSection
        title="Top Selling Computers"
        products={sponsoredProducts}
        seeAllUrl="/top-selling-computers"
      />
      <TopPicksSection
        title="Compdock Anniversary | Top Picks For You"
        products={topPicksProducts}
        seeAllUrl="/top-picks"
      />
        <ProductCarouselSection
        title="Your Recent Finds"
        products={sponsoredProducts}
        seeAllUrl="/recent-finds"
      />
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
