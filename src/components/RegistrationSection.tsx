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
  return;
};
export default RegistrationSection;