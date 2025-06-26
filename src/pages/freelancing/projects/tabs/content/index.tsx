import { TabsContent } from "@/components/ui/tabs";
import { TTabValue, ViewProjectDto } from "../../type";
import ProjectsTabContentCta from "./cta";
import { ProjectsTabEmptyContent } from "./empty";
import ProjectsTabContentItem from "./item";

interface ProjectsTabsContentProps {
  value: TTabValue;
  projects: ViewProjectDto[];
}

function HasContent({ projects }: { projects: ViewProjectDto[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      { projects.map((project) => <ProjectsTabContentItem key={project.title} project={project} />) }
      <ProjectsTabContentCta />
    </div>
  )
}

export default function ProjectsTabsContent(props: ProjectsTabsContentProps) {
  const projects = props.projects.filter((project) => {
    if (props.value === "all") return true;
    if (props.value === "web") return project.tags.includes("Web");
    if (props.value === "mobile") return project.tags.includes("Mobile");
    if (props.value === "backend") return project.tags.includes("Backend");
    return false;
  });

  return (
  <TabsContent value={props.value}>
    {
      projects.length > 0 ?
        <HasContent projects={projects} /> :
        <ProjectsTabEmptyContent />
    }
  </TabsContent>
  )
}