import React from 'react'
import AyolTaxi from "../../public/AyolTaxi.png"
import Location from "../../public/Location.png"
import Navigator from "../../public/Navigator.png"
import PeriotKids from "../../public/PeriotKids.png"
import Sos from "../../public/Sos.png"
import CompassNavigator from "../../public/CompassNavigator.png"

function Layot() {
  return (
    <>
      <div className='p-4'>
        <nav >
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Hearth</h1>
            <i className="bi bi-list text-2xl"></i>
          </div>
        </nav>
        <main>
          <div>
            <div className='flex mt-10 gap-3 items-center'>
              <button><img src={AyolTaxi} alt="" className='mt-5 text-sm' />Ayol Taxi</button>
              <button><img src={Location} alt="" />Lactation spaces</button>
              <button><img src={PeriotKids} alt="" className='mt-5 text-[1px]' /><h1 className='text-[14px]'>Period kits delivery</h1></button>
            </div>

            <div className='flex gap-2'>
              <button><img src={Navigator} alt="" className='' />Navigator</button>
              <button><img src={Sos} alt="" className='' />SOS button</button>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <button className='mt-6 rounded-2xl flex bg-[#EFEFF0] w-full items-center justify-around py-4 gap-10'>
              <img src={CompassNavigator} className='w-5' alt="" />
              <h1>Where to?</h1> 
              <i className="bi bi-chevron-right"></i>
              </button>
          </div>



        </main>
      </div>
    </>
  )
}

export default Layot