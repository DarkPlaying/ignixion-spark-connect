import React from "react";
import { Music, Users, Mic, ChefHat, Palette, Gavel } from "lucide-react";

const NonTechnicalEventsSection = () => {
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
        "All dance styles welcome",
        "Judges' decision is final."
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
        "Judged on presentation, creativity, and confidence",
        "Judges' decision is final."
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
        "Judged on vocal quality, stage presence, and song choice",
        "Judges' decision is final."
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
        "Judged on creativity, taste, hygiene, and presentation",
        "Judges' decision is final."
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
        "Judged on creativity, neatness, and theme relevance",
        "Judges' decision is final."
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

        {/* Events Layout */}
        <div className="space-y-8">
          {/* First Row: Dance, Ramp Walk, Singing */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonTechnicalEvents.slice(0, 3).map((event, index) => {
              const Icon = event.icon;
              
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
                    <div className="space-y-2 min-w-0">
                      <h4 className="font-medium text-foreground text-sm">Key Rules:</h4>
                       <ul 
                         className="m-0 p-[8px_12px_12px_20px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside" 
                         style={{ listStylePosition: 'outside' }}
                       >
                         {event.rules.slice(0, 3).map((rule, ruleIndex) => (
                           <li 
                             key={ruleIndex} 
                             className={`flex items-start gap-2 text-xs mb-[8px] ${ruleIndex === 2 ? 'mb-0' : ''}`}
                           >
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                             <span className="text-muted-foreground min-w-0 break-words">{rule}</span>
                           </li>
                         ))}
                         {!event.rules.slice(0, 3).some(rule => rule.includes("Judges' decision is final")) && (
                           <li className="flex items-start gap-2 text-xs mb-0">
                             <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                             <span className="text-muted-foreground min-w-0 break-words">Judges' decision is final.</span>
                           </li>
                         )}
                       </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row: Instant Cooking and Face Painting centered */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {nonTechnicalEvents.slice(3, 5).map((event, index) => {
                const Icon = event.icon;
                
                return (
                  <div
                    key={event.title}
                    className={`group bg-gradient-to-br ${event.gradient} backdrop-blur-sm p-8 rounded-2xl border border-border hover-lift scroll-fade-in relative overflow-hidden`}
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
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
                      <div className="space-y-2 min-w-0">
                        <h4 className="font-medium text-foreground text-sm">Key Rules:</h4>
                         <ul 
                           className="m-0 p-[8px_12px_12px_20px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside" 
                           style={{ listStylePosition: 'outside' }}
                         >
                           {event.rules.slice(0, 3).map((rule, ruleIndex) => (
                             <li 
                               key={ruleIndex} 
                               className={`flex items-start gap-2 text-xs mb-[8px] ${ruleIndex === 2 ? 'mb-0' : ''}`}
                             >
                               <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                               <span className="text-muted-foreground min-w-0 break-words">{rule}</span>
                             </li>
                           ))}
                           {!event.rules.slice(0, 3).some(rule => rule.includes("Judges' decision is final")) && (
                             <li className="flex items-start gap-2 text-xs mb-0">
                               <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                               <span className="text-muted-foreground min-w-0 break-words">Judges' decision is final.</span>
                             </li>
                           )}
                         </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Third Row: IPL Auction full width */}
          <div>
            {(() => {
              const event = nonTechnicalEvents[5]; // IPL Auction
              const Icon = event.icon;
              
              return (
                <div
                  className={`group bg-gradient-to-br ${event.gradient} backdrop-blur-sm p-6 rounded-2xl border border-border hover-lift scroll-fade-in relative overflow-hidden`}
                  style={{ animationDelay: '0.5s' }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_var(--primary)_1px,_transparent_1px)] bg-[length:24px_24px]" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`${event.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={40} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-foreground">🔥 IPL AUCTION RULES</h3>
                        <div className="flex gap-2 mt-2">
                          <span className="px-3 py-1 bg-card/60 rounded-full text-xs font-medium text-muted-foreground">
                            2 Rounds
                          </span>
                          <span className="px-3 py-1 bg-card/60 rounded-full text-xs font-medium text-muted-foreground">
                            Up to 3 Members
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rules Sections */}
                    <div className="space-y-4 text-sm">
                      {/* General Rules */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span>⚡</span> General Rules
                        </h4>
                        <ul 
                          className="m-0 p-[8px_12px_12px_18px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside text-muted-foreground" 
                          style={{ listStylePosition: 'outside' }}
                        >
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Max 3 members per team</span>
                          </li>
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Event has 2 rounds: Quiz + Auction</span>
                          </li>
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Only calculators allowed (no mobiles/laptops)</span>
                          </li>
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Misbehavior = Disqualification</span>
                          </li>
                          <li className="flex items-start gap-2 mb-0 min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Judges' decision is final</span>
                          </li>
                        </ul>
                      </div>

                      {/* Round 1 */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span>🧠</span> Round 1 – Quiz
                        </h4>
                        <ul 
                          className="m-0 p-[8px_12px_12px_18px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside text-muted-foreground" 
                          style={{ listStylePosition: 'outside' }}
                        >
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">30 questions on cricket, IPL, sports</span>
                          </li>
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Attempt all within time limit</span>
                          </li>
                          <li className="flex items-start gap-2 mb-0 min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Top 10 teams qualify for Auction</span>
                          </li>
                        </ul>
                      </div>

                      {/* Round 2 */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span>💰</span> Round 2 – Auction
                        </h4>
                        <ul 
                          className="m-0 p-[8px_12px_12px_18px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside text-muted-foreground" 
                          style={{ listStylePosition: 'outside' }}
                        >
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Budget: ₹60 Crores per team</span>
                          </li>
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Buy exactly 8 players: 3 Batters, 2 Bowlers, 2 All-rounders, 1 Wicket-keeper</span>
                          </li>
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Player Rules: 2 Foreign, 5 Indian, 1 Uncapped, 1 Star Player (compulsory)</span>
                          </li>
                          <li className="flex items-start gap-2 mb-0 min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Teams not meeting criteria = eliminated</span>
                          </li>
                        </ul>
                      </div>

                      {/* Scoring */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span>🌟</span> Scoring & Winner
                        </h4>
                        <ul 
                          className="m-0 p-[8px_12px_12px_18px] sm:pl-5 leading-[1.55] sm:leading-[1.6] overflow-wrap-anywhere whitespace-normal list-outside text-muted-foreground" 
                          style={{ listStylePosition: 'outside' }}
                        >
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Players have Fantasy Points</span>
                          </li>
                          <li className="flex items-start gap-2 mb-[8px] min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Team score = Fantasy Points + Balance left</span>
                          </li>
                          <li className="flex items-start gap-2 mb-0 min-w-0">
                            <span className="flex-shrink-0">•</span>
                            <span className="break-words">Highest valid score = Winner</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonTechnicalEventsSection;