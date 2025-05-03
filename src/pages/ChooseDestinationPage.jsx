import { useNavigate } from 'react-router-dom'

export default function ChooseDestinationPage() {
  const navigate = useNavigate()

  return (
    <div className=" bg-white h-screen flex flex-col ">
      <div className='p-4 space-y-2'>
        <div className="flex items-center border rounded-xl px-4 py-2 gap-3  ">
          <button onClick={() => navigate(-1)}><i class="bi bi-arrow-left text-2xl"></i></button>
          <div className="text-lg font-normal ">
            Choose destination
          </div>
        </div>

        <button onClick={() => navigate('/map')}
          className="flex justify-between items-center p-3 border rounded-xl w-full"  >
         <div className='flex gap-2'>
         <i className="bi bi-geo-alt flex items-center "></i>
          <div className="text-lg font-normal ">
          Choose on map
          </div>
         </div>
          <i class="bi bi-arrow-right text-2xl"></i>
        </button>

      </div>


      {/* Дом и Работа */}
      <div className=" border-t">
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
          <div key={i} className=' bg-[#EFEFF0] flex px-4 py-3 justify-between w-full items-center'>
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
