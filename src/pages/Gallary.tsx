import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {default as GA} from '@/components/Gallery';
const Gallary = () => {
  return (
        <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <GA />
      </main>
      <Footer />
    </div>
  )
}

export default Gallary;
