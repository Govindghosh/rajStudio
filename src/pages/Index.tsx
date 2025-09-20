import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Talents from '@/components/Talents';
import GalleryTwo from '@/components/GalleryTwo';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Courses /> */}
        <Talents />
        <GalleryTwo />
        <Testimonials />
        {/* <Blog /> */}
        {/* <FAQs /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
