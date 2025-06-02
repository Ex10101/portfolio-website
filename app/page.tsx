import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
    </main>
  );
}
