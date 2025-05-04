import React from 'react'
import { useNavigate } from 'react-router-dom';
import AyolTaxi from "../../public/AyolTaxi.png"
import Location from "../../public/Location.png"
import Navigator from "../../public/Navigator.png"
import PeriotKids from "../../public/PeriotKids.png"
import Sos from "../../public/Sos.png"
import CompassNavigator from "../../public/CompassNavigator.png"
import logo from "../../public/logo.png"



function Layot() {
  const navigate = useNavigate();

  return (
    <>
      <div className='px-9 py-4'>
        <nav >
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Hearth</h1>
            <i className="bi bi-list text-2xl"></i>
          </div>
        </nav>
        <main>
          <div>
            <div className='flex mt-7 gap-3 items-center '>
              <button>
                <img src={AyolTaxi} alt="" className='mt-4 text-sm' />
                <h1 className='text-[10px] ml-3 items-center'>
                  Ayol Taxi
                </h1>
              </button>

              <button className='mr-2'>
                <img src={Location} alt="" />
                <h1 className='text-[10px]'>
                  Lactation spaces
                </h1>
              </button>

              <button onClick={() => navigate('/period')} >
                <img src={PeriotKids} alt="" className='mt-4 ' />
                <h1 className='text-[10px]'>
                  Period kits delivery
                </h1>
              </button>
            </div>

            <div className='flex gap-5 '>
              <button onClick={() => navigate('/navigator')}>
                <img src={Navigator} alt="" className='' />
                <h1 className='text-[10px]'>
                  Navigator
                </h1>
              </button>

              <button onClick={() => navigate('/sos')}>
                <img src={Sos} alt="" className='mt-4' />
                <h1 className='text-[10px]'>
                  SOS button
                </h1>
              </button>

            </div>
          </div>

          <div className='flex justify-center items-center'>
            <button className='mt-6 rounded-2xl flex bg-[#EFEFF0] w-full items-center justify-around py-4 gap-10'>
              <img src={CompassNavigator} className='w-5' alt="" />
              <h1>Where to?</h1>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          <div className=' mt-7 flex flex-col space-y-2 '>
            <div className=' bg-[#EFEFF0] flex px-4 py-3 justify-between w-full items-center rounded-t-2xl'>
              <div className='flex gap-3 items-center'>
                <i class="bi bi-clock-fill text-lg"></i>
                <div>
                  <h1 className='text-lg'>School 2</h1>
                  <p className='text-[12px]'>Chilanzar, Tashkent</p>
                </div>
              </div>
              <p>10 min</p>
            </div>

            <div className=' bg-[#EFEFF0] flex px-4 py-3 justify-between w-full items-center'>
              <div className='flex gap-3 items-center'>
                <i class="bi bi-clock-fill text-lg"></i>
                <div>
                  <h1 className='text-lg'>School 2</h1>
                  <p className='text-[12px]'>Chilanzar, Tashkent</p>
                </div>
              </div>
              <p>10 min</p>
            </div>

            <div className=' bg-[#EFEFF0] flex px-4 py-3 justify-between w-full items-center rounded-b-2xl'>
              <div className='flex gap-3 items-center'>
                <i class="bi bi-clock-fill text-lg"></i>
                <div>
                  <h1 className='text-lg'>School 2</h1>
                  <p className='text-[12px]'>Chilanzar, Tashkent</p>
                </div>
              </div>
              <p>10 min</p>
            </div>
          </div>

          <div className='bg-[#EFEFF0] gap-3 rounded-2xl px-5 py-3 flex mt-7'>
            <div>
              <h1 className='font-medium text-lg'>What is Hearth?</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nibh tincidunt est lobortis luctus. </p>
            </div>
            <img src={logo} className='w-[130px]' alt="" />
          </div>

        </main>
      </div>
    </>
  )
}

export default Layot