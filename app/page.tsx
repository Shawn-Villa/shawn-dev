'use client';

import Hero from "./components/hero";
import { RoadmapSection } from "./components/roadmap";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <RoadmapSection/>
    </div>
  );
}
