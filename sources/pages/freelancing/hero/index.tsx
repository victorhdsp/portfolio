import React from 'react'
import {
  ArrowRightIcon,
  LightbulbIcon,
  PuzzleIcon,
  CodeIcon,
} from 'lucide-react'
import Button from '@/sources/shared/components/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 mb-4 border border-dashed border-gray-400 rounded-full">
            <LightbulbIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">Soluções Criativas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Criando soluções para seus problemas{' '}
            <span className="border-b-4 border-gray-300">incomuns</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Desenvolvedor fullstack especializado em projetos complexos e
            desafiadores. Transformo ideias difíceis em soluções elegantes
            através de código e criatividade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact">
              <Button>
                Entrar em Contato
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                leftIcon={<ArrowRightIcon />}
                variant="secondary"
              >
                Conhecer Projetos
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full border-2 border-gray-200 rounded-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                  src="/img/hero.png"
                  alt="Foto do Desenvolvedor"
                  className='w-full h-full object-cover grayscale'
                  width={810}
                  height={810}
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 p-3 bg-white border-2 border-gray-300 rounded-md z-10">
            <div className="flex items-center gap-2">
              <CodeIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Fullstack Developer</span>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 p-3 bg-white border-2 border-gray-300 rounded-md z-10">
            <div className="flex items-center gap-2">
              <PuzzleIcon className="w-4 h-4" />
              <span className="text-sm font-medium">
                Solucionador de Problemas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
