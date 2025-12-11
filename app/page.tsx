'use client';

import { AboutSection } from "./components/about";
import Hero from "./components/hero";
import { RoadmapSection } from "./components/roadmap";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <RoadmapSection/>
    </div>
  );
}
