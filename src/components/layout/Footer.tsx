import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e2f] text-white pt-10 pb-6 border-t border-gray-700">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#ff6f00]">Compdock</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your one-stop SaaS marketplace for top-quality computer accessories, laptops, and tech essentials.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffcc00] mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products" className="hover:text-[#ff6f00]">All Products</Link></li>
            <li><Link href="/about" className="hover:text-[#ff6f00]">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#ff6f00]">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffcc00] mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terms" className="hover:text-[#ff6f00]">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-[#ff6f00]">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffcc00] mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe for updates on new arrivals, offers, and tech trends.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full rounded-l-md text-black placeholder-gray-500 text-sm outline-none"
              aria-label="Email"
            />
            <button
              type="submit"
              className="bg-[#ff6f00] px-4 py-2 rounded-r-md hover:bg-[#ff8c33]"
              aria-label="Subscribe"
            >
              <Mail className="w-5 h-5 text-white" />
            </button>
          </form>
          <div className="mt-4 flex items-center space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-[#ff6f00]">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-[#ff6f00]">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-[#ff6f00]">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Compdock. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
