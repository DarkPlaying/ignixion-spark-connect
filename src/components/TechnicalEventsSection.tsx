import React, { useState } from "react";
import { ChevronDown, Code, Laptop, Zap, FileText, Brain, Video, Film } from "lucide-react";

const TechnicalEventsSection = () => {
  const [openEvent, setOpenEvent] = useState<number | null>(null);

  const technicalEvents = [
    {
      icon: Code,
      title: "App Development Showcase",
      teamSize: "2-4 members",
      description: "Showcase your mobile application development skills with original, innovative projects.",
      rules: [
        "Team size: 2-4 members maximum",
        "Original projects only - no plagiarism",
        "Follow the allotted time and theme guidelines",
        "Projects will be showcased to judges and staff",
        "Judged on innovation, functionality, and presentation",
        "Judges' decision is final."
      ],
      color: "border-primary/30 hover:border-primary"
    },
    {
      icon: Laptop,
      title: "Web Development Showcase",
      teamSize: "Individual or up to 3 members",
      description: "Create stunning web applications that demonstrate your frontend and backend expertise.",
      rules: [
        "Individual participation or teams up to 3 members",
        "Must be original work with proper documentation",
        "Responsive design and cross-browser compatibility required",
        "Showcase to panel of industry experts",
        "Evaluation based on creativity, technical implementation, and user experience",
        "Judges' decision is final."
      ],
      color: "border-secondary/30 hover:border-secondary"
    },
    {
      icon: Zap,
      title: "Hackathon",
      teamSize: "2-5 members",
      description: "Fast-paced problem-solving challenge with live problem statements and real-time judging.",
      rules: [
        "Team size: 2-5 members",
        "Problem statement projected live on event day",
        "Limited time to develop solution",
        "Judged on speed, accuracy, and solution effectiveness",
        "No external help or pre-written code allowed",
        "Judges' decision is final."
      ],
      color: "border-accent/30 hover:border-accent"
    },
    {
      icon: FileText,
      title: "Paper Presentation",
      teamSize: "Max 2 members",
      description: "Present your research and innovative ideas in a professional academic format.",
      rules: [
        "Maximum 2 members per team",
        "Submit paper by deadline (no extensions)",
        "10-15 minute presentation + 5 minute Q&A",
        "Judged on quality of research, clarity of presentation, and originality",
        "IEEE format required for paper submission",
        "Judges' decision is final."
      ],
      color: "border-highlight/30 hover:border-highlight"
    },
    {
      icon: Brain,
      title: "Tech Quiz",
      teamSize: "Individual only",
      description: "Test your knowledge across various technical domains in this rapid-fire quiz competition.",
      rules: [
        "Individual participation only",
        "Covers programming, algorithms, current tech trends",
        "Multiple rounds: screening, rapid-fire, buzzer round",
        "Points awarded for correct answers",
        "Negative marking may apply in final rounds",
        "Judges' decision is final."
      ],
      color: "border-primary/30 hover:border-primary"
    },
    {
      icon: Video,
      title: "On-Spot Video Editing",
      teamSize: "Individual",
      description: "Create compelling video content within strict time constraints using provided footage.",
      rules: [
        "Individual participation",
        "1 hour time limit",
        "Raw footage and theme provided on spot",
        "Bring your own editing software and plugins",
        "Judged on creativity, storytelling, and technical execution",
        "Judges' decision is final."
      ],
      color: "border-secondary/30 hover:border-secondary"
    },
    {
      icon: Film,
      title: "Short Film",
      teamSize: "Team (2–5 members)",
      description: "Showcase your creativity by producing a short film within the given theme and time limit.",
      rules: [
        "Team participation: 2–5 members",
        "Time limit: 48 hours for film submission",
        "Theme will be announced on the spot",
        "Maximum film duration: 7 minutes",
        "Bring your own filming and editing equipment",
        "Judging criteria: originality, storytelling, cinematography, editing, and overall impact",
        "Judges' decision is final."
      ],
      color: "border-accent/30 hover:border-accent"
    }
  ];

  const toggleEvent = (index: number) => {
    setOpenEvent(openEvent === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Challenge your technical prowess and showcase your skills in these cutting-edge competitions
          </p>
        </div>

        {/* Events Accordion */}
        <div className="space-y-6">
          {technicalEvents.map((event, index) => {
            const Icon = event.icon;
            const isOpen = openEvent === index;
            
            return (
              <div
                key={event.title}
                className={`bg-gradient-card border-2 rounded-2xl transition-all duration-500 overflow-hidden scroll-fade-in ${event.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Header */}
                <button
                  onClick={() => toggleEvent(index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-muted/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <Icon size={24} className="text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {event.teamSize}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>

                {/* Event Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Rules & Guidelines:</h4>
                      <ul className="space-y-2">
                        {event.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalEventsSection;