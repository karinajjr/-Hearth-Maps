
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

function Navigator() {
  const [selected, setSelected] = useState('walk');
  const navigate = useNavigate()


  const transportOptions = [
    { id: 'walk', icon: 'bi-person-walking' },
    { id: 'car', icon: 'bi-car-front' },
    { id: 'bus', icon: 'bi-bus-front' },
    { id: 'bike', icon: 'bi-bicycle' },
    { id: 'scooter', icon: 'bi-scooter' },
  ];

  return (
    <div className="p-4 bg-white h-screen flex flex-col gap-1">
      {/* Верхняя панель */}
      <div className="flex justify-between items-center">
        <button onClick={() => navigate(-1)}><i class="bi bi-arrow-left font-medium border rounded-full  px-2 py-1.5"></i></button>
        <div className="border rounded-full px-2 py-1 ">
          <i class="bi bi-person-fill"></i>
        </div>
      </div>

      <div className="flex gap-2 justify-center ">
        {transportOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`text-xl px-2 py-1 rounded-xl transition-all duration-200 ${selected === option.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
          >
            <i className={`bi ${option.icon}`}></i>
          </button>
        ))}
      </div>

      {/* Поля локаций */}
      <div className=" flex justify-around mt-3">

        <div className="flex flex-col items-center ">
          <div className="text-blue-600 text-2xl">
            <span className="text-3xl">🧍‍♂️</span>
          </div>
          <div className="h-6 w-0.5 bg-dashed border-l border-black my-1" />
          <div className="text-2xl">
            <span className="text-xl">📍</span>
          </div>
        </div>

        <div className=''>
          <div className="relative mb-3">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2"></span>
            <input
              type="text"
              className="w-full pl-8 pr-10 py-2 rounded-xl border"
              value="Current location"
              readOnly
            />
          </div>

          <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">📌</span>
            <input
              type="text"
              className="w-full pl-8 pr-10 py-2 rounded-xl border"
              placeholder="Choose destination"
              onClick={() => navigate('/choose')}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">⇅</button>
          </div>
        </div>


      </div>

      {/* Дом и Работа */}
      <div className="bg-gray-100 p-4 rounded-xl space-y-3">
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
        <h2 className="text-lg font-medium mb-2">History</h2>
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

export default Navigator










// <div className="flex items-start gap-2 ">
// {/* Icons on the left */}
// <div className="flex flex-col items-center mt-2">
//   <div className="text-blue-600 text-2xl">
//     <span className="text-3xl">🧍‍♂️</span>
//   </div>
//   <div className="h-6 w-0.5 bg-dashed border-l border-black my-1" />
//   <div className="text-2xl">
//     <span className="text-xl">📍</span>
//   </div>
// </div>

// {/* Input section */}
// <div className="flex flex-col gap-4 w-full">
//   <div>
//     <div className="text-gray-500 text-sm ">Pickup</div>
//     <div className="border-2 rounded-xl  text-xl font-medium">
//       Current location
//     </div>
//   </div>

//   <div>
//     <div className="text-gray-500 text-sm ">Destination</div>
//     <div className="border-2 rounded-xl text-xl font-medium">
//       Choose destination
//     </div>
//   </div>
// </div>

// {/* Map icon */}
// <div className="ml-2 mt-14">
//   <div className="flex flex-col items-center bg-gray-100 p-2 rounded-xl">
//     {/* <Map className="w-5 h-5 text-gray-700" /> */}
//     <span className="text-xs text-gray-600 mt-1">Map</span>
//   </div>
// </div>
// </div>