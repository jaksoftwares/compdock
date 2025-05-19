"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Jane M.",
    role: "Software Developer",
    feedback:
      "Compdock made it so easy to find the right monitor for my coding setup. The quality and delivery were excellent!",
  },
  {
    name: "Brian K.",
    role: "Gamer & Streamer",
    feedback:
      "I got my gaming rig from Compdock at a great price. Top-tier service and fast shipping!",
  },
  {
    name: "Esther W.",
    role: "Small Business Owner",
    feedback:
      "Finding affordable and reliable laptops for my team was seamless with Compdock. Will definitely shop again.",
  },
];

const CustomerTestimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-white py-16 text-center px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e2f] mb-10">
        What Our Customers Say
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md relative">
        <div className="flex justify-center mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-500 fill-yellow-400"
              />
            ))}
        </div>
        <p className="text-gray-700 text-lg italic">“{testimonial.feedback}”</p>
        <div className="mt-6 font-semibold text-xl text-[#1e1e2f]">
          {testimonial.name}
        </div>
        <div className="text-gray-500 text-sm">{testimonial.role}</div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
