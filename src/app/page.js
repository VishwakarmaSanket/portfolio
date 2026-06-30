import InfiniteCarousel from "@/components/InfiniteCarousel";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="h-full w-full  bg-[#FBFBFD] p">
      <Navbar />
      <Title />
      <InfiniteCarousel projects={projects} />
    </div>
  );
}
