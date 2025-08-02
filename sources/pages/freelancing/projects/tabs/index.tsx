import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TTabValue, ViewProjectDto } from "../type";
import ProjectsTabsContent from "./content";

interface ProjectsTabsProps {
    projects: ViewProjectDto[];
}

export default function ProjectsTabs({ projects }: ProjectsTabsProps) {
    return (
        <Tabs defaultValue={"all" as TTabValue}>
            <TabsList>
                <TabsTrigger value={"all" as TTabValue}>
                    Todos
                </TabsTrigger>
                <TabsTrigger value={"web" as TTabValue}>
                    Web
                </TabsTrigger>
                <TabsTrigger value={"mobile" as TTabValue}>
                    Mobile
                </TabsTrigger>
                <TabsTrigger value={"backend" as TTabValue}>
                    Backend
                </TabsTrigger>
            </TabsList>

            <ProjectsTabsContent
                value="all"
                projects={projects}
            />
            <ProjectsTabsContent
                value="web"
                projects={projects}
            />
            <ProjectsTabsContent
                value="mobile"
                projects={projects}
            />
            <ProjectsTabsContent
                value="backend"
                projects={projects}
            />
        </Tabs>
    )
}