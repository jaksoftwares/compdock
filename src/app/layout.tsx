"use client";

import "../styles/global.css";
import { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
// import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import TopBanner from "@/components/layout/Banner";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <title>Compdock - The Ultimate Computer Accessories Store</title>
        <meta
          name="description"
          content="Buy the best computer accessories from top stores in town. Explore laptops, keyboards, mice, and more!"
        />
        <meta
          name="keywords"
          content="computer accessories, laptops, keyboards, gaming, ecommerce, buy online"
        />
        <meta name="author" content="Compdock Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (for social media previews) */}
        <meta property="og:title" content="Compdock - The Ultimate Computer Accessories Store" />
        <meta property="og:description" content="Shop the latest computer accessories from top stores in town." />
        <meta property="og:image" content="/compdock-preview.jpg" />
        <meta property="og:url" content="https://compdock.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Compdock - The Ultimate Computer Accessories Store" />
        <meta name="twitter:description" content="Find and buy the best computer accessories online with ease." />
        <meta name="twitter:image" content="/compdock-preview.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="bg-gray-100 text-gray-900 pb-16 md:pb-0">
        <div className="flex flex-col min-h-screen">
          {/* Unified Top Bar (deals + seller promo) */}
          <TopBanner />
          {/* Header (sticky inside its own component) */}
          <Header />

          <div className="">
            {/* Sidebar (Hidden on Mobile) */}
            <div className="hidden md:block">
              {/* <Sidebar /> */}
            </div>

            {/* Main Content */}
            <main className="flex-1 p-4 md:mx-auto">{children}</main>
          </div>

          {/* Footer */}
          <Footer />

          {/* Mobile bottom navigation */}
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
};

export default Layout;
