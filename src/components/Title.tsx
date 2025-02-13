import main from '../assets/main.jpg'

const Title = () => {
  return (
    <div className="h-screen w-full flex justify-center bg-cover bg-center" style={{ backgroundImage: `url(${main})` }}>
      
      {/* 컨텐츠를 중앙 정렬 */}
      <div className="text-center mt-10">
        <div className="text-9xl font-[SSShinb7] text-white mb-4">이우진</div>
        <div className="text-6xl font-[SSShinb7] text-white">첫 번째 생일</div>
      </div>

      <div className="absolute bottom-0 w-full text-center pb-10">
        <div className="text-2xl text-white border-b-[1px] border-white inline-block pb-2">2025년 3월 08일</div>
      </div>
    </div>
  )
}

export default Title