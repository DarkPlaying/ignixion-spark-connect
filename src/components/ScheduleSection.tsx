import React from "react";
import { Calendar, Clock, MapPin, Award } from "lucide-react";

const ScheduleSection = () => {
  const scheduleItems = [
    {
      time: "09:00 AM",
      title: "Registration Opens",
      description: "Welcome participants and team check-in",
      icon: Calendar,
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
      title: "Lunch Break",
      description: "Networking session and refreshments",
      icon: Clock,
      status: "upcoming"
    },
    {
      time: "02:00 PM",
      title: "Creative Arts Events",
      description: "Dance, Singing, Cooking, and Face Painting",
      icon: Clock,
      status: "upcoming"
    },
    {
      time: "04:00 PM",
      title: "Preliminary Results",
      description: "Announcement of finalists",
      icon: Clock,
      status: "upcoming"
    },
    {
      time: "05:00 PM",
      title: "Final Rounds",
      description: "Final presentations and performances",
      icon: Clock,
      status: "upcoming"
    },
    {
      time: "07:00 PM",
      title: "Award Ceremony",
      description: "Prize distribution and closing ceremony",
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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-xl text-muted-foreground">
            Your complete timeline for the IGNIXION experience
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Schedule Items */}
          <div className="space-y-8">
            {scheduleItems.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div
                  key={item.title}
                  className={`relative flex items-center gap-8 group scroll-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${getStatusColor(item.status)} ${getBackgroundColor(item.status)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 p-6 rounded-2xl border-2 border-border hover-lift ${getBackgroundColor(item.status)} transition-all duration-300`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className={`text-sm font-mono font-medium px-3 py-1 rounded-full ${
                            item.status === "current" 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {item.time}
                          </span>
                          {item.status === "current" && (
                            <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full animate-pulse">
                              LIVE NOW
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 scroll-fade-in">
          {[
            { label: "Total Events", value: "10+", color: "text-primary" },
            { label: "Expected Participants", value: "500+", color: "text-secondary" },
            { label: "Prize Pool", value: "₹50K+", color: "text-accent" },
            { label: "Duration", value: "1 Day", color: "text-highlight" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-gradient-card rounded-2xl border border-border">
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