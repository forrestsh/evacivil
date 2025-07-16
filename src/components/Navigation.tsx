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
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gray-800">
            EVA Civil
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              关于我们
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              愿景使命
            </button>
            <button
              onClick={() => scrollToSection('actions')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              我们的行动
            </button>
            <button
              onClick={() => scrollToSection('join')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              加入我们
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              联系方式
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 