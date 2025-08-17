import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Mail, Phone, User, Users, FileText } from "lucide-react";
const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    event: "",
    additionalInfo: ""
  });
  const events = ["App Development Showcase", "Web Development Showcase", "Hackathon", "Paper Presentation", "Tech Quiz", "On-Spot Video Editing", "Dance Performance", "Ramp Walk", "Singing Competition", "Instant Cooking", "Face Painting"];
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  return (
    <section id="register" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Register Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join IGNIXION '25 and be part of an incredible journey where technology meets creativity.
          </p>
        </div>

        {/* Registration Form */}
        <div className="scroll-fade-in">
          <div className="relative bg-gradient-card p-8 rounded-3xl border border-border hover-glow">
            {/* Pulsing Glow Effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-lg animate-pulse"></div>
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground mb-2">
                  <User size={16} />
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-background/50 border-border"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 text-foreground mb-2">
                  <Mail size={16} />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-background/50 border-border"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2 text-foreground mb-2">
                  <Phone size={16} />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-background/50 border-border"
                  required
                />
              </div>
              <div>
                <Label htmlFor="teamName" className="flex items-center gap-2 text-foreground mb-2">
                  <Users size={16} />
                  Team Name (Optional)
                </Label>
                <Input
                  id="teamName"
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => handleInputChange("teamName", e.target.value)}
                  className="bg-background/50 border-border"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="event" className="flex items-center gap-2 text-foreground mb-2">
                <FileText size={16} />
                Select Event
              </Label>
              <Select onValueChange={(value) => handleInputChange("event", value)}>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue placeholder="Choose your event" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event} value={event}>
                      {event}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="additionalInfo" className="flex items-center gap-2 text-foreground mb-2">
                <FileText size={16} />
                Additional Information
              </Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                className="bg-background/50 border-border min-h-[120px]"
                placeholder="Tell us anything else we should know..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:scale-[1.02] transition-all duration-300 text-primary-foreground font-semibold py-3"
            >
              Complete Registration
              </Button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegistrationSection;