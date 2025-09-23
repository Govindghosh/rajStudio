import {
  Music,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Guitar,
  Mic,
  Heart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "/course" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Guitar Lessons", icon: Guitar },
    { name: "Vocal Training", icon: Mic },
    { name: "Music Theory", icon: Music },
    { name: "Online Lessons", icon: Music },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
    },
    { name: "Youtube", icon: Youtube, href: "#", color: "hover:text-red-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border m-2">
      <div className="container-musical py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & Contact */}
        <div className="space-y-4">
          <a href="/">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-[#F9F8F6] dark:bg-primary transition-colors duration-300">
                <img
                  src="/favicon.ico"
                  alt="Melody Workshop Logo"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div className="font-musical text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Melody Workshop
              </div>
            </div>
          </a>

          <p className="text-sm text-muted-foreground dark:text-gray-300 transition-colors duration-300">
            From First Chord to First Performance
          </p>

          <div className="space-y-1 text-sm text-muted-foreground dark:text-gray-300 transition-colors duration-300">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-musical-gold" />
              <span>+91 87912 17050</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-musical-blue" />
              <span>info@melodyworkshop.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-musical-purple" />
              <span>Noida</span>
            </div>
          </div>

          <div className="flex space-x-3 mt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg bg-muted hover:bg-[#e6e5e2] dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 ${social.color}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
<h4 className="font-musical text-xl font-bold">
  Quick Links
</h4>

          <ul className="space-y-2 text-sm text-gray-900 dark:text-white">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="font-musical text-xl font-bold ">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-gray-900 dark:text-white">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.name} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-musical-gold" />
                  <span>{service.name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="font-musical text-xl font-bold ">
            Stay Connected
          </h4>
          <p className="text-sm text-gray-900 dark:text-white">
            Weekly music tips, lesson updates, and performance announcements.
          </p>
          <div className="flex flex-col space-y-2 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-musical-gold"
            />
            <Button className="w-full btn-hero">Subscribe</Button>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-musical py-6 flex flex-col md:flex-row flex-wrap items-center justify-between space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <span>© {currentYear} Melody Workshop. All rights reserved.</span>
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for music lovers</span>
          </div>
          <div className="flex flex-wrap space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;
