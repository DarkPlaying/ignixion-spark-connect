import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tech Events", href: "#tech-events" },
    { label: "Arts Events", href: "#arts-events" },
    { label: "Schedule", href: "#schedule" },
    { label: "Register", href: "#register" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-card/80 backdrop-blur-lg border border-border shadow-lg" 
            : "bg-transparent"
        } rounded-full px-6 py-3 hidden lg:block`}
      >
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`fixed top-6 right-6 z-50 lg:hidden transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-card/80 backdrop-blur-lg border border-border" 
            : "bg-primary"
        } p-3 rounded-full shadow-lg`}
      >
        {isMobileMenuOpen ? (
          <X size={20} className="text-foreground" />
        ) : (
          <Menu size={20} className={isScrolled ? "text-foreground" : "text-primary-foreground"} />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card/90 backdrop-blur-lg border border-border rounded-3xl p-8 mx-6 max-w-sm w-full">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 py-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => scrollToSection("#register")}
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNavigation;