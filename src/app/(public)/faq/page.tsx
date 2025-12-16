"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type Category = {
  title: string;
  id: string;
  faqs: FAQ[];
};

const faqCategories: Category[] = [
  {
    title: "Shipping & Delivery",
    id: "shipping",
    faqs: [
      {
        question: "How long does delivery take?",
        answer: "Standard shipping takes 3–5 business days. Express options are available at checkout.",
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship worldwide. International delivery times and charges apply based on your region.",
      },
      {
        question: "Can I track my order?",
        answer: "Absolutely! You'll receive a tracking link by email as soon as your order ships.",
      },
    ],
  },
  {
    title: "Payments",
    id: "payments",
    faqs: [
      {
        question: "What payment methods are accepted?",
        answer: "We accept major credit/debit cards, PayPal, Google Pay, Apple Pay, and Klarna.",
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes. All payments are encrypted and processed through secure gateways using SSL.",
      },
    ],
  },
  {
    title: "Returns & Refunds",
    id: "returns",
    faqs: [
      {
        question: "What is your return policy?",
        answer: "You can return items within 14 days of delivery, unused and in original packaging.",
      },
      {
        question: "How do I request a refund?",
        answer: "Contact our support team with your order number. Refunds are processed within 5–7 business days.",
      },
    ],
  },
  {
    title: "Warranty & Support",
    id: "warranty",
    faqs: [
      {
        question: "Do your products come with a warranty?",
        answer: "Yes, all products include a minimum 1-year manufacturer warranty unless stated otherwise.",
      },
      {
        question: "How do I claim warranty service?",
        answer: "Contact support with your order number and issue description. We'll guide you through the process.",
      },
    ],
  },
  {
    title: "Account & Orders",
    id: "account",
    faqs: [
      {
        question: "Do I need an account to place an order?",
        answer: "No, you can check out as a guest. But creating an account helps track orders and manage returns easily.",
      },
      {
        question: "How can I change or cancel an order?",
        answer: "Contact us as soon as possible. If your order hasn’t shipped, we can adjust or cancel it.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<{ [key: string]: number | null }>({});

  const toggle = (categoryId: string, index: number) => {
    setOpen((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === index ? null : index,
    }));
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to the most common questions about shopping with Compdock.
        </p>
      </section>

      {/* Category Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-blue-600">
        {faqCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="hover:underline underline-offset-4"
          >
            {cat.title}
          </a>
        ))}
      </nav>

      {/* FAQ Sections */}
      {faqCategories.map((category) => (
        <section key={category.id} id={category.id} className="space-y-6 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
          <div className="space-y-4">
            {category.faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition text-left"
                  onClick={() => toggle(category.id, index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      open[category.id] === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open[category.id] === index && (
                  <div className="p-5 border-t bg-gray-50 text-gray-700 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="text-center mt-24 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Still have questions?</h3>
        <p className="text-gray-600">
          Our support team is happy to help you with anything not covered here.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Contact Support
        </a>
      </section>
    </main>
  );
}
