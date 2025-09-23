import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, Guitar, Mic, Calendar, User, MessageCircle } from 'lucide-react';
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

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'instrument', 'experience'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Please fill required fields",
        description: `Missing: ${missingFields.map(field => {
          if (field === 'name') return 'Full Name';
          if (field === 'email') return 'Email Address';
          if (field === 'instrument') return 'Instrument Interest';
          if (field === 'experience') return 'Experience Level';
          return field;
        }).join(', ')}`,
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const sendToWhatsApp = () => {
    if (!validateForm()) return;

    const whatsappMessage = `
🎵 *MELODY WORKSHOP - FREE TRIAL REQUEST* 🎵

*Personal Information:*
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || 'Not provided'}

*Musical Interest:*
🎸 Interested In: ${formData.instrument ? lessonTypes.find(t => t.value === formData.instrument)?.label : 'Not specified'}
🎯 Experience Level: ${formData.experience ? experienceLevels.find(l => l.value === formData.experience)?.label : 'Not specified'}

*Goals & Preferences:*
🎯 Musical Goals: ${formData.goals || 'Not specified'}
⏰ Preferred Schedule: ${formData.availability || 'Not specified'}

*Additional Message:*
💬 ${formData.message || 'No additional message'}

*Submitted on:* ${new Date().toLocaleDateString('en-IN', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

I'm excited to start my musical journey! Please contact me to schedule my free trial lesson. 🎶
    `.trim();

    const phoneNumber = "918791217050"; // Your WhatsApp number without + or 00
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Please send the pre-filled message to confirm your free trial booking.",
    });

    // Reset form after successful submission
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form first
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Send to WhatsApp
    sendToWhatsApp();
  };

  const contactInfo = [
    { 
      icon: Phone, 
      title: "Phone & WhatsApp", 
      details: ["+91 87912 17050", "Instant response on WhatsApp"], 
      color: "from-green-500 to-emerald-400 dark:from-green-600 dark:to-emerald-500",
      link: "https://wa.me/918791217050"
    },
    { 
      icon: Mail, 
      title: "Email", 
      details: ["raj@musiclessons.com", "Response within 24 hours"], 
      color: "from-musical-blue to-cyan-400 dark:from-musical-blue/80 dark:to-cyan-500",
      link: "mailto:raj@musiclessons.com"
    },
    { 
      icon: MapPin, 
      title: "Studio Location", 
      details: ["123 Music Street", "Downtown Music District, Chennai"], 
      color: "from-musical-purple to-pink-400 dark:from-musical-purple/80 dark:to-pink-500" 
    },
  ];

  const lessonTypes = [
    { value: 'guitar', label: 'Guitar Lessons', icon: Guitar },
    { value: 'vocals', label: 'Vocal Training', icon: Mic },
    { value: 'both', label: 'Guitar + Vocals Combo', icon: Calendar }
  ];

  const experienceLevels = [
    { value: 'complete-beginner', label: 'Complete Beginner (Starting from scratch)' },
    { value: 'basic-knowledge', label: 'Basic Knowledge (Few months experience)' },
    { value: 'some-experience', label: 'Some Experience (1-2 years of practice)' },
    { value: 'intermediate', label: 'Intermediate (3-5 years of playing)' },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-musical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-musical text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Start Your Musical Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Book your free trial lesson today. Let's discuss your goals and create a personalized learning plan together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="h-8 w-8 text-musical-gold" />
              <h3 className="font-musical text-2xl font-bold text-gray-900 dark:text-white">
                Book Your Free Trial Lesson
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Phone Number (WhatsApp preferred)
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent transition-colors"
                    placeholder="+91 87912 17050"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="instrument" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  What would you like to learn? *
                </label>
                <select
                  id="instrument"
                  name="instrument"
                  required
                  value={formData.instrument}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent transition-colors"
                >
                  <option value="">Select your interest</option>
                  {lessonTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your current experience level *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent transition-colors"
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map((level) => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  What are your musical goals?
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={3}
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent transition-colors"
                  placeholder="What would you like to achieve? (e.g., play songs, perform on stage, record music, etc.)"
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Preferred days and time for lessons
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent transition-colors"
                  placeholder="e.g., Weekday evenings after 6 PM, Saturday mornings"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Any questions or specific requirements?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-musical-gold focus:border-transparent transition-colors"
                  placeholder="Tell me more about what you're looking for in music lessons..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-musical-gold to-orange-500 hover:from-musical-gold/90 hover:to-orange-500/90 text-white font-medium py-4 text-lg transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Preparing WhatsApp Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send via WhatsApp</span>
                  </div>
                )}
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                📱 You'll be redirected to WhatsApp with a pre-filled message. Just hit send to confirm your booking!
              </p>
            </form>
          </div>

          <div className="space-y-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const Content = (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white text-center">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`text-sm text-center ${idx === 0 ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-300'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                );

                return info.link ? (
                  <a key={index} href={info.link} target={info.link.includes('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                    {Content}
                  </a>
                ) : (
                  <div key={index}>{Content}</div>
                );
              })}
            </div>

            {/* What to Expect */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="font-musical text-xl font-bold mb-6 text-gray-900 dark:text-white">What to Expect from Your Free Trial</h3>
              <div className="space-y-4">
                {[
                  { title: "Skill Assessment", description: "We'll assess your current level and discuss your musical background" },
                  { title: "Goal Setting", description: "Define clear, achievable objectives for your musical journey" },
                  { title: "Personalized Plan", description: "Receive a customized learning roadmap tailored to your needs" },
                  { title: "Hands-on Lesson", description: "Experience my teaching style with a practical mini-lesson" },
                  { title: "Q&A Session", description: "Get all your questions answered about the learning process" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-musical-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="bg-gradient-to-br from-musical-gold/10 to-orange-500/10 dark:from-musical-gold/5 dark:to-orange-500/5 rounded-2xl p-6 text-center border border-musical-gold/20">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Quick Response Guarantee</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">I personally respond to all inquiries within 24 hours</p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Fast Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-musical-blue rounded-full"></div>
                  <span>Personal Attention</span>
                </div>
                <div className="flex items-center space-x-2">
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