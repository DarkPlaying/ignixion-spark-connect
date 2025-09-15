import React from "react";
import { Button } from "@/components/ui/button";
import { Code, Laptop, Zap, FileText, Brain, Video, Film, Music, Users, Mic, ChefHat, Palette, Gavel } from "lucide-react";

const RegistrationSection = () => {
  const events = [
    // Technical Events
    { name: "App Development Showcase", icon: Code, color: "border-primary/30 hover:border-primary", type: "Technical" },
    { name: "Web Development Showcase", icon: Laptop, color: "border-secondary/30 hover:border-secondary", type: "Technical" },
    { name: "Hackathon", icon: Zap, color: "border-accent/30 hover:border-accent", type: "Technical" },
    { name: "Paper Presentation", icon: FileText, color: "border-highlight/30 hover:border-highlight", type: "Technical" },
    { name: "Tech Quiz", icon: Brain, color: "border-primary/30 hover:border-primary", type: "Technical" },
    { name: "On-Spot Video Editing", icon: Video, color: "border-secondary/30 hover:border-secondary", type: "Technical" },
    { name: "Short Film", icon: Film, color: "border-accent/30 hover:border-accent", type: "Technical" },
    
    // Non-Technical Events
    { name: "Dance Performance", icon: Music, color: "border-primary/30 hover:border-primary", type: "Creative Arts" },
    { name: "Ramp Walk", icon: Users, color: "border-secondary/30 hover:border-secondary", type: "Creative Arts" },
    { name: "Singing Competition", icon: Mic, color: "border-accent/30 hover:border-accent", type: "Creative Arts" },
    { name: "Instant Cooking", icon: ChefHat, color: "border-highlight/30 hover:border-highlight", type: "Creative Arts" },
    { name: "Face Painting", icon: Palette, color: "border-secondary/30 hover:border-secondary", type: "Creative Arts" },
    { name: "IPL Auction", icon: Gavel, color: "border-primary/30 hover:border-primary", type: "Creative Arts" }
  ];

  const handleRegistration = (eventName: string) => {
    // For now, opening the same form for all events
    // In production, each event would have its own registration form URL
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdY8-wZf3GGy5b0ffDqPxxWDsnZ7QRUghbBNCXt2gfaHL_SRg/viewform', '_blank');
  };

  return (
    <section id="register" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Event Registration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your events and register now! Join IGNIXION'25 and be part of an incredible journey where technology meets creativity.
          </p>
        </div>

        {/* Technical Events */}
        <div className="mb-16 scroll-fade-in">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center text-foreground">
            Technical Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.filter(event => event.type === "Technical").map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.name}
                  className={`bg-gradient-card border-2 rounded-2xl p-6 transition-all duration-300 hover-lift scroll-fade-in ${event.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <Icon size={24} className="text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-foreground">
                      {event.name}
                    </h4>
                  </div>
                  <Button 
                    onClick={() => handleRegistration(event.name)}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-slate-950 font-semibold"
                  >
                    Register Now
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Creative Arts Events */}
        <div className="scroll-fade-in">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center text-foreground">
            Creative Arts Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.filter(event => event.type === "Creative Arts").map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.name}
                  className={`bg-gradient-card border-2 rounded-2xl p-6 transition-all duration-300 hover-lift scroll-fade-in ${event.color}`}
                  style={{ animationDelay: `${(index + 7) * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <Icon size={24} className="text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-display font-semibold text-foreground">
                      {event.name}
                    </h4>
                  </div>
                  <Button 
                    onClick={() => handleRegistration(event.name)}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-slate-950 font-semibold"
                  >
                    Register Now
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* General Call-to-Action */}
        <div className="mt-16 text-center scroll-fade-in">
          <div className="relative bg-gradient-card p-8 md:p-12 rounded-3xl border border-border hover-glow">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-lg animate-pulse"></div>
            <div className="relative z-10">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to showcase your talents? Register for multiple events and maximize your chances of winning!
              </p>
              <Button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdY8-wZf3GGy5b0ffDqPxxWDsnZ7QRUghbBNCXt2gfaHL_SRg/viewform', '_blank')}
                className="text-xl px-12 py-6 font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-2xl hover:shadow-primary/40 hover:scale-110 transition-all duration-500 text-slate-950"
              >
                General Registration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegistrationSection;