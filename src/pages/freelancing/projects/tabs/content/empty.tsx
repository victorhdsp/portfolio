import { Button } from "@/src/shared/components/button";

export function ProjectsTabEmptyContent() {
    return (
        <div className="p-12 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center">
            <p className="text-gray-500 text-center">
                Ainda não temos projetos desse tipo para exibir aqui, mas você pode ser o primeiro a adicionar um projeto!
            </p>
            <p className="text-gray-500 text-center mt-2">
                Entre em contato para discutir como podemos criar algo incrível juntos.
            </p>
            <Button
                className="mt-6"
                variant="secondary"
            >
                Entrar em Contato
            </Button>
        </div>
    )
}