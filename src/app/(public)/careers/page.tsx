import Image from "next/image";
import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      image: "/image4.jpg",
      link: "/careers/frontend-developer",
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Hybrid – Nairobi",
      image: "/image5.jpg",
      link: "/careers/ui-ux-designer",
    },
    {
      title: "Marketing Strategist",
      type: "Part-time",
      location: "Remote",
      image: "/image6.jpg",
      link: "/careers/marketing-strategist",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Join the Compdock Team
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’re building the future of e-commerce for tech. Come work with passionate people and create impact.
        </p>
      </section>

      {/* Perks */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <Image
            src="/image7.jpg"
            alt="Flexible Hours"
            width={100}
            height={100}
            className="mx-auto mb-3 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold">Flexible Hours</h3>
          <p className="text-gray-500 text-sm">Work where and when you&apos;re most productive.</p>
        </div>
        <div>
          <Image
            src="/image8.jpg"
            alt="Remote Culture"
            width={100}
            height={100}
            className="mx-auto mb-3 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold">Remote Friendly</h3>
          <p className="text-gray-500 text-sm">We’re a globally distributed team with remote-first practices.</p>
        </div>
        <div>
          <Image
            src="/image9.jpg"
            alt="Growth"
            width={100}
            height={100}
            className="mx-auto mb-3 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold">Career Growth</h3>
          <p className="text-gray-500 text-sm">We invest in your learning and long-term success.</p>
        </div>
      </section>

      {/* Open Positions */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Open Roles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <Link
              href={job.link}
              key={index}
              className="block bg-white rounded-xl overflow-hidden border hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.type} · {job.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center border-t pt-12">
        <h2 className="text-2xl font-bold mb-4">Don&apos;t see a role that fits?</h2>
        <p className="text-gray-600 mb-6">
          We’re always on the lookout for great talent. Reach out and tell us how you can contribute.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
