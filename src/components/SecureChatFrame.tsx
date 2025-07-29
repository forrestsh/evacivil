'use client'

import { useState } from 'react'

export default function SecureChatFrame() {
  const [isOpen, setIsOpen] = useState(false)

  const openChat = () => {
    // Open our proxy page in a new window/tab
    window.open(
      '/chat',
      '_blank',
      'noopener,noreferrer,width=800,height=600,scrollbars=yes,resizable=yes'
    )
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="打开聊天"
        title="与EVA灵魂识别器对话"
      >
        <span className="text-2xl">💬</span>
      </button>

      {/* Info Tooltip (optional) */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">🤖</span>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">EVA · 灵魂识别器</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">点击按钮开始对话</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            与我们的AI助手进行灵魂频率互动，获得个性化的解答和指导。
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            关闭
          </button>
        </div>
      )}
    </>
  )
} 