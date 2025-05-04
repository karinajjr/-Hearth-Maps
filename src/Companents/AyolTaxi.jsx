import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import S from '../../public/S.png'

function AyolTaxi() {
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
    <div className=" bg-white h-screen flex flex-col gap-1">
      {/* Верхняя панель */}
      <div className="px-4 py-2 flex justify-between items-center">
        <button onClick={() => navigate(-1)}><i class="bi bi-arrow-left text-2xl"></i></button>
        <i class="bi bi-list text-2xl"></i>
      </div>

      <div className="px-4 flex gap-2 justify-center ">
        {transportOptions.map((option) => (
          <button key={option.id} onClick={() => setSelected(option.id)}
            className={`text-xl px-2 py-1 rounded-lg transition-all duration-200 ${selected === option.id ? 'bg-blue-500 text-white' : ''}`}>
            <i className={`bi ${option.icon}`}></i>
          </button>
        ))}
      </div>

      {/* Поля локаций */}
      <div className=" flex justify-center gap-1 mt-1">

        <div className="flex flex-col items-center  mr-2">
          <img src={S} className='w-[15px] mt-3' />
          <div className=''>
            <p className='text-[12px]'>|</p>
            <p className='text-[12px]'>|</p>
          </div>
          <i class="bi bi-geo-alt text-lg "></i>
        </div>

        <div className=' flex flex-col space-y-2'>
          <input type="text"
            placeholder="Current location"
            className="border border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-60"
          />

          <input onClick={() => navigate('/Aloc')} type="text"
            placeholder="Current location"
            className="border border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-60"
          />
        </div>

        <div className=' flex justify-center items-center ml-3'><i className="bi bi-arrow-down-up text-xl"></i></div>
      </div>

      {/* Дом и Работа */}
      <div className=" border-t mt-8">
        <div className="flex justify-between p-4">
          <div className='flex gap-5'>
          <i class="bi bi-house-door-fill text-2xl"></i>
            <h1 className='flex items-center'>Home</h1>
          </div>
          <button className="mr-2">Add</button>
        </div>

        <hr class="border-t border-gray-300 mb-0 " />

        <div className="flex justify-between p-4">
          <div className='flex gap-5'>
            <i className="bi bi-briefcase-fill text-2xl"></i>
            <h1 className='flex items-center'>Work</h1>
          </div>
          <button className="mr-2">Add</button>
        </div>
      </div >
      <hr class="border-t mt-0" />


      {/* История */}
      <div className="flex-1 overflow-y-auto  space-y-1">
        <h2 className="text-lg font-medium px-4 py-2">History</h2>
        {Array.from({ length: 10 }).map((_, i) => (
             <div key={i}  className=' bg-[#EFEFF0] flex px-4 py-3 justify-between w-full items-center'>
             <div className='flex gap-3 items-center'>
               <i class="bi bi-clock-fill text-lg"></i>
               <div>
                 <h1 className='text-lg'>School 2</h1>
                 <p className='text-[12px]'>Chilanzar, Tashkent</p>
               </div>
             </div>
             <p>10 min</p>
           </div>
        ))}
      </div>
    </div>
  )
}

export default AyolTaxi








