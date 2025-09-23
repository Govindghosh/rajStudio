import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Music, Guitar, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Acoustic Guitar Student",
    course: "Guitar Mastery Course",
    rating: 5,
    instrument: Guitar,
    color: "from-orange-400 to-amber-500",
    quote:
      "I never thought I’d be able to play guitar so quickly. The lessons are clear and motivating!",
    achievement: "Plays acoustic sets at college events",
  },
  {
    id: 2,
    name: "Aditi Sharma",
    role: "Vocal Student",
    course: "Vocal Excellence Program",
    rating: 5,
    instrument: Mic,
    color: "from-pink-500 to-rose-400",
    quote:
      "The classes are interactive, and I feel confident singing now. I look forward to every session.",
    achievement: "Performed in her first live recital",
  },
  {
    id: 3,
    name: "Arjun Nair",
    role: "Beginner Guitarist",
    course: "Complete Musician Package",
    rating: 5,
    instrument: Guitar,
    color: "from-green-500 to-emerald-400",
    quote:
      "The team made learning guitar fun from day one. Within weeks I was playing full songs instead of just chords.",
    achievement: "Won his school music competition",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Singer-Songwriter",
    course: "Vocal Excellence Program",
    rating: 5,
    instrument: Mic,
    color: "from-purple-500 to-indigo-400",
    quote:
      "I not only improved my vocals but also learned stage presence. The instructors encouraged me to write and perform my own songs.",
    achievement: "Released her first original single",
  },
  {
    id: 5,
    name: "Kabir Singh",
    role: "Teen Drummer & Music Enthusiast",
    course: "Complete Musician Package",
    rating: 5,
    instrument: Music,
    color: "from-blue-500 to-cyan-400",
    quote:
      "Melody Workshop gave me the confidence to collaborate with other musicians and perform live. Every session pushes me forward.",
    achievement: "Formed a school rock band",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = Array.from({ length: 3 }, (_, i) => testimonials[(currentSlide + i) % testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-musical text-center">
        <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
          Student Success Stories
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Hear from students who improved their musical journey with the Melody Workshop team
        </p>
        <div className="flex items-center justify-center space-x-4 mb-12">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-musical-gold fill-current" />)}
          <span className="text-2xl font-bold text-gradient-musical">4.9/5</span>
          <span className="text-muted-foreground">from 200+ students</span>
        </div>

        <div className="relative mb-16">
          <Button onClick={prevSlide} variant="outline" size="icon" className="absolute top-1/2 -translate-y-1/2 -left-4">
            <ChevronLeft className="h-6 w-6"/>
          </Button>
          <Button onClick={nextSlide} variant="outline" size="icon" className="absolute top-1/2 -translate-y-1/2 -right-4">
            <ChevronRight className="h-6 w-6"/>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8 px-8">
            {visibleTestimonials.map((t, idx) => {
              const Icon = t.instrument;
              return (
                <div key={t.id} className={`card-musical p-6 relative overflow-hidden ${idx===1 ? 'lg:scale-105 lg:z-10' : ''}`}>
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/30" />
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-musical-gold fill-current" />)}
                  </div>
                  <blockquote className="italic text-lg mb-4">"{t.quote}"</blockquote>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${t.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Course: {t.course}</p>
                  <p className="text-sm font-medium text-green-600">Achievement: {t.achievement}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx===currentSlide ? 'bg-musical-gold w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center"><div className="text-3xl font-bold text-gradient-musical mb-1">200+</div><div className="text-sm text-muted-foreground">Happy Students</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-gradient-musical mb-1">4.9/5</div><div className="text-sm text-muted-foreground">Average Rating</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-gradient-musical mb-1">95%</div><div className="text-sm text-muted-foreground">Success Rate</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-gradient-musical mb-1">10+</div><div className="text-sm text-muted-foreground">Years Teaching</div></div>
        </div>

        <div className="card-musical p-8 max-w-xl mx-auto text-center">
          <h3 className="font-musical text-2xl font-bold mb-3 text-gradient-musical">Ready to Start Your Musical Journey?</h3>
          <p className="text-muted-foreground mb-4">Join hundreds of students who have transformed their abilities with the Melody Workshop team</p>
          <Button className="btn-hero">Book Your Free Trial Lesson</Button>
        </div>
      </div>
    </section>
  );
}
