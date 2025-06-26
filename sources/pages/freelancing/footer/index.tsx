import LogoVictorHdsp from '@/sources/shared/components/icons/logo'
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <LogoVictorHdsp className="w-8 h-8 mr-3" />
          <span className="font-bold">Victor Hugo</span>
        </div>
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Victor Hugo. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
