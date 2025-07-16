'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ImageTest() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-sm font-bold mb-2">Image Test</h3>
      <div className="w-32 h-32 relative border-2 border-gray-300">
        <Image
          src="/soul-tree.png"
          alt="Test"
          fill
          className="object-cover"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      </div>
      <div className="text-xs mt-2">
        <p>Loaded: {imageLoaded ? '✅' : '❌'}</p>
        <p>Error: {imageError ? '❌' : '✅'}</p>
      </div>
    </div>
  )
} 