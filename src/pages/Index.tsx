import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnicalEventsSection from "@/components/TechnicalEventsSection";
import NonTechnicalEventsSection from "@/components/NonTechnicalEventsSection";
import ScheduleSection from "@/components/ScheduleSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import FloatingNavigation from "@/components/FloatingNavigation";

const Index = () => {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-fade-in elements
    const scrollElements = document.querySelectorAll('.scroll-fade-in');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="tech-events">
        <TechnicalEventsSection />
      </div>
      
      <div id="arts-events">
        <NonTechnicalEventsSection />
      </div>
      
      <div id="schedule">
        <ScheduleSection />
      </div>
      
      <div id="register">
        <RegistrationSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
