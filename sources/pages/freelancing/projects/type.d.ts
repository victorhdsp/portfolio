export interface ViewProjectDto {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    tags: string[];
    link: string;
}

type TTabValue = "all" | "web" | "mobile" | "backend";