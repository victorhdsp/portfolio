"use client";

import React from 'react'
import { LayoutIcon } from 'lucide-react'
import ProjectsTabs from './tabs';
import { ViewProjectDto } from './type';

interface ProjectsProps {
  projects: ViewProjectDto[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 px-6 md:px-12 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-4 border border-dashed border-gray-400 rounded-full">
            <LayoutIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Trabalho com soluções complexas e desafiadoras, transformando ideias
            difíceis em realidade através de código e criatividade.
          </p>
        </div>
        <ProjectsTabs projects={projects} />
      </div>
    </section>
  )
}
