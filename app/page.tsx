'use client';

import { AboutSection } from "./components/about";
import Hero from "./components/hero";
import { Timeline } from "./components/timeline";
import { ContactSection } from "./components/contacts";
import { ProjectsSection } from "./components/projects";
import  Skills  from "./components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <Timeline/>
      <ContactSection/>
    </div>
  );
}
