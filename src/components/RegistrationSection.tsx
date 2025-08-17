import React from "react";
import { Button } from "@/components/ui/button";

const RegistrationSection = () => {
  return (
    <section id="register" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Call-to-Action Box */}
        <div className="scroll-fade-in">
          <div className="relative bg-gradient-card p-12 md:p-16 rounded-3xl border border-border hover-glow">
            {/* Pulsing Glow Effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-lg animate-pulse"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Register Now
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
                Join IGNIXION '25 and be part of an incredible journey where technology meets creativity.
              </p>
              
              <Button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfg6ZqtYQ2CMef4qSCj5p2I8v66uZ4AuPz0VOV7oK2Y9MkfRQ/viewform?usp=dialog', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 text-lg rounded-2xl shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300"
              >
                Complete Registration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegistrationSection;