import Image from "next/image";
import Link from "next/link";

const PromotionalBanner = () => {
  return (
    <section className="relative bg-[#1e1e2f] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-[#ffcc00]">
            Limited Time Offer!
          </h2>
          <p className="text-lg mb-6 text-gray-300">
            Get up to <span className="text-[#ff6f00] font-bold">30% OFF</span> on selected accessories & devices. Don’t miss out — shop now and upgrade your setup!
          </p>
          <Link
            href="/products"
            className="bg-[#ff6f00] hover:bg-[#ff8c33] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Banner Image */}
        <div className="flex-1">
          <Image
            src="/image10.jpg"
            alt="Promo Offer"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
