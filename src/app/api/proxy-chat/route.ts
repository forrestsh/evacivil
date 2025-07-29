import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const chatGPTUrl = 'https://chatgpt.com/g/g-6888f3c693b481919c2218f347b8f91f-eva-ling-hun-shi-bie-qi'
    
    const response = await fetch(chatGPTUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    const html = await response.text()
    
    // Modify the HTML to work in our context
    const modifiedHtml = html
      .replace(/<head>/g, '<head><base href="https://chatgpt.com/">')
      .replace(/<title>.*?<\/title>/g, '<title>EVA · 灵魂识别器</title>')
      .replace(/<body>/g, '<body style="margin: 0; padding: 0;">')

    return new NextResponse(modifiedHtml, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch (error) {
    console.error('Proxy error:', error)
    
    // Return a fallback page
    const fallbackHtml = `
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
          .container {
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
        <div class="container">
          <div class="spinner"></div>
          <h2>EVA · 灵魂识别器</h2>
          <p>正在为您准备AI助手...</p>
          <button class="button" onclick="window.open('https://chatgpt.com/g/g-6888f3c693b481919c2218f347b8f91f-eva-ling-hun-shi-bie-qi', '_blank')">
            直接打开聊天
          </button>
        </div>
      </body>
      </html>
    `
    
    return new NextResponse(fallbackHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  }
} 