import { useNavigate } from 'react-router-dom'

export default function ChooseDestinationPage() {
  const navigate = useNavigate()

  return (
    <div className="p-4 bg-white h-screen flex flex-col gap-4">
      {/* Верхняя панель */}
      <div className="flex items-center gap-2">
        <button onClick={() => navigate(-1)}>←</button>
        <div className="text-lg font-medium border rounded-full px-4 py-2 w-full text-center">
          Choose destination
        </div>
      </div>

      {/* Кнопка: выбрать на карте */}
      <button
        onClick={() => navigate('/map')}
        className="flex items-center gap-2 p-3 border rounded-xl"
      >
        <span>🗺️</span>
        <span>Choose on map</span>
      </button>

      {/* Дом и Работа */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>🏠 Home</span>
          <button className="text-blue-500">Add</button>
        </div>
        <div className="flex justify-between">
          <span>💼 Work</span>
          <button className="text-blue-500">Add</button>
        </div>
      </div>

      {/* История */}
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-lg font-medium mt-4 mb-2">History</h2>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex justify-between items-center border-b py-2">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">🕓</span>
              <div>
                <p className="font-medium">School 2</p>
                <p className="text-sm text-gray-500">Chilanzar, Tashkent</p>
              </div>
            </div>
            <span className="text-sm text-gray-600">530 m</span>
          </div>
        ))}
      </div>
    </div>
  )
}
