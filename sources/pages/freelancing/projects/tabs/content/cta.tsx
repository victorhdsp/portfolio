import { Card } from "@/sources/shared/components/card";
import { CardContent } from "@/sources/shared/components/card/content";
import { CardHeader } from "@/sources/shared/components/card/header";
import { ArrowRightIcon, CodeIcon } from "lucide-react";

export default function ProjectsTabContentCta() {
    return (
        <Card variant="outlined">
            <CardContent className="h-full">
                <div className="aspect-video border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center mb-4">
                    <CodeIcon className="w-12 h-12 text-gray-400" />
                </div>
                <CardHeader
                    title="Projeto Personalizado"
                    subtitle="Seu próximo desafio"
                />
                <p className="text-gray-600 text-sm mb-4">
                    Tem um projeto complexo em mente? Vamos transformá-lo em
                    realidade juntos.
                </p>
                <div className="flex justify-end mt-auto">
                    <a
                        href="#contact"
                        className="flex items-center text-sm font-medium"
                    >
                        Iniciar conversa{' '}
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}