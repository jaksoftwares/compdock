// import React from "react";

// export default function HomePage() {
//     return (
//         <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
//             <h1 className="text-5xl font-bold text-gray-900">Welcome to Compdock</h1>
//             <p className="text-lg text-gray-700 mt-4 text-center">
//                 Your #1 Marketplace for computer accessories. Find quality gadgets, accessories, and essentials at the best prices.
//             </p>

//             <div className="mt-6 flex space-x-4">
//                 <a href="/shop" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
//                     Shop Now
//                 </a>
//                 <a href="/contact" className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition">
//                     Contact Us
//                 </a>
//             </div>
//         </main>
//     );
// }


// "use client";

// import Link from "next/link";
// import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

// const Homepage = () => {
//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative bg-[#ff6f00] text-white pt-20 pb-24">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//             Your One-Stop Marketplace for IT Accessories & Computers
//           </h1>
//           <p className="mt-4 text-lg text-gray-200">
//             Explore the best laptops, accessories, and computer components at unbeatable prices!
//           </p>
//           <Link href="/products">
//             <button className="mt-6 px-8 py-3 bg-[#ffcc00] text-[#1e1e2f] font-semibold text-lg rounded-full hover:bg-[#ff8c33]">
//               Start Shopping
//             </button>
//           </Link>
//         </div>
//         <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black" />
//       </section>

//       {/* Featured Categories Section */}
//       <section className="container mx-auto py-16 text-center">
//         <h2 className="text-3xl font-semibold text-[#1e1e2f]">Shop by Categories</h2>
//         <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition">
//             <h3 className="text-xl font-semibold text-[#ff6f00]">Laptops</h3>
//             <p className="text-gray-600 mt-2">Explore top laptops from trusted brands.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition">
//             <h3 className="text-xl font-semibold text-[#ff6f00]">Accessories</h3>
//             <p className="text-gray-600 mt-2">Find everything from chargers to headphones.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition">
//             <h3 className="text-xl font-semibold text-[#ff6f00]">Components</h3>
//             <p className="text-gray-600 mt-2">Upgrade your PC with the best components.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition">
//             <h3 className="text-xl font-semibold text-[#ff6f00]">Peripherals</h3>
//             <p className="text-gray-600 mt-2">Get the best peripherals for your setup.</p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products Section */}
//       <section className="container mx-auto py-16">
//         <h2 className="text-3xl font-semibold text-center text-[#1e1e2f]">Featured Products</h2>
//         <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
//           {/* Product Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition">
//             <img src="/images/product1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-lg" />
//             <h3 className="mt-4 text-xl font-semibold text-[#1e1e2f]">Laptop Model 1</h3>
//             <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet.</p>
//             <p className="mt-2 text-lg font-bold text-[#ff6f00]">$999.99</p>
//             <Link href="/products/1" className="mt-4 inline-block text-[#ff6f00]">View Details</Link>
//           </div>
//           {/* More products here (repeat product card component) */}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="bg-[#1e1e2f] text-white py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-semibold">What Our Customers Are Saying</h2>
//           <div className="mt-8 space-y-6">
//             <div className="p-6 bg-[#ff6f00] text-black rounded-lg shadow-md">
//               <p>Compdock has made shopping for tech products so easy! I found the perfect laptop at an amazing price.</p>
//               <p className="mt-2 text-gray-600">- Jane Doe</p>
//             </div>
//             <div className="p-6 bg-[#ff6f00] text-black rounded-lg shadow-md">
//               <p>The product variety is incredible, and delivery was fast! I’ll definitely be shopping here again.</p>
//               <p className="mt-2 text-gray-600">- John Smith</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-[#1e1e2f] text-white py-10">
//         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Brand & About */}
//           <div>
//             <h2 className="text-xl font-bold text-[#ff6f00]">Compdock</h2>
//             <p className="mt-3 text-gray-400">
//               Your one-stop marketplace for all computer accessories and components. Quality & convenience at your fingertips.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#ffcc00]">Quick Links</h3>
//             <ul className="mt-3 space-y-2">
//               <li><Link href="/products" className="hover:text-[#ff6f00]">Shop</Link></li>
//               <li><Link href="/about" className="hover:text-[#ff6f00]">About Us</Link></li>
//               <li><Link href="/contact" className="hover:text-[#ff6f00]">Contact</Link></li>
//               <li><Link href="/terms" className="hover:text-[#ff6f00]">Terms & Conditions</Link></li>
//               <li><Link href="/privacy" className="hover:text-[#ff6f00]">Privacy Policy</Link></li>
//             </ul>
//           </div>

//           {/* Newsletter & Socials */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#ffcc00]">Stay Connected</h3>
//             <p className="mt-3 text-gray-400">Subscribe to get the latest deals & updates.</p>
//             <div className="mt-3 flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-3 py-2 rounded-l-lg text-black outline-none w-full"
//               />
//               <button className="bg-[#ff6f00] px-4 py-2 rounded-r-lg hover:bg-[#ff8c33]">
//                 <Mail className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Social Media Links */}
//             <div className="mt-4 flex space-x-4">
//               <Link href="#" className="hover:text-[#ff6f00]"><Facebook className="w-6 h-6" /></Link>
//               <Link href="#" className="hover:text-[#ff6f00]"><Twitter className="w-6 h-6" /></Link>
//               <Link href="#" className="hover:text-[#ff6f00]"><Instagram className="w-6 h-6" /></Link>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-10 text-center text-gray-400 text-sm">
//           &copy; {new Date().getFullYear()} Compdock. All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Homepage;


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

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

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
