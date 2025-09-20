import { Music, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Guitar, Mic, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Guitar Lessons', icon: Guitar },
    { name: 'Vocal Training', icon: Mic },
    { name: 'Music Theory', icon: Music },
    { name: 'Performance Coaching', icon: Music },
    { name: 'Recording Sessions', icon: Music },
    { name: 'Online Lessons', icon: Music }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border relative">
      {/* Main Footer Content */}
      <div className="container-musical py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-musical-gold to-musical-blue rounded-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-musical text-2xl font-bold text-gradient-musical">
                  Melody Workshop
                </h3>
                <p className="text-sm text-muted-foreground">Guitar & Vocal Academy</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Melody Workshop is a team of passionate guitarists and vocal coaches 
              dedicated to transforming musical dreams into reality. With years of combined 
              experience, we’ve guided hundreds of students on their musical journey.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-musical-gold" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-musical-blue" />
                <span className="text-sm">info@melodyworkshop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-musical-purple" />
                <span className="text-sm">123 Music Street, Downtown</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 bg-muted rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-musical text-xl font-bold text-gradient-musical">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-musical text-xl font-bold text-gradient-musical">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name} className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4 text-musical-gold" />
                    <span className="text-muted-foreground">{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter & CTA */}
          <div className="space-y-6">
            <h4 className="font-musical text-xl font-bold text-gradient-musical">
              Stay Connected
            </h4>
            
            <p className="text-sm text-muted-foreground">
              Get weekly music tips, lesson updates, and performance announcements.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-musical-gold"
              />
              <Button className="w-full btn-hero">
                Subscribe
              </Button>
            </div>

            {/* Teaching Hours */}
            <div className="card-musical p-4">
              <h5 className="font-semibold text-sm mb-2">Teaching Hours</h5>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9 AM - 8 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9 AM - 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12 PM - 6 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-musical py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Melody Workshop. All rights reserved.</span>
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for music lovers</span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Professional Instructors</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-musical-gold rounded-full"></div>
                <span>500+ Happy Students</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-musical-blue rounded-full"></div>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-musical-purple rounded-full"></div>
                <span>Flexible Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Music Notes */}
      <div className="absolute pointer-events-none overflow-hidden">
        <div className="absolute bottom-20 left-10 music-note-float opacity-20">
          <Music className="h-6 w-6 text-musical-gold" />
        </div>
        <div className="absolute bottom-32 right-20 music-note-float opacity-15" style={{ animationDelay: '2s' }}>
          <Guitar className="h-8 w-8 text-musical-blue" />
        </div>
        <div className="absolute bottom-16 right-40 music-note-float opacity-10" style={{ animationDelay: '1s' }}>
          <Mic className="h-7 w-7 text-musical-purple" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
