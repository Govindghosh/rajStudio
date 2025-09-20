import React from "react";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import {default as CA} from "@/components/Contact";
const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
