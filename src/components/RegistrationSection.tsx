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

  const events = [
    "App Development Showcase",
    "Web Development Showcase", 
    "Hackathon",
    "Paper Presentation",
    "Tech Quiz",
    "On-Spot Video Editing",
    "Dance Performance",
    "Ramp Walk",
    "Singing Competition",
    "Instant Cooking",
    "Face Painting"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-card to-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Join IGNIXION
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to spark your creativity? Register now and be part of this incredible journey
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl scroll-fade-in">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                  <User size={16} />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-input/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                  <Mail size={16} />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-input/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Contact and Team Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                  <Phone size={16} />
                  Contact Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-input/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamName" className="text-foreground font-medium flex items-center gap-2">
                  <Users size={16} />
                  Team Name (if applicable)
                </Label>
                <Input
                  id="teamName"
                  type="text"
                  placeholder="Your awesome team name"
                  value={formData.teamName}
                  onChange={(e) => handleInputChange("teamName", e.target.value)}
                  className="bg-input/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Event Selection */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium flex items-center gap-2">
                <FileText size={16} />
                Select Event *
              </Label>
              <Select onValueChange={(value) => handleInputChange("event", value)}>
                <SelectTrigger className="bg-input/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300">
                  <SelectValue placeholder="Choose your event" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {events.map((event) => (
                    <SelectItem key={event} value={event} className="hover:bg-accent/50">
                      {event}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <Label htmlFor="additionalInfo" className="text-foreground font-medium">
                Additional Information
              </Label>
              <Textarea
                id="additionalInfo"
                placeholder="Tell us about your experience, expectations, or any special requirements..."
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                className="bg-input/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 min-h-[100px]"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <Label className="text-foreground font-medium flex items-center gap-2">
                <Upload size={16} />
                Upload Documents (Optional)
              </Label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors duration-300 bg-muted/20">
                <Upload size={32} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">
                  Drop your files here or click to browse
                </p>
                <p className="text-sm text-muted-foreground">
                  Support for paper submissions, portfolio files, etc.
                </p>
                <Button variant="outline" className="mt-4">
                  Choose Files
                </Button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full text-lg py-6 font-semibold"
              >
                Register for IGNIXION
              </Button>
            </div>

            {/* Terms */}
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              By registering, you agree to abide by the event rules and regulations. 
              We're excited to have you join this incredible experience!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;