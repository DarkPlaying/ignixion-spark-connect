import React from "react";
import { Button } from "@/components/ui/button";
const RegistrationSection = () => {
  return <section id="register" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
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
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">Ready to spark your creativity? Register now and be part of this incredible journey . Join IGNIXION'25 and be part of an incredible journey where technology meets creativity.</p>
              
              <Button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScqY-3U-l-ePGHdlXUZHvzklz1NpswUExBSDlm_1GcCo6xw9Q/viewform?usp=dialog', '_blank')} className="text-xl px-12 py-6 font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-2xl hover:shadow-primary/40 hover:scale-110 transition-all duration-500 animate-pulse text-slate-950">Register Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default RegistrationSection;