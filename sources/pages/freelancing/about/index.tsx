import React from 'react'
import {
  CodeIcon,
  BrainCircuitIcon,
  RocketIcon,
  PuzzleIcon,
} from 'lucide-react'
export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 px-6 md:px-12 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-4 border border-dashed border-gray-400 rounded-full">
            <BrainCircuitIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">Sobre Mim</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Desenvolvedor Fullstack & Solucionador de Problemas
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Meu nome é Victor Hugo, sou um desenvolvedor fullstack, muito
            curioso e que busca estar sempre atrás de coisas novas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="border-l-4 border-gray-300 pl-6 mb-8">
              <p className="text-lg">
                {'"'}Minha paixão está em trabalhar com projetos incomuns, coisas
                mais complexas ou difíceis de viabilizar. Gosto de desafios que
                exigem criatividade e pensamento fora da caixa.{'"'}
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gray-300 rounded-md flex items-center justify-center">
                  <CodeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">
                    Desenvolvimento Fullstack
                  </h3>
                  <p className="text-gray-600">
                    Experiência com React, Node.js, e diversas tecnologias
                    modernas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gray-300 rounded-md flex items-center justify-center">
                  <PuzzleIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">
                    Resolução de Problemas Complexos
                  </h3>
                  <p className="text-gray-600">
                    Habilidade para abordar desafios técnicos de forma criativa
                    e eficiente.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-gray-300 rounded-md flex items-center justify-center">
                  <RocketIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">
                    Inovação Constante
                  </h3>
                  <p className="text-gray-600">
                    Sempre em busca de novas tecnologias e abordagens para criar
                    soluções melhores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square w-full border-2 border-gray-300 rounded-md p-4 flex items-center justify-center bg-gray-100">
                <span className="font-bold text-4xl">3+</span>
                <span className="text-sm ml-2">Anos de Experiência</span>
              </div>
              <div className="aspect-square w-full border-2 border-gray-300 rounded-md p-4 flex items-center justify-center bg-gray-100">
                <span className="font-bold text-4xl">20+</span>
                <span className="text-sm ml-2">Projetos Concluídos</span>
              </div>
              <div className="aspect-square w-full border-2 border-gray-300 rounded-md p-4 flex items-center justify-center bg-gray-100">
                <span className="font-bold text-4xl">8+</span>
                <span className="text-sm ml-2">Tecnologias</span>
              </div>
              <div className="aspect-square w-full border-2 border-gray-300 rounded-md p-4 flex items-center justify-center bg-gray-100">
                <span className="font-bold text-4xl">∞</span>
                <span className="text-sm ml-2">Possibilidades</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-gray-300 rounded-full bg-white flex items-center justify-center">
              <BrainCircuitIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
