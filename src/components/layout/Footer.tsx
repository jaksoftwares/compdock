import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e2f] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & About */}
        <div>
          <h2 className="text-xl font-bold text-[#ff6f00]">Compdock</h2>
          <p className="mt-3 text-gray-400">
            Your one-stop marketplace for all computer accessories and components. Quality & convenience at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffcc00]">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/products" className="hover:text-[#ff6f00]">Shop</Link></li>
            <li><Link href="/about" className="hover:text-[#ff6f00]">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#ff6f00]">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-[#ff6f00]">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-[#ff6f00]">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-[#ffcc00]">Stay Connected</h3>
          <p className="mt-3 text-gray-400">Subscribe to get the latest deals & updates.</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-lg text-black outline-none w-full"
            />
            <button className="bg-[#ff6f00] px-4 py-2 rounded-r-lg hover:bg-[#ff8c33]">
              <Mail className="w-5 h-5" />
            </button>
          </div>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="hover:text-[#ff6f00]"><Facebook className="w-6 h-6" /></Link>
            <Link href="#" className="hover:text-[#ff6f00]"><Twitter className="w-6 h-6" /></Link>
            <Link href="#" className="hover:text-[#ff6f00]"><Instagram className="w-6 h-6" /></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Compdock. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
