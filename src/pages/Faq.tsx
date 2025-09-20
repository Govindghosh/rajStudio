import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQs from "@/components/FAQs";
const Faq = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
