"use client";

import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate an API call or email subscription logic
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-[#1e1e2f] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        Stay Updated With Our Latest Offers
      </h2>

      <p className="text-lg text-gray-400 text-center mb-12">
        Subscribe to our newsletter and get the latest deals, product launches, and promotions delivered straight to your inbox.
      </p>

      <div className="max-w-md mx-auto">
        {isSubscribed ? (
          <p className="text-center text-xl text-[#ffcc00]">
            Thank you for subscribing! 🎉
          </p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 rounded-l-lg border-2 border-[#ff6f00] outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#ff6f00] px-6 py-3 rounded-r-lg text-white hover:bg-[#ff8c33] transition duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
