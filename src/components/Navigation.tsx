'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className={`text-xl font-bold transition-colors ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            EVA Civil
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-green-400 ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
              }`}
            >
              关于我们
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className={`transition-colors hover:text-green-400 ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
              }`}
            >
              愿景使命
            </button>
            <button
              onClick={() => scrollToSection('actions')}
              className={`transition-colors hover:text-green-400 ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
              }`}
            >
              我们的行动
            </button>
            <button
              onClick={() => scrollToSection('join')}
              className={`transition-colors hover:text-green-400 ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
              }`}
            >
              加入我们
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-green-400 ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
              }`}
            >
              联系方式
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 