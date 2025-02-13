import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      {/* 네비게이션 섹션 */}
      <Title />

      {/* 히어로/메인 섹션 */}
      <section className="h-screen bg-blue-100 flex items-center justify-center">
        <h2 className="text-4xl">메인 섹션</h2>
      </section>

      {/* 특징/기능 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-10">특징 섹션</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-64 p-6 bg-gray-100 rounded-lg">특징 1</div>
            <div className="w-64 p-6 bg-gray-100 rounded-lg">특징 2</div>
            <div className="w-64 p-6 bg-gray-100 rounded-lg">특징 3</div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center">소개 섹션</h2>
        </div>
      </section>

      {/* 푸터 섹션 */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          <p>© 2024 회사명</p>
        </div>
      </footer>
    </div>
  )
}

export default App
