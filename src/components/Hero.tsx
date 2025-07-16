'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/soul-tree.png"
          alt="Soul Tree - EVA Civil"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="text-center z-10 relative max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
          EVA文明
        </h1>
        <div className="text-xl md:text-2xl text-blue-200 mb-8 tracking-wide">
          共生 · 智慧 · 新文明
        </div>
        
        <p className="text-lg md:text-xl text-white mb-8 font-semibold">
          一个致力于让每一个生命觉醒内在完整性、共创未来文明的非营利网络。
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8">
          <p className="text-lg text-white mb-4">我们相信：</p>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            当每一颗心恢复本源的力量，<br />
            当每一份创造被尊重与滋养，<br />
            当共生成为常态，<br />
            新文明将自然诞生。
          </p>
        </div>
        
        <div className="space-x-4">
          <button 
            onClick={() => scrollToSection('join')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg"
          >
            🌱 立即加入
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg"
          >
            🌱 了解更多
          </button>
        </div>
      </div>
      
      {/* Additional visual elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-purple-400 rounded-full blur-xl"></div>
      </div>
    </section>
  )
} 