"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
}

interface ProductCarouselSectionProps {
  title: string;
  products: Product[];
  seeAllUrl?: string;
}

const ProductCarouselSection: React.FC<ProductCarouselSectionProps> = ({
  title,
  products,
  seeAllUrl,
}) => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-white py-6 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {seeAllUrl && (
          <Link href={seeAllUrl} className="text-blue-600 hover:underline text-sm">
            See All
          </Link>
        )}
      </div>

      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="border rounded-md shadow-sm hover:shadow-lg transition bg-white relative">
              <div className="relative w-full h-36">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-contain rounded-t-md"
                />
              </div>

              {product.discountPercent && product.discountPercent > 0 && (
                <span className="absolute top-2 right-2 bg-orange-400 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                  -{product.discountPercent}%
                </span>
              )}

              <div className="p-2">
                <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                <div className="mt-1">
                  <span className="text-black font-bold">KSh {product.price.toLocaleString()}</span>
                  {product.oldPrice && (
                    <span className="line-through text-xs text-gray-500 ml-1">
                      KSh {product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarouselSection;
