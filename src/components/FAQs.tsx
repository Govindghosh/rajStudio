import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Music, Clock, DollarSign, Users } from 'lucide-react';

const FAQs = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Music,
      color: "from-musical-gold to-orange-400",
      faqs: [
        {
          question: "Do I need any prior musical experience to start lessons?",
          answer: "Not at all! We welcome students of all levels, from complete beginners to advanced musicians looking to refine their skills. Our teaching approach is tailored to meet you exactly where you are in your musical journey."
        },
        {
          question: "What instruments do you teach?",
          answer: "Our team specializes in guitar (acoustic, electric, and classical) and vocal training. We also provide instruction in music theory, songwriting, and performance techniques that complement both instruments."
        },
        {
          question: "How do I book my first lesson?",
          answer: "Simply click the 'Book Free Trial' button on this website, choose a convenient time slot, and fill out the brief questionnaire about your musical goals. Our team will contact you within 24 hours to confirm your appointment."
        },
        {
          question: "What should I bring to my first lesson?",
          answer: "For guitar lessons, bring your guitar if you have one (we can provide one if needed). For vocal lessons, just bring yourself and a water bottle! We'll provide all other materials including sheet music, chord charts, and learning resources."
        }
      ]
    },
    {
      title: "Lessons & Scheduling",
      icon: Clock,
      color: "from-musical-blue to-cyan-400",
      faqs: [
        {
          question: "How long are the lessons and how often should I take them?",
          answer: "Standard lessons are 60 minutes long. We recommend weekly lessons for consistent progress, but the schedule can be adjusted based on your goals and availability. Some students prefer bi-weekly sessions."
        },
        {
          question: "Do you offer online lessons?",
          answer: "Yes! We offer both in-person and online lessons via Zoom or Skype. Online lessons are just as effective and offer the flexibility to learn from anywhere. We use high-quality audio equipment to ensure the best possible sound."
        },
        {
          question: "What if I need to reschedule or cancel a lesson?",
          answer: "We understand life happens! Please give at least 24 hours notice for cancellations or rescheduling. This allows us to offer the slot to other students. Same-day cancellations may incur a fee unless it's an emergency."
        },
        {
          question: "Can I take lessons for both guitar and vocals?",
          answer: "Absolutely! Many of our students study both instruments. We can alternate between guitar and vocals in the same lesson or dedicate separate sessions to each. The combination actually enhances overall musicianship."
        }
      ]
    },
    {
      title: "Pricing & Packages",
      icon: DollarSign,
      color: "from-musical-purple to-pink-400",
      faqs: [
        {
          question: "What are your lesson rates?",
          answer: "Individual lessons are $75 per hour. We offer package deals that provide better value: 4-lesson package for $280 (saving $20), and 8-lesson package for $520 (saving $80). All packages must be used within 3 months of purchase."
        },
        {
          question: "Do you offer any discounts?",
          answer: "Yes! We offer a 10% discount for students under 18, seniors over 65, and military personnel. Family discounts are available when multiple family members take lessons. Seasonal promotions also run throughout the year."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, checks, credit cards, PayPal, Venmo, and Zelle. Payment is due at the time of the lesson or when purchasing a package. Payment plans are available for longer course packages."
        },
        {
          question: "Is there a free trial lesson?",
          answer: "Yes! We offer a complimentary 30-minute trial lesson for new students. This gives us a chance to meet, discuss your goals, assess your current level, and see if we're a good fit before committing to regular lessons."
        }
      ]
    },
    {
      title: "Learning & Progress",
      icon: Users,
      color: "from-green-500 to-emerald-400",
      faqs: [
        {
          question: "How quickly will I see progress?",
          answer: "Progress varies by individual, but most students notice improvements within 2-4 weeks of consistent practice. You'll learn your first song within the first month! The key is regular practice - even 15-20 minutes daily makes a huge difference."
        },
        {
          question: "Do I need to practice between lessons?",
          answer: "While not mandatory, regular practice significantly accelerates progress. We provide structured practice routines and materials to make home practice effective and enjoyable. Quality practice is more important than quantity."
        },
        {
          question: "What styles of music do you teach?",
          answer: "We teach a wide variety of styles including rock, pop, folk, blues, jazz, classical, and country. We'll focus on the genres you're passionate about while building a well-rounded foundation that allows you to explore any style."
        },
        {
          question: "Do you help with performance preparation?",
          answer: "Absolutely! We regularly help students prepare for recitals, auditions, talent shows, and other performances. This includes song selection, stage presence coaching, and building confidence to perform in front of others."
        }
      ]
    }
  ];

  return (
    <section id="faqs" className="section-padding bg-muted/30">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-musical">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about starting your musical journey with the Melody Workshop team
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Header */}
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-musical text-2xl font-bold text-gradient-musical">
                    {category.title}
                  </h3>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across all categories
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={faqIndex} className="card-musical overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-card-hover transition-colors"
                        >
                          <h4 className="font-semibold text-lg pr-4">
                            {faq.question}
                          </h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-musical-gold" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6 border-t border-border">
                            <div className="pt-4 text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help Section */}
        <div className="mt-20">
          <div className="card-musical p-8 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-musical-gold to-musical-blue rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="font-musical text-2xl font-bold mb-4 text-gradient-musical">
              Still Have Questions?
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Don't see your question answered here? Our team is happy to discuss any specific concerns or requirements you may have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Send Us a Message
              </button>
              <button className="btn-secondary-musical">
                Schedule a Call
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-musical-gold rounded-full"></div>
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-musical-blue rounded-full"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-musical-purple rounded-full"></div>
                  <span>Personalized Advice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
