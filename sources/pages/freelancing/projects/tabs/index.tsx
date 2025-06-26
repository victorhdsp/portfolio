import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TTabValue } from "../type";
import ProjectsTabsContent from "./content";
import { projectsDatabase } from "../../../../shared/data/projects";

export default function ProjectsTabs() {
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
                projects={projectsDatabase}
            />
            <ProjectsTabsContent
                value="web"
                projects={projectsDatabase}
            />
            <ProjectsTabsContent
                value="mobile"
                projects={projectsDatabase}
            />
            <ProjectsTabsContent
                value="backend"
                projects={projectsDatabase}
            />
        </Tabs>
    )
}