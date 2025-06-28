"use client";

import React, { useEffect, useState } from "react";
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
  oldPrice: number;
  discountPercent: number;
  stockLeft: number;
  stockTotal: number;
}

interface FlashSalesSectionProps {
  title: string;
  products: Product[];
  endTime: Date;
}

const FlashSalesSection: React.FC<FlashSalesSectionProps> = ({
  title,
  products,
  endTime,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        setTimeLeft("00:00:00");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")} : ${minutes
          .toString()
          .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true, // Show arrows
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white py-6 px-4 group relative">
      <div className="bg-red-50 rounded-t-md px-4 py-2 flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-red-600 flex items-center">
          ⚡ {title} | Live Now
        </h2>
        <div className="text-sm text-gray-800 font-semibold">
          Time Left: <span className="text-red-600">{timeLeft}</span>
        </div>
        <Link href="/flash-sales" className="text-blue-600 hover:underline text-sm">
          See All
        </Link>
      </div>

      <div className="relative">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="p-2">
              <div className="border rounded-md shadow-sm hover:shadow-lg transition bg-white relative">
                <div className="relative w-full h-40">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain rounded-t-md"
                  />
                </div>
                {product.discountPercent > 0 && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                    -{product.discountPercent}%
                  </span>
                )}
                <div className="p-2">
                  <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                  <div className="mt-1">
                    <span className="text-red-600 font-bold">KSh {product.price}</span>
                    <span className="line-through text-xs text-gray-500 ml-1">
                      KSh {product.oldPrice}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {product.stockLeft} items left
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                    <div
                      className="bg-orange-500 h-1 rounded-full"
                      style={{
                        width: `${(product.stockLeft / product.stockTotal) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Show extra button on hover
        <div className="hidden group-hover:flex absolute top-1/2 right-2 transform -translate-y-1/2">
          <button
            onClick={() => {
              const slider = document.querySelector(".slick-slider") as any;
              slider?.slickNext();
            }}
            className="bg-red-600 text-white px-3 py-1 rounded shadow hover:bg-red-700 transition text-xs"
          >
            Show More
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FlashSalesSection;
