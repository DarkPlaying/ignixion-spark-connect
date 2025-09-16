import React from "react";
import { Calendar, Clock, MapPin, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScheduleSection = () => {
  const day1Schedule = [
    {
      time: "09:00 AM",
      title: "Registration Opens",
      description: "Welcome participants and team check-in",
      icon: Users,
      status: "completed"
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Event inauguration and rules briefing",
      icon: MapPin,
      status: "current"
    },
    {
      time: "11:00 AM",
      title: "Technical Events Begin",
      description: "Hackathon, Paper Presentation, and Quiz rounds",
      icon: Clock,
      status: "upcoming"
    },
    {
      time: "01:00 PM",
      title: "Snack Break",
      description: "Networking session and refreshments",
      icon: Clock,
      status: "upcoming"
    },
    {
      time: "01:30 PM",
      title: "Closing Ceremony",
      description: "Final remarks, appreciation to participants, and event wrap-up.",
      icon: Award,
      status: "upcoming"
    }
  ];

  const day2Schedule = [
    {
      time: "09:00 AM",
      title: "Registration Opens",
      description: "Welcome participants and team check-in",
      icon: Users,
      status: "completed"
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Event inauguration and rules briefing",
      icon: MapPin,
      status: "current"
    },
    {
      time: "11:00 AM",
      title: "Technical Events Begin",
      description: "Hackathon, Paper Presentation, and Quiz rounds",
      icon: Clock,
      status: "upcoming"
    },
    {
      time: "12:30 PM",
      title: "Lunch Break",
      description: "Networking session and refreshments",
      icon: Clock,
      status: "upcoming"
    },
    {
      time: "01:00 PM",
      title: "Award Ceremony",
      description: "Prize distribution to winners, closing remarks, and celebration of the IGNIXION'25 journey.",
      icon: Award,
      status: "upcoming"
    },
    {
      time: "01:30 PM",
      title: "Closing Ceremony",
      description: "Final remarks, appreciation to participants, and event wrap-up.",
      icon: Award,
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-highlight border-highlight";
      case "current":
        return "text-primary border-primary animate-pulse";
      default:
        return "text-muted-foreground border-border";
    }
  };

  const getBackgroundColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-highlight/10";
      case "current":
        return "bg-primary/10";
      default:
        return "bg-card";
    }
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-background via-background/95 to-primary/5 overflow-hidden">
      {/* Particle Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-highlight rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-xl text-muted-foreground">
            Your complete timeline for the IGNIXION'25 experience
          </p>
        </div>

        {/* Day 1 Schedule */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Day-1
            </h3>
          </div>
          
          {/* Glowing Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent shadow-lg shadow-primary/20" />

          {/* Schedule Items */}
          <div className="space-y-12">
            {day1Schedule.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div
                  key={`day1-${item.title}`}
                  className={`relative flex items-center gap-8 group scroll-fade-in opacity-0 translate-y-8`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animation: `fade-in 0.8s ease-out ${index * 0.2}s forwards, slideUp 0.8s ease-out ${index * 0.2}s forwards`
                  }}
                >
                  {/* Glowing Timeline Dot */}
                  <div className={`relative z-10 w-20 h-20 rounded-full border-4 ${getStatusColor(item.status)} ${getBackgroundColor(item.status)} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                    <Icon size={28} />
                    {item.status === "current" && (
                      <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-ping"></div>
                    )}
                  </div>

                  {/* Futuristic Content Card */}
                  <div className={`flex-1 p-8 rounded-3xl border-2 ${
                    item.status === "current" 
                      ? "border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 shadow-2xl shadow-primary/20" 
                      : "border-border/50 bg-gradient-to-r from-card/80 to-card/40 backdrop-blur-sm"
                  } hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 transition-all duration-500 group-hover:border-primary/30`}>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-6">
                        <span className={`text-2xl md:text-3xl font-display font-bold ${
                          item.status === "current" 
                            ? "text-primary" 
                            : "text-foreground"
                        }`}>
                          {item.time}
                        </span>
                        {item.status === "current" && (
                          <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full animate-pulse font-semibold shadow-lg">
                            LIVE NOW
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Day 2 Schedule */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Day-2
            </h3>
          </div>
          
          {/* Glowing Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-primary shadow-lg shadow-secondary/20" />

          {/* Schedule Items */}
          <div className="space-y-12">
            {day2Schedule.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div
                  key={`day2-${item.title}`}
                  className={`relative flex items-center gap-8 group scroll-fade-in opacity-0 translate-y-8`}
                  style={{ 
                    animationDelay: `${(index + 5) * 0.2}s`,
                    animation: `fade-in 0.8s ease-out ${(index + 5) * 0.2}s forwards, slideUp 0.8s ease-out ${(index + 5) * 0.2}s forwards`
                  }}
                >
                  {/* Glowing Timeline Dot */}
                  <div className={`relative z-10 w-20 h-20 rounded-full border-4 ${getStatusColor(item.status)} ${getBackgroundColor(item.status)} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                    <Icon size={28} />
                    {item.status === "current" && (
                      <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-ping"></div>
                    )}
                  </div>

                  {/* Futuristic Content Card */}
                  <div className={`flex-1 p-8 rounded-3xl border-2 ${
                    item.status === "current" 
                      ? "border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 shadow-2xl shadow-primary/20" 
                      : "border-border/50 bg-gradient-to-r from-card/80 to-card/40 backdrop-blur-sm"
                  } hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 transition-all duration-500 group-hover:border-primary/30`}>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-6">
                        <span className={`text-2xl md:text-3xl font-display font-bold ${
                          item.status === "current" 
                            ? "text-primary" 
                            : "text-foreground"
                        }`}>
                          {item.time}
                        </span>
                        {item.status === "current" && (
                          <span className="text-sm px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full animate-pulse font-semibold shadow-lg">
                            LIVE NOW
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pro Registration Box */}
        <div className="scroll-fade-in">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border-2 border-primary/30 backdrop-blur-sm shadow-2xl shadow-primary/20 group">
            {/* Pulsing Glow Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 animate-pulse"></div>
            
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Join IGNIXION'25
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to spark your creativity? Register now and be part of this incredible journey
              </p>
              
              <Button
                variant="hero"
                size="lg"
                className="text-xl px-12 py-6 font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-2xl hover:shadow-primary/40 hover:scale-110 transition-all duration-500 animate-pulse"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScqY-3U-l-ePGHdlXUZHvzklz1NpswUExBSDlm_1GcCo6xw9Q/viewform?usp=dialog', '_blank')}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>

        {/* Event Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 scroll-fade-in">
          {[
            { label: "Total Events", value: "10+", color: "text-primary" },
            { label: "Expected Participants", value: "500+", color: "text-secondary" },
            { label: "Prize Pool", value: "₹50K+", color: "text-accent" },
            { label: "Duration", value: "2 Day", color: "text-highlight" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className={`text-3xl md:text-4xl font-display font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ScheduleSection;