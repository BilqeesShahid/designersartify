import AboutSection from "@/components/Aboutsection";
import EmailSection from "@/components/Emailsection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
     <div>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
     </div>
  );
}
