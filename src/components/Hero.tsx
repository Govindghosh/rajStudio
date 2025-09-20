import { useState, useEffect } from 'react';
import { Play, Music, Guitar, Mic, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-performance.jpg';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Learn Guitar & Vocal Music with the Melody Workshop Team";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Melody Workshop Team performing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-stage opacity-80"></div>
      </div>

      {/* Floating Musical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 music-note-float">
          <Music className="h-6 w-6 text-musical-gold opacity-60" />
        </div>
        <div className="absolute top-40 right-32 music-note-float" style={{ animationDelay: '1s' }}>
          <Guitar className="h-8 w-8 text-musical-blue opacity-50" />
        </div>
        <div className="absolute bottom-32 left-16 music-note-float" style={{ animationDelay: '2s' }}>
          <Mic className="h-7 w-7 text-musical-purple opacity-55" />
        </div>

        <div className="absolute bottom-20 right-20 flex space-x-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-musical-gold sound-wave-bar"
              style={{
                height: `${Math.random() * 40 + 20}px`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        <div className="stage-spotlight absolute inset-0"></div>
      </div>

      {/* Main Content */}
      <div className="container-musical relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
            <Star className="h-4 w-4 text-musical-gold" />
            <span className="text-sm font-medium">Professional Music Instructors</span>
          </div>

          {/* Main Heading with Typewriter Effect */}
          <div className="w-full max-w-4xl h-[100px] md:h-[140px] lg:h-[160px]">
          <h1 className="font-musical text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
            <span className="inline-block overflow-hidden border-r-2 border-musical-gold">
              {typewriterText}
            </span>
          </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
            Transform your musical journey with personalized lessons from our experienced instructors.
            <br className="hidden md:block" />
            From beginner to professional, unlock your musical potential with the Melody Workshop Team.
          </p>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-musical-gold">500+</div>
              <div className="text-sm text-white/80">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-musical-gold">10+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-musical-gold">95%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero text-lg px-8 py-4 group">
              <span>Book a Free Trial Lesson</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Watch Team Demo</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-white/70">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-musical-gold fill-current" />
              <span>Certified Instructors</span>
            </div>
            <div className="flex items-center space-x-1">
              <Music className="h-4 w-4 text-musical-blue" />
              <span>All Skill Levels</span>
            </div>
            <div className="flex items-center space-x-1">
              <Guitar className="h-4 w-4 text-musical-purple" />
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
