import React from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { default as BS } from "@/components/Blog";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <BS />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
