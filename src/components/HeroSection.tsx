import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = ["Innovate", "Create", "Connect"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 3}s`
      }} />)}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-[27px] px-[26px] py-0">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 animate-glow">
          <span className="bg-gradient-primary bg-clip-text text-transparent mx-0 px-[3px] py-0 my-[100px]">
            IGNIXION'25
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium mx-0 my-[30px]">
          Where Technology Sparks Creativity
        </h2>
        
        {/* Animated Tagline - Centered with Glowing Gradient */}
        <div className="h-16 md:h-20 mb-12 flex items-center justify-center my-[50px]">
          <div className="relative">
            {phrases.map((phrase, index) => <span key={phrase} className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${index === currentPhrase ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"}`}>
                <span className="text-3xl md:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent" style={{
              filter: 'drop-shadow(0 0 10px rgba(139, 69, 255, 0.6)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))',
              textShadow: '0 0 30px rgba(139, 69, 255, 0.5)'
            }}>
                  {phrase}
                </span>
              </span>)}
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button onClick={scrollToRegister} variant="hero" size="lg" className="text-lg px-8 py-6">🔥 Join the Fusion</Button>
          <Button onClick={scrollToRegister} variant="outline" size="lg" className="text-lg px-8 py-6">Dive Into the Action</Button>
        </div>
        
        {/* Centered Down Arrow - 40px below buttons */}
        <div className="hero-arrow flex justify-center mt-10">
          <button onClick={scrollToAbout} className="group flex items-center justify-center animate-bounce hover:scale-110 transition-all duration-500" aria-label="Scroll to about section">
            <ChevronDown size={40} className="text-white drop-shadow-lg" style={{
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
            animation: 'bounce 2s infinite'
          }} />
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;