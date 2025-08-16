import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Globe } from "lucide-react";
const ContactSection = () => {
  const organizers = [{
    name: "Sarah Chen",
    role: "Event Director",
    email: "sarah@ignixion.com",
    phone: "+91 98765 43210",
    image: "/api/placeholder/80/80"
  }, {
    name: "Alex Rodriguez",
    role: "Technical Lead",
    email: "alex@ignixion.com",
    phone: "+91 98765 43211",
    image: "/api/placeholder/80/80"
  }, {
    name: "Priya Sharma",
    role: "Creative Director",
    email: "priya@ignixion.com",
    phone: "+91 98765 43212",
    image: "/api/placeholder/80/80"
  }];
  const socialLinks = [{
    icon: Instagram,
    label: "Instagram",
    href: "#",
    color: "hover:text-pink-500"
  }, {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    color: "hover:text-blue-400"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    color: "hover:text-blue-600"
  }, {
    icon: Globe,
    label: "Website",
    href: "#",
    color: "hover:text-primary"
  }];
  return <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? Need assistance? Our team is here to help you make the most of IGNIXION
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 scroll-fade-in">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                Event Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Venue</h4>
                    <p className="text-muted-foreground">
                      Tech Innovation Center<br />
                      Silicon Valley Campus<br />
                      Bangalore, Karnataka 560100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">General Inquiries</h4>
                    <p className="text-muted-foreground">
                      info@ignixion.com<br />
                      support@ignixion.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Helpline</h4>
                    <p className="text-muted-foreground">
                      +91 98765 43200<br />
                      Available 9 AM - 8 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map(social => {
                const Icon = social.icon;
                return <Button key={social.label} variant="outline" size="icon" className={`transition-all duration-300 ${social.color} hover:scale-110`} asChild>
                      <a href={social.href} aria-label={social.label}>
                        <Icon size={20} />
                      </a>
                    </Button>;
              })}
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Stay updated with the latest announcements, behind-the-scenes content, 
                and highlights from IGNIXION!
              </p>
            </div>
          </div>

          {/* Organizers */}
          <div className="scroll-fade-in">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">
                Meet the Organizers
              </h3>
              
              <div className="space-y-6">
                {organizers.map((organizer, index) => <div key={organizer.name} className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors duration-300" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                      {organizer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{organizer.name}</h4>
                      <p className="text-sm text-primary mb-2">{organizer.role}</p>
                      
                      <div className="flex flex-col gap-1">
                        <a href={`mailto:${organizer.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
                          <Mail size={14} />
                          {organizer.email}
                        </a>
                        <a href={`tel:${organizer.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
                          <Phone size={14} />
                          {organizer.phone}
                        </a>
                      </div>
                    </div>
                  </div>)}
              </div>

              {/* Quick Contact */}
              
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center scroll-fade-in">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Thank You for Being Part of IGNIXION</h3>
            <p className="text-muted-foreground mb-6">We can’t wait to see your creativity and innovation shine. ✨
Stay tuned for updates, and let’s spark something extraordinary together!</p>
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;