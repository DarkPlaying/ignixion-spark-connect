import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Globe } from "lucide-react";
const ContactSection = () => {
  const staffCoordinators = [{
    name: "Mrs. R. GAYATHRI",
    role: "Staff Coordinator",
    phone: "9789098326"
  }, {
    name: "Mrs. R. SOUNDHARYA DEVI", 
    role: "Staff Coordinator",
    phone: "8610253193"
  }];

  const studentCoordinators = [{
    name: "PIOUS LARA I",
    role: "Student Coordinator",
    phone: "8124991847"
  }, {
    name: "PARVEEN KHAN A",
    role: "Student Coordinator", 
    phone: "9080690686"
  }, {
    name: "VIJAY R",
    role: "Student Coordinator",
    phone: "9884280573"
  }, {
    name: "SUBASH M",
    role: "Student Coordinator",
    phone: "9176116270"
  }];
  const socialLinks = [{
    icon: Instagram,
    label: "COAD VTRS",
    href: "https://instagram.com/coad.vtrs",
    color: "hover:text-pink-500"
  }, {
    icon: Instagram,
    label: "Vel Tech Arts Official",
    href: "https://instagram.com/veltechartsofficial", 
    color: "hover:text-pink-500"
  }, {
    icon: Globe,
    label: "Website",
    href: "https://velsrscollege.com/",
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
            Have questions? Need assistance? Our team is here to help you make the most of IGNIXION'25
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
                       Vel Tech Ranga Sanku Arts College
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
                       coad@velsrscollege.com
                     </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">STAFF CO-ORDINATORS</h4>
                    <div className="space-y-2">
                      {staffCoordinators.map((coordinator) => (
                        <div key={coordinator.name} className="text-muted-foreground">
                          <div className="font-medium">{coordinator.name}</div>
                          <a href={`tel:${coordinator.phone}`} className="text-sm hover:text-primary transition-colors">
                            {coordinator.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                FOLLOW US ON:
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
                and highlights from IGNIXION'25!
              </p>
            </div>
          </div>

          {/* Organizers */}
          <div className="scroll-fade-in">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
               <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">
                Student Coordinators
              </h3>
              
              <div className="space-y-6">
                {studentCoordinators.map((coordinator, index) => <div key={coordinator.name} className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors duration-300" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                      {coordinator.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{coordinator.name}</h4>
                      <p className="text-sm text-primary mb-2">{coordinator.role}</p>
                      
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${coordinator.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
                          <Phone size={14} />
                          {coordinator.phone}
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
            <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Thank You for Being Part of IGNIXION'25</h3>
            <p className="text-muted-foreground mb-6">We can’t wait to see your creativity and innovation shine. ✨
Stay tuned for updates, and let’s spark something extraordinary together!</p>
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;