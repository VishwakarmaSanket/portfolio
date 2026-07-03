import AboutSection from "@/components/AboutSection";
import CardWrapper from "@/components/CardWrapper";
import Container from "@/components/Container";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetail from "@/components/ProjectDetail";
import Title from "@/components/Title";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#121212] text-white p">
      <Title />
      <CardWrapper projects={projects} />
      <AboutSection />
      <InfiniteCarousel projects={projects} />
    </div>
  );
}
