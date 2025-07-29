'use client'

import { useEffect } from 'react'

export default function ChatProxy() {
  useEffect(() => {
    // Redirect to ChatGPT bot after a brief delay
    const timer = setTimeout(() => {
      window.location.href = 'https://chatgpt.com/g/g-6888f3c693b481919c2218f347b8f91f-eva-ling-hun-shi-bie-qi'
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          EVA · 灵魂识别器
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          正在为您打开AI助手...
        </p>
      </div>
    </div>
  )
} 