import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

export default async function Page(props) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  return <ProjectDetail project={project} />;
}
