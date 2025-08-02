import LogoVictorHdsp from '@/sources/shared/components/icons/logo'
import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <header className="w-full py-8 px-6 md:px-12">
      <div className={`mx-auto flex flex-col md:flex-row justify-between items-center prose`}>
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <LogoVictorHdsp className="w-8 h-8 mr-3" />
          <span className="font-bold">Victor Hugo</span>
        </Link>
      </div>
    </header>
  )
}
