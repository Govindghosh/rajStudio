import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Courses from '@/components/Courses';

const Course = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Courses />
      </main>
      <Footer />
    </div>
  )
}
export default Course;
