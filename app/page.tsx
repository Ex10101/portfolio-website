import { Suspense } from 'react';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

// Simple loading components
const SectionSkeleton = () => (
  <div className="w-full h-screen animate-pulse bg-[#0c0c14]/50"></div>
);

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <TechStackSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
      
      <FooterSection />
    </main>
  );
}
