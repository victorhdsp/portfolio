import { Card } from "@/src/shared/components/card";
import { CardContent } from "@/src/shared/components/card/content";
import { CardHeader } from "@/src/shared/components/card/header";
import { ArrowRightIcon } from "lucide-react";
import { ViewProjectDto } from "../../type";

interface CardProps {
    project: ViewProjectDto
}

export default function ProjectsTabContentItem(props: CardProps) {
    return (
        <Card variant="outlined">
            <CardContent
                mediaUrl={props.project.image}
                mediaAspectRatio="16:9"
                className="h-full"
            >
                <CardHeader
                    title={props.project.title}
                    subtitle={props.project.subtitle}
                />
                <p className="text-gray-600 text-sm mb-4">
                    {props.project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {props.project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 border border-gray-200 text-xs rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex justify-end mt-auto">
                    <a
                        href={props.project.link}
                        className="flex items-center text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver detalhes <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}