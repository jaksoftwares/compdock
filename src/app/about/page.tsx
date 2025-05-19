import Image from "next/image";
import { Briefcase, Target, Users, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900">Empowering Digital Lifestyles</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Compdock is more than an e-commerce platform — we&apos;re a technology partner delivering powerful accessories and next-gen solutions for everyday creators and professionals.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To equip individuals and businesses with the best-in-class computer accessories, enabling them to work, play, and create without limits.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To build the most trusted e-commerce ecosystem for digital tools, known for innovation, reliability, and user-centered design.
          </p>
        </div>
      </section>

      {/* Company Story / Timeline */}
      <section>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Journey</h2>
        <ol className="border-l-4 border-blue-600 space-y-10 pl-6">
          <li>
            <div className="text-blue-600 font-semibold">2021 — The Idea Was Born</div>
            <p className="text-gray-600">Frustrated by a lack of professional e-commerce options for computer gear, our founder started sketching out the Compdock blueprint.</p>
          </li>
          <li>
            <div className="text-blue-600 font-semibold">2022 — Product Development</div>
            <p className="text-gray-600">We built our first prototypes, gathered feedback from tech communities, and shaped our feature-rich platform.</p>
          </li>
          <li>
            <div className="text-blue-600 font-semibold">2023 — Public Launch</div>
            <p className="text-gray-600">Compdock went live, gaining traction with both independent tech shops and individual buyers.</p>
          </li>
          <li>
            <div className="text-blue-600 font-semibold">2025 — Scaling Up</div>
            <p className="text-gray-600">Today, Compdock powers dozens of stores and thousands of customers with a seamless digital experience.</p>
          </li>
        </ol>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-3xl font-extrabold text-center mb-12">What We Stand For</h2>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          <div>
            <Briefcase className="mx-auto text-blue-600 mb-3" size={32} />
            <h3 className="font-semibold text-lg">Professionalism</h3>
            <p className="text-gray-500 text-sm">We bring enterprise-level quality to every interaction and feature.</p>
          </div>
          <div>
            <Target className="mx-auto text-blue-600 mb-3" size={32} />
            <h3 className="font-semibold text-lg">Customer Focus</h3>
            <p className="text-gray-500 text-sm">Everything we do is centered around our users&apos; needs and satisfaction.</p>
          </div>
          <div>
            <Lightbulb className="mx-auto text-blue-600 mb-3" size={32} />
            <h3 className="font-semibold text-lg">Innovation</h3>
            <p className="text-gray-500 text-sm">We embrace creativity and technology to drive smarter e-commerce.</p>
          </div>
          <div>
            <Users className="mx-auto text-blue-600 mb-3" size={32} />
            <h3 className="font-semibold text-lg">Community</h3>
            <p className="text-gray-500 text-sm">We foster relationships that empower both our vendors and customers.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-extrabold text-center mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            { name: "Alex Johnson", role: "Founder & CEO", image: "/image1.jpg" },
            { name: "Maya Patel", role: "Lead Developer", image: "/image2.jpg" },
            { name: "James Lee", role: "Product Manager", image: "/image3.jpg" },
          ].map((member, i) => (
            <div key={i}>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Want to partner or work with us?</h2>
        <p className="text-gray-600 mb-6">We’re always looking for new collaborators and passionate teammates.</p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
