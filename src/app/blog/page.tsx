import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Top 10 Must-Have Accessories for Your Workstation",
      date: "May 5, 2025",
      image: "/image1.jpg",
      link: "/blog/workstation-accessories",
    },
    {
      title: "How to Choose the Right Gaming Mouse in 2025",
      date: "April 21, 2025",
      image: "/image2.jpg",
      link: "/blog/gaming-mouse-guide",
    },
    {
      title: "Why Ergonomic Keyboards Are Worth It",
      date: "April 2, 2025",
      image: "/image3.jpg",
      link: "/blog/ergonomic-keyboards",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Compdock Blog
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          News, guides, and insights from the world of tech and accessories.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <Link
            href={post.link}
            key={index}
            className="group block bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-5">
              <p className="text-sm text-blue-600 font-medium mb-1">{post.date}</p>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {post.title}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
