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
  return <section className="py-20 px-6 bg-gradient-to-br from-card to-muted/20">
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
        <div className="bg-gradient-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl scroll-fade-in">For Register: 
https://docs.google.com/forms/d/e/1FAIpQLSfg6ZqtYQ2CMef4qSCj5p2I8v66uZ4AuPz0VOV7oK2Y9MkfRQ/viewform?usp=dialog</div>
      </div>
    </section>;
};
export default RegistrationSection;