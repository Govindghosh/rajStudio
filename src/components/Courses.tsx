import { Guitar, Mic, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Acoustic Guitar",
      description: "From your first chord to confidently playing songs with strumming, fingerpicking, rhythm, and melody.",
      icon: Guitar,
      price: 4000,
      originalPrice: 4000,
      duration: "Ongoing (Monthly)",
      students: "120+",
      rating: 4.9,
      level: "Beginner & Intermediate",
      featured: true,
      features: [
        "Strumming & Fingerpicking",
        "Rhythm & Melody Practice",
        "Song Performance Training",
        "Music Theory Basics"
      ],
      highlights: [
        "Personalized Guidance",
        "Weekly Group Jams",
        "Stage Performance Support",
        "Lifetime Materials Access"
      ]
    },
    {
      id: 2,
      title: "Electric Guitar",
      description: "Learn riffs, scales, soloing, and rock/pop techniques with precision and stage confidence.",
      icon: Guitar,
      price: 4000,
      originalPrice: 4000,
      duration: "Ongoing (Monthly)",
      students: "90+",
      rating: 4.8,
      level: "Intermediate to Advanced",
      featured: false,
      features: [
        "Lead Guitar Techniques",
        "Scales & Improvisation",
        "Rock & Pop Styles",
        "Stage Presence Coaching"
      ],
      highlights: [
        "Solo Performance Training",
        "Band Collaboration Practice",
        "Recording Guidance",
        "Performance Events"
      ]
    },
    {
      id: 3,
      title: "Western Vocals",
      description: "Develop your voice with pitch, breathing, vocal strength, and performance techniques across genres.",
      icon: Mic,
      price: 4000,
      originalPrice: 4000,
      duration: "Ongoing (Monthly)",
      students: "150+",
      rating: 5.0,
      level: "All Levels",
      featured: true,
      features: [
        "Breath Control & Vocal Strength",
        "Pitch Accuracy Training",
        "Genre Versatility (Pop, Rock, Classical)",
        "Stage Confidence & Expression"
      ],
      highlights: [
        "1-on-1 Vocal Coaching",
        "Performance Showcases",
        "Studio Recording Practice",
        "Professional Feedback"
      ]
    },
    {
      id: 4,
      title: "Any 2 Courses (Combo)",
      description: "Enroll in any 2 courses of your choice with 10% OFF and become a versatile musician.",
      icon: Star,
      price: 7200,
      originalPrice: 8000,
      duration: "Ongoing (Monthly)",
      students: "60+",
      rating: 5.0,
      level: "All Levels",
      featured: true,
      features: [
        "All Content from 2 Courses",
        "Songwriting & Arrangement",
        "Performance Psychology",
        "Music Business Basics"
      ],
      highlights: [
        "Biggest Savings (10% OFF)",
        "Career Mentorship",
        "Priority Sessions",
        "Portfolio Building"
      ]
    }
  ];

  const CourseCard = ({ course, index }: { course: typeof courses[0], index: number }) => {
    const IconComponent = course.icon;
    
    return (
      <div className={`card-musical p-8 relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow ${
        course.featured ? 'ring-2 ring-musical-gold dark:ring-musical-gold/80' : ''
      }`}>
        {course.featured && (
          <div className="absolute -top-2 -right-2">
            <Badge className="bg-musical-gold text-white px-3 py-1 dark:bg-musical-gold/90">
              Popular
            </Badge>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-6">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            index === 0 ? 'bg-gradient-to-r from-musical-gold to-orange-400' :
            index === 1 ? 'bg-gradient-to-r from-musical-blue to-cyan-400' :
            index === 2 ? 'bg-gradient-to-r from-musical-purple to-pink-400' :
            'bg-gradient-to-r from-green-500 to-emerald-400'
          }`}>
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="font-musical text-2xl font-bold mb-2 text-gray-900 dark:text-white">{course.title}</h3>
          <p className="text-muted-foreground dark:text-gray-300">{course.description}</p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{course.price}</span>
            {course.originalPrice !== course.price && (
              <span className="text-lg text-muted-foreground dark:text-gray-400 line-through">₹{course.originalPrice}</span>
            )}
          </div>
          {course.originalPrice !== course.price && (
            <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400">
              Save ₹{course.originalPrice - course.price}
            </Badge>
          )}
        </div>

        {/* Course Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-musical-blue dark:text-musical-blue/80" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-musical-purple dark:text-musical-purple/80" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{course.students}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-musical-gold fill-current dark:text-musical-gold/80" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{course.rating} rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{course.level}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Course Includes:</h4>
          <ul className="space-y-2">
            {course.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Special Benefits:</h4>
          <div className="grid grid-cols-1 gap-2">
            {course.highlights.map((highlight, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-sm font-medium text-center text-gray-800 dark:text-gray-200">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* CTA with WhatsApp Integration */}
        <div className="space-y-3">
          <Button
            asChild
            className={`w-full ${
              course.featured 
                ? 'bg-gradient-to-r from-musical-gold to-orange-500 hover:from-musical-gold/90 hover:to-orange-500/90' 
                : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600'
            }`}
          >
            <a
              href={`https://wa.me/918791217050?text=Hi! I’m interested in the ${course.title}. Please share more details.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            variant="outline"
            asChild
            className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <a
              href="https://wa.me/918791217050?text=Hi! I’d like to book a free trial lesson."
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Trial Lesson
            </a>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id="courses" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Courses
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose from our guitar and vocal programs — designed to take you from beginner to professional level.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
              <span>Certified Curriculum</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-musical-gold fill-current dark:text-musical-gold/80" />
              <span>4.9/5 Student Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-musical-blue dark:text-musical-blue/80" />
              <span>200+ Happy Students</span>
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;