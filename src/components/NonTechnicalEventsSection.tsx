import React, { useState } from "react";
import { Music, Users, Mic, ChefHat, Palette, Gavel } from "lucide-react";

const NonTechnicalEventsSection = () => {
  const [isIPLFlipped, setIsIPLFlipped] = useState(false);
  const nonTechnicalEvents = [
    {
      icon: Music,
      title: "Dance Performance",
      duration: "3-5 minutes",
      teamSize: "Group/Solo",
      description: "Express yourself through movement and rhythm in this vibrant dance competition.",
      rules: [
        "Performance duration: 3-5 minutes",
        "Both group and solo performances welcome",
        "Costumes and props encouraged",
        "Judged on choreography, creativity, and stage presence",
        "All dance styles welcome"
      ],
      gradient: "from-primary/20 to-secondary/20",
      iconColor: "text-primary"
    },
    {
      icon: Users,
      title: "Ramp Walk",
      duration: "3 minutes",
      teamSize: "4-6 members",
      description: "Showcase your style and confidence on the runway with creative themes and presentations.",
      rules: [
        "Performance time: 3 minutes maximum",
        "Team size: 4-6 members",
        "Appropriate dress code required",
        "Props and accessories allowed",
        "Judged on presentation, creativity, and confidence"
      ],
      gradient: "from-secondary/20 to-accent/20",
      iconColor: "text-secondary"
    },
    {
      icon: Mic,
      title: "Singing Competition",
      duration: "3-4 minutes",
      teamSize: "Solo/Duet",
      description: "Let your voice shine in this melodious competition celebrating musical talent.",
      rules: [
        "Song duration: 3-4 minutes",
        "Solo or duet performances",
        "Karaoke tracks allowed (submit MP3)",
        "Original compositions welcome",
        "Judged on vocal quality, stage presence, and song choice"
      ],
      gradient: "from-accent/20 to-highlight/20",
      iconColor: "text-accent"
    },
    {
      icon: ChefHat,
      title: "Instant Cooking",
      duration: "45 minutes",
      teamSize: "2 members",
      description: "Create culinary magic under pressure in this fast-paced cooking challenge.",
      rules: [
        "Cooking time: 45 minutes",
        "Team of 2 members",
        "Bring your own ingredients and basic utensils",
        "Kitchen facilities and gas provided",
        "Judged on creativity, taste, hygiene, and presentation"
      ],
      gradient: "from-highlight/20 to-primary/20",
      iconColor: "text-highlight"
    },
    {
      icon: Palette,
      title: "Face Painting",
      duration: "45 minutes",
      teamSize: "Individual",
      description: "Transform faces into canvases with artistic creativity and skill.",
      rules: [
        "Time limit: 45 minutes",
        "Individual participation",
        "Theme announced on the spot",
        "Bring your own face painting materials",
        "Judged on creativity, neatness, and theme relevance"
      ],
      gradient: "from-secondary/20 to-primary/20",
      iconColor: "text-secondary"
    },
    {
      icon: Gavel,
      title: "IPL Auction",
      duration: "2 Rounds",
      teamSize: "Up to 3 Members",
      description: "Test your cricket knowledge and strategy skills in IGNIXION's IPL Auction. Compete in a quiz round, then build your dream squad in an exciting live auction.",
      rules: [
        "Each team can have a maximum of 3 members",
        "Round 1: 30 questions on cricket, IPL, and general sports knowledge",
        "Top 10 teams advance to Round 2: IPL Auction Round",
        "Each team gets ₹60 Crores to build a squad of 8 players",
        "Squad requirements: 3 Batters, 2 Bowlers, 2 All-rounders, 1 Wicket-keeper", 
        "Player rules: 2 Foreign Players, 5 Indian Players, 1 Uncapped Player, 1 Star Player (mandatory)",
        "No electronic gadgets allowed except calculators",
        "Teams failing to meet squad criteria will be eliminated",
        "Winner = Highest total score (Fantasy Points + Balance Amount)",
        "Judges' decision is final and binding"
      ],
      gradient: "from-primary/20 to-accent/20",
      iconColor: "text-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/10 to-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Creative Arts Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unleash your artistic spirit and creative talents in these expressive competitions
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonTechnicalEvents.map((event, index) => {
            const Icon = event.icon;
            
            // Special handling for IPL Auction with flip card
            if (event.title === "IPL Auction") {
              return (
                <div
                  key={event.title}
                  className="group perspective-1000 scroll-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                      isIPLFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover-lift relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_var(--primary)_1px,_transparent_1px)] bg-[length:24px_24px]" />
                      
                      {/* Front Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Icon */}
                        <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={40} />
                        </div>

                        {/* Event Info */}
                        <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                          {event.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-card/60 rounded-full text-xs font-medium text-muted-foreground">
                            {event.duration}
                          </span>
                          <span className="px-3 py-1 bg-card/60 rounded-full text-xs font-medium text-muted-foreground">
                            {event.teamSize}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                          Test your cricket knowledge and build your dream squad in IGNIXION's thrilling IPL Auction.
                        </p>

                        {/* Flip Button */}
                        <button
                          onClick={() => setIsIPLFlipped(true)}
                          className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                        >
                          Tap to View More
                        </button>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm p-6 rounded-2xl border border-border relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_var(--primary)_1px,_transparent_1px)] bg-[length:24px_24px]" />
                      
                      {/* Back Content */}
                      <div className="relative z-10 h-full overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-display font-bold text-foreground">🔥 IPL AUCTION RULES</h3>
                          <button
                            onClick={() => setIsIPLFlipped(false)}
                            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                          >
                            ← Back
                          </button>
                        </div>
                        
                        <div className="space-y-4 text-xs">
                          {/* General Rules */}
                          <div>
                            <h4 className="text-primary font-semibold mb-2">⚡ General Rules</h4>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• Max 3 members per team</li>
                              <li>• Event has 2 rounds: Quiz + Auction</li>
                              <li>• Only calculators allowed (no mobiles/laptops)</li>
                              <li>• Misbehavior = Disqualification</li>
                              <li>• Judges' decision is final</li>
                            </ul>
                          </div>

                          {/* Quiz Round */}
                          <div>
                            <h4 className="text-accent font-semibold mb-2">🧠 Round 1 – Quiz</h4>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• 30 questions on cricket, IPL, sports</li>
                              <li>• Attempt all within time limit</li>
                              <li>• Top 10 teams qualify for Auction</li>
                            </ul>
                          </div>

                          {/* Auction Round */}
                          <div>
                            <h4 className="text-highlight font-semibold mb-2">💰 Round 2 – Auction</h4>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• Budget: ₹60 Crores per team</li>
                              <li>• Buy exactly 8 players: 3 Batters, 2 Bowlers, 2 All-rounders, 1 Wicket-keeper</li>
                              <li>• Player Rules: 2 Foreign, 5 Indian, 1 Uncapped, 1 Star Player (compulsory)</li>
                              <li>• Teams not meeting criteria = eliminated</li>
                            </ul>
                          </div>

                          {/* Scoring */}
                          <div>
                            <h4 className="text-secondary font-semibold mb-2">🌟 Scoring & Winner</h4>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• Players have Fantasy Points</li>
                              <li>• Team score = Fantasy Points + Balance left</li>
                              <li>• Highest valid score = Winner</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            // Regular cards for other events
            return (
              <div
                key={event.title}
                className={`group bg-gradient-to-br ${event.gradient} backdrop-blur-sm p-8 rounded-2xl border border-border hover-lift scroll-fade-in relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_var(--primary)_1px,_transparent_1px)] bg-[length:24px_24px]" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`${event.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={40} />
                  </div>

                  {/* Event Info */}
                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-card/60 rounded-full text-xs font-medium text-muted-foreground">
                      {event.duration}
                    </span>
                    <span className="px-3 py-1 bg-card/60 rounded-full text-xs font-medium text-muted-foreground">
                      {event.teamSize}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Rules */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Key Rules:</h4>
                    <ul className="space-y-1">
                      {event.rules.slice(0, 3).map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{rule}</span>
                        </li>
                      ))}
                    </ul>
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

export default NonTechnicalEventsSection;