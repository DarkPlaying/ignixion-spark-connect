import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const EventGlanceSection = () => {
  const eventDetails = [
    {
      icon: Calendar,
      label: "Date",
      value: "25th and 26th SEPTEMBER 2025",
      color: "text-primary"
    },
    {
      icon: Clock,
      label: "Time",
      value: "10:00 AM – 01:30 PM",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "Vel Tech Ranga Sanku Arts College",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Event at a Glance
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about IGNIXION'25
          </p>
        </div>

        {/* Event Details Card */}
        <div className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-border hover-glow scroll-fade-in">
          <div className="space-y-8">
            {eventDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label}>
                  <div className="flex items-start gap-4">
                    <div className={`${detail.color} mt-1 flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">
                        {detail.label}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                  
                  {/* Add separator between items except for the last one */}
                  {index < eventDetails.length - 1 && (
                    <div className="mt-8">
                      <Separator className="bg-border/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Mark your calendars and get ready for an unforgettable experience!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGlanceSection;