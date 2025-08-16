import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = ["Innovate", "Create", "Connect"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 animate-glow">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            IGNIXION
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
          Where Technology Sparks Creativity
        </h2>
        
        {/* Animated Tagline */}
        <div className="h-16 md:h-20 mb-12 flex items-center justify-center">
          <span className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
            {phrases.map((phrase, index) => (
              <span
                key={phrase}
                className={`absolute transition-all duration-700 ease-in-out ${
                  index === currentPhrase
                    ? "opacity-100 transform translate-y-0 text-glow"
                    : "opacity-0 transform translate-y-4"
                } ${
                  index === 0 ? "text-primary" : 
                  index === 1 ? "text-secondary" : "text-accent"
                }`}
              >
                {phrase}
              </span>
            ))}
          </span>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Explore Events
          </Button>
        </div>
        
        {/* Centered Scroll Arrow - 30px below buttons */}
        <div className="hero-arrow flex justify-center mt-8">
          <button
            onClick={scrollToAbout}
            className="group flex items-center justify-center animate-bounce hover:animate-pulse transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <ChevronDown 
              size={40} 
              className="text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(139, 69, 255, 0.7)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.7)) drop-shadow(0 0 24px rgba(236, 72, 153, 0.5))'
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;