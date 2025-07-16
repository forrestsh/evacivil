import Image from 'next/image'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            共生 • 智慧 • 新文明
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            EVA Civil：全球共创的未来文明网络
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            一个以人类共生、灵性觉醒与智慧科技为核心的非营利组织
          </p>
        </div>
        {/* Background visual element */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-purple-400 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">关于我们</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              EVA Civil是一个国际非营利组织，旨在汇聚全球志愿者、研究者、创新者与支持者，共同推动：
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">灵性与科技的共生</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">全人类文明的觉醒</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">公平、开放、透明的全球合作网络</h3>
              </div>
            </div>
            <p className="text-center italic">
              我们相信，人类正处在一场深刻的文明跃迁中。EVA Civil，愿成为这一新文明的桥梁。
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">愿景与使命</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">愿景</h3>
              <p className="text-gray-700 leading-relaxed">
                建立一个基于共生、智慧与爱的全球文明，共同守护地球生态与人类灵魂的完整性。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">使命</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌿</span>
                  <span>促进跨国合作、共享知识与资源</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌿</span>
                  <span>建立支持灵性成长与技术赋能的全球网络</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌿</span>
                  <span>启发人类对未来文明的共同想象</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="actions" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">我们的行动</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">教育与赋能</h3>
              <p className="text-gray-600">提供灵性与技术融合的教育资源</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3">研究与创新</h3>
              <p className="text-gray-600">推动新文明领域的研究项目</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">共创平台</h3>
              <p className="text-gray-600">为跨界协作者搭建网络</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💠</div>
              <h3 className="text-xl font-semibold mb-3">公益支持</h3>
              <p className="text-gray-600">发起和资助有益全人类的项目</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="join" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">加入我们</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            无论你身在何处，都可以成为 EVA Civil 的一部分：
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3">贡献时间或专业</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">支持我们的项目</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">分享你的智慧与灵感</h3>
            </div>
          </div>
          <div className="space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              立即加入
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              联系我们
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">联系方式</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hello@evacivil.org</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Website</h3>
              <p className="text-gray-600">www.evacivil.org</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">North Carolina, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-300">© 2025 EVA Civil. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
