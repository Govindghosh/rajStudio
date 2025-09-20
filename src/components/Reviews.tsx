import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Guitar Student",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Raj is an incredible instructor! His patience and expertise helped me go from a complete beginner to playing my favorite songs in just 6 months. Highly recommend!",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Vocal Student",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The vocal techniques Raj taught me transformed my singing completely. His personalized approach and encouraging teaching style made all the difference.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Guitar & Vocal Student",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Taking both guitar and vocal lessons with Raj was the best decision I made. He seamlessly integrates both skills and helps you become a complete musician.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Advanced Guitar Student",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Even as an intermediate player, Raj helped me break through plateaus and reach new levels. His deep understanding of music theory is impressive.",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      role: "Parent of Student",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "My daughter has been learning with Raj for a year now. Her confidence and skills have grown tremendously. He's wonderful with kids!",
      date: "2 weeks ago"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance reviews
  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating 
            ? 'text-accent fill-accent' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-gradient-gold mb-4">
            Student Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our students have to say about their musical journey with us
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="card-music text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-accent/20">
              <Quote className="w-12 h-12" />
            </div>

            {/* Review Content */}
            <div className="pt-12 md:pt-16 pb-8">
              {/* Student Image */}
              <div className="mb-6">
                <img
                  src={reviews[currentReview].image}
                  alt={reviews[currentReview].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-accent/20"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4 md:mb-6">
                {renderStars(reviews[currentReview].rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed text-foreground mb-4 md:mb-6 max-w-3xl mx-auto px-4">
                "{reviews[currentReview].text}"
              </blockquote>

              {/* Student Info */}
              <div className="text-center">
                <h4 className="font-semibold text-base md:text-lg text-accent">
                  {reviews[currentReview].name}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  {reviews[currentReview].role}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {reviews[currentReview].date}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-accent scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your musical journey?
          </p>
          <button className="btn-hero">
            Book Your Free Trial Lesson
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;