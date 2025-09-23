import { useState, useEffect } from "react";
import { Menu, X, Music, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  const handleBookTrial = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    // { name: "About", href: "#about" },
    { name: "Courses", href: "/course" },
    // { name: "Talents", href: "#talents" },
    // { name: "Gallery", href: "#gallery" },
    // { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : isDark
          ? "bg-transparent" // dark mode: transparent
          : "bg-white/10 backdrop-blur-md" // light mode: white with slight transparency
      }`}
    >
      <div className="container-musical">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center space-x-2">
              <div
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDark ? "bg-primary" : "bg-[#F9F8F6]"
                }`}
              >
                <img
                  src="/favicon.ico"
                  alt="Melody Workshop Logo"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div
                className={`font-musical text-xl font-bold transition-colors duration-300 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Melody Workshop
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isDark
                    ? "text-white hover:text-musical-gold" // dark mode
                    : "text-gray-900 hover:text-musical-blue" // light mode
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-musical-gold" />
              ) : (
                <Moon className="h-4 w-4 text-musical-blue" />
              )}
            </Button>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Button 
                onClick={handleBookTrial}
                className={`font-medium text-white px-4 py-2 rounded-md transition-colors ${
                  isDark
                    ? "bg-musical-gold hover:bg-yellow-500 text-black" // dark mode styling
                    : "bg-musical-blue hover:bg-blue-600 text-white" // light mode styling
                }`}
              >
                Book Free Trial
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={handleBookTrial}
                  className={`w-full font-medium text-white px-4 py-2 rounded-md transition-colors ${
                    isDark
                      ? "bg-musical-gold hover:bg-yellow-500 text-black" // dark mode styling
                      : "bg-musical-blue hover:bg-blue-600 text-white" // light mode styling
                  }`}
                >
                  Book Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;