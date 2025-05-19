"use client";

import Image from "next/image";

const BrandsPartners = () => {
  const brands = [
    { id: 1, name: "Brand1", logo: "/images/brand1.png" },
    { id: 2, name: "Brand2", logo: "/images/brand2.png" },
    { id: 3, name: "Brand3", logo: "/images/brand3.png" },
    { id: 4, name: "Brand4", logo: "/images/brand4.png" },
    { id: 5, name: "Brand5", logo: "/images/brand5.png" },
    { id: 6, name: "Brand6", logo: "/images/brand6.png" },
  ];

  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e2f] text-center mb-12">
        Our Trusted Brands & Partners
      </h2>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {brands.map((brand) => (
          <div key={brand.id} className="flex justify-center items-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsPartners;
