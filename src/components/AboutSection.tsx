import React from "react";
import { Lightbulb, Zap, Users } from "lucide-react";
import EventGlanceSection from "./EventGlanceSection";
const AboutSection = () => {
  const features = [{
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge ideas meet creative expression",
    color: "text-primary"
  }, {
    icon: Zap,
    title: "Creativity",
    description: "Where artistic vision sparks technological solutions",
    color: "text-secondary"
  }, {
    icon: Users,
    title: "Collaboration",
    description: "Building bridges between tech minds and creative souls",
    color: "text-accent"
  }];
  return (
    <>
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-card to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About IGNIXION'25
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">IGNIXION ’25 is not just an event—it’s a fusion of Technology and Arts, designed to spark creativity, innovation, and collaboration. This inter-college festival provides a vibrant platform for students to showcase their talents, exchange ideas, and build meaningful connections. </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <div key={feature.title} className="bg-gradient-card p-8 rounded-2xl border border-border hover-lift hover-glow group scroll-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className={`${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={48} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>;
        })}
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center scroll-fade-in">
          <div className="bg-gradient-card p-12 rounded-3xl border border-border max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-6 text-foreground">
              Our Vision
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create a dynamic ecosystem where technological innovation meets artistic 
              expression, fostering a new generation of creators who seamlessly blend 
              logic with imagination, code with canvas, and data with dreams.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Event at a Glance Section */}
    <EventGlanceSection />
    </>
  );
};
export default AboutSection;