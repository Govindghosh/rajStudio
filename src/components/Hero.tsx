import { useState, useEffect } from "react";
import { Play, Guitar, Mic, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-performance.jpg";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Melody Workshop performing"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-0 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 mb-6 border border-white/20 text-sm">
          <Star className="h-4 w-4 text-yellow-400" />
          <span>Professional Music Instructors</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Learn. Play. Perform. Your Musical Journey Starts Here.
          <div className="flex justify-center">
            {/* <TypewriterEffectSmooth words={words} /> */}
          </div>
        </h1>

        {/* Subheading */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
          At Melody Workshop, we help you master Guitar & Vocals with
          <br className="hidden sm:block" />
          expert guidance, structured lessons, and fun learning experiences.
        </p>

        {/* Call-to-Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-500 transition">
            <span>Book a Free Trial</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition">
            <Play className="h-4 w-4" />
            <span>Watch Demo</span>
          </Button>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap justify-center gap-6 text-white/90">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
              200+
            </div>
            <div className="text-sm sm:text-base">Students Taught</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
              10+
            </div>
            <div className="text-sm sm:text-base">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
              95%
            </div>
            <div className="text-sm sm:text-base">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
