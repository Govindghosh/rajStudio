import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, Guitar, Mic, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: '',
    experience: '',
    goals: '',
    availability: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "I'll get back to you within 24 hours to discuss your musical journey.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      instrument: '',
      experience: '',
      goals: '',
      availability: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Call or Text"],
      color: "from-musical-gold to-orange-400"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["raj@musiclessons.com", "Quick Response"],
      color: "from-musical-blue to-cyan-400"
    },
    {
      icon: MapPin,
      title: "Studio Location",
      details: ["123 Music Street", "Downtown Music District"],
      color: "from-musical-purple to-pink-400"
    },
    {
      icon: Clock,
      title: "Teaching Hours",
      details: ["Mon-Sat: 9AM-8PM", "Sunday: 12PM-6PM"],
      color: "from-green-500 to-emerald-400"
    }
  ];

  const lessonTypes = [
    { value: 'guitar', label: 'Guitar Lessons', icon: Guitar },
    { value: 'vocals', label: 'Vocal Training', icon: Mic },
    { value: 'both', label: 'Guitar + Vocals', icon: Calendar },
    { value: 'consultation', label: 'Consultation Call', icon: Phone }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient-musical">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your musical journey? Book your free trial lesson or get in touch with any questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-musical p-8">
            <h3 className="font-musical text-2xl font-bold mb-6 text-gradient-musical">
              Book Your Free Trial Lesson
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-musical-gold"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-musical-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-musical-gold"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Lesson Preferences */}
              <div>
                <label htmlFor="instrument" className="block text-sm font-medium mb-2">
                  Interested In *
                </label>
                <select
                  id="instrument"
                  name="instrument"
                  required
                  value={formData.instrument}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-musical-gold"
                >
                  <option value="">Select your interest</option>
                  {lessonTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-2">
                  Current Experience Level *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-musical-gold"
                >
                  <option value="">Select your level</option>
                  <option value="complete-beginner">Complete Beginner</option>
                  <option value="some-experience">Some Experience (1-2 years)</option>
                  <option value="intermediate">Intermediate (3-5 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                  <option value="professional">Professional/Semi-Professional</option>
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium mb-2">
                  Musical Goals
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={3}
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-musical-gold"
                  placeholder="What would you like to achieve? (e.g., learn favorite songs, perform live, improve technique)"
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium mb-2">
                  Preferred Schedule
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-musical-gold"
                  placeholder="e.g., Weekday evenings, Saturday mornings"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-musical-gold"
                  placeholder="Any questions or additional information you'd like to share?"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero text-lg py-4"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message & Book Free Trial</span>
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="card-musical p-6 text-center group">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`text-sm ${idx === 0 ? 'font-medium' : 'text-muted-foreground'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* What to Expect */}
            <div className="card-musical p-8">
              <h3 className="font-musical text-xl font-bold mb-6 text-gradient-musical">
                What to Expect from Your Free Trial
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Skill Assessment",
                    description: "We'll assess your current level and discuss your musical background"
                  },
                  {
                    title: "Goal Setting",
                    description: "Define clear, achievable objectives for your musical journey"
                  },
                  {
                    title: "Personalized Plan",
                    description: "Receive a customized learning roadmap tailored to your needs"
                  },
                  {
                    title: "Mini Lesson",
                    description: "Experience my teaching style with a practical mini-lesson"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-musical-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="card-musical p-6 text-center">
              <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground mb-4">
                I personally respond to all inquiries within 24 hours
              </p>
              <div className="flex justify-center space-x-6 text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Fast Response</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-musical-blue rounded-full"></div>
                  <span>Personal Attention</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-musical-purple rounded-full"></div>
                  <span>Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;