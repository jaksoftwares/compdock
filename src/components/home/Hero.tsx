"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button"; // Create a reusable button component

const Hero = () => {
  return (
    <section className="relative bg-[#1e1e2f] text-white h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/hero-bg2.jpg")' }}></div>

      {/* Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 text-[#ff6f00]">
          Shop the Best Computer Accessories & Laptops
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-300">
          Explore a wide range of premium accessories and computers. Delivered to your door.
        </p>

        {/* Call to Action Button */}
        <Link href="/products">
          <Button className="bg-[#ff6f00] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#ff8c33] transition-all">
            Browse Products
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
