"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const SocialMediaLinks = () => {
  return (
    <section className="bg-[#f1f1f1] py-16 px-6"> {/* Light gray background for contrast */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e2f] text-center mb-6">
        Connect With Us
      </h2>

      <p className="text-lg text-gray-700 text-center mb-12">
        Stay connected through our social media channels. Follow us to stay up-to-date with the latest products, offers, and updates.
      </p>

      <div className="flex justify-center space-x-6">
        <Link href="#" className="text-[#1e1e2f] hover:text-[#ff6f00] transition duration-300">
          <Facebook className="w-8 h-8" />
        </Link>
        <Link href="#" className="text-[#1e1e2f] hover:text-[#ff6f00] transition duration-300">
          <Twitter className="w-8 h-8" />
        </Link>
        <Link href="#" className="text-[#1e1e2f] hover:text-[#ff6f00] transition duration-300">
          <Instagram className="w-8 h-8" />
        </Link>
        <Link href="#" className="text-[#1e1e2f] hover:text-[#ff6f00] transition duration-300">
          <Linkedin className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
