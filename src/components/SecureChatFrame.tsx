'use client'

import { useState } from 'react'

export default function SecureChatFrame() {
  const [isOpen, setIsOpen] = useState(false)

  const openChatInNewWindow = () => {
    // Open ChatGPT in a new window with custom HTML to hide the URL
    const chatWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes')
    
    if (chatWindow) {
      // Write HTML content that immediately redirects to ChatGPT
      chatWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>EVA · 灵魂识别器</title>
          <meta charset="utf-8">
          <style>
            body { 
              margin: 0; 
              padding: 0; 
              font-family: Arial, sans-serif;
              background: linear-gradient(135deg, #10b981, #3b82f6);
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              color: white;
            }
            .loading {
              text-align: center;
              max-width: 400px;
            }
            .spinner {
              border: 3px solid rgba(255,255,255,0.3);
              border-top: 3px solid white;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
              margin: 0 auto 20px;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .button {
              background: white;
              color: #10b981;
              padding: 12px 24px;
              border: none;
              border-radius: 8px;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="loading">
            <div class="spinner"></div>
            <h2>EVA · 灵魂识别器</h2>
            <p>正在为您打开AI助手...</p>
            <button class="button" onclick="window.location.href='https://chatgpt.com/g/g-6888f3c693b481919c2218f347b8f91f-eva-ling-hun-shi-bie-qi'">
              开始对话
            </button>
          </div>
          <script>
            // Auto-redirect after 2 seconds
            setTimeout(() => {
              window.location.href = 'https://chatgpt.com/g/g-6888f3c693b481919c2218f347b8f91f-eva-ling-hun-shi-bie-qi';
            }, 2000);
          </script>
        </body>
        </html>
      `)
      chatWindow.document.close()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="打开聊天"
        title="与EVA灵魂识别器对话"
      >
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl">💬</span>
        )}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              EVA · 灵魂识别器
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              与我们的AI助手进行灵魂频率互动，获得个性化的解答和指导。
            </p>
            
            <button
              onClick={openChatInNewWindow}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg mb-4"
            >
              开始对话
            </button>
            
            <p className="text-xs text-gray-500 dark:text-gray-400">
              点击按钮将在新窗口中打开AI助手
            </p>
          </div>
        </div>
      )}
    </>
  )
} 