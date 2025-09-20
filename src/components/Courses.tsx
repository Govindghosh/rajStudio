import { Guitar, Mic, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Guitar Mastery Course",
      description: "Complete guitar program from beginner to advanced level",
      icon: Guitar,
      price: 149,
      originalPrice: 199,
      duration: "12 weeks",
      students: "250+",
      rating: 4.9,
      level: "All Levels",
      featured: true,
      features: [
        "Acoustic & Electric Guitar Techniques",
        "Music Theory & Chord Progressions",
        "Fingerpicking & Strumming Patterns",
        "Song Performance & Composition",
        "Recording & Production Basics",
        "Live Performance Preparation"
      ],
      highlights: [
        "1-on-1 Personal Sessions",
        "Weekly Group Practice",
        "Performance Opportunities",
        "Lifetime Access to Materials"
      ]
    },
    {
      id: 2,
      title: "Vocal Excellence Program",
      description: "Professional vocal training for all singing styles",
      icon: Mic,
      price: 129,
      originalPrice: 179,
      duration: "10 weeks",
      students: "180+",
      rating: 4.8,
      level: "Beginner to Pro",
      featured: false,
      features: [
        "Breath Control & Vocal Technique",
        "Pitch Accuracy & Tone Development",
        "Style Versatility (Pop, Rock, Classical)",
        "Stage Presence & Performance",
        "Microphone Technique",
        "Recording Studio Sessions"
      ],
      highlights: [
        "Personalized Vocal Coaching",
        "Studio Recording Experience",
        "Performance Showcase Events",
        "Professional Feedback Sessions"
      ]
    },
    {
      id: 3,
      title: "Complete Musician Package",
      description: "Combined guitar and vocal training for complete musicianship",
      icon: Star,
      price: 249,
      originalPrice: 349,
      duration: "16 weeks",
      students: "100+",
      rating: 5.0,
      level: "All Levels",
      featured: true,
      features: [
        "All Guitar Course Content",
        "All Vocal Course Content",
        "Song Arrangement & Composition",
        "Music Production Introduction",
        "Performance Psychology",
        "Music Business Basics"
      ],
      highlights: [
        "Most Comprehensive Training",
        "Priority Booking & Support",
        "Professional Portfolio Creation",
        "Career Guidance & Mentorship"
      ]
    }
  ];

  const CourseCard = ({ course, index }: { course: typeof courses[0], index: number }) => {
    const IconComponent = course.icon;
    
    return (
      <div className={`card-musical p-8 relative overflow-hidden ${
        course.featured ? 'ring-2 ring-musical-gold' : ''
      }`}>
        {course.featured && (
          <div className="absolute -top-2 -right-2">
            <Badge className="bg-musical-gold text-white px-3 py-1">
              Most Popular
            </Badge>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-6">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            index === 0 ? 'bg-gradient-to-r from-musical-gold to-orange-400' :
            index === 1 ? 'bg-gradient-to-r from-musical-blue to-cyan-400' :
            'bg-gradient-to-r from-musical-purple to-pink-400'
          }`}>
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="font-musical text-2xl font-bold mb-2">{course.title}</h3>
          <p className="text-muted-foreground">{course.description}</p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-3xl font-bold text-gradient-musical">${course.price}</span>
            <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-600">
            Save ${course.originalPrice - course.price}
          </Badge>
        </div>

        {/* Course Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-musical-blue" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-musical-purple" />
            <span className="text-sm">{course.students}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-musical-gold fill-current" />
            <span className="text-sm">{course.rating} rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm">{course.level}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Course Includes:</h4>
          <ul className="space-y-2">
            {course.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h4 className="font-semibold mb-3">Special Benefits:</h4>
          <div className="grid grid-cols-1 gap-2">
            {course.highlights.map((highlight, idx) => (
              <div key={idx} className="bg-muted rounded-lg p-3 text-sm font-medium text-center">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <Button className={`w-full ${course.featured ? 'btn-hero' : 'btn-secondary-musical'}`}>
            <span>Enroll Now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full">
            Free Trial Lesson
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id="courses" className="section-padding bg-muted/30">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
            Music <span className="text-gradient-musical">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our comprehensive music programs designed to take you from beginner to professional level
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Certified Curriculum</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-musical-gold fill-current" />
              <span>4.9/5 Student Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-musical-blue" />
              <span>500+ Happy Students</span>
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-musical p-8">
            <h3 className="font-musical text-2xl font-bold mb-4 text-gradient-musical">
              Flexible Learning Options
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-musical-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground">Choose lesson times that work with your schedule</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-musical-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Online & In-Person</h4>
                  <p className="text-sm text-muted-foreground">Learn from home or in our professional studio</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-musical-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Personalized Approach</h4>
                  <p className="text-sm text-muted-foreground">Tailored curriculum based on your goals and preferences</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-musical p-8">
            <h3 className="font-musical text-2xl font-bold mb-4 text-gradient-musical">
              What Students Say
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-musical-gold pl-4">
                <p className="text-sm italic mb-2">
                  "Raj's teaching method is incredible. I went from never touching a guitar to performing at open mic nights in just 3 months!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-musical-gold fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">- Sarah M.</span>
                </div>
              </div>
              
              <div className="border-l-4 border-musical-blue pl-4">
                <p className="text-sm italic mb-2">
                  "The vocal training transformed my singing completely. I now perform professionally at local venues."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-musical-gold fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">- Mike R.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;