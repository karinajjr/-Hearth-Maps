import React from 'react';
import SOSButton from './SOSButton';
import EmergencyOptions from './EmergencyOptions';
import NavigationMenu from './NavigationMenu';
import Sosimg from '../../public/Sos.png'

export default function Layot() {
  return (
    <>
      <div>
        <p className='hidden sm:block text-red-700 flex justify-center text-center items-center font-bold mt-20 text-2xl'>Видно только в мабильном версии!</p>
        <div className="h-screen bg-white flex flex-col  p-4 block md:hidden ">

          <div className=" flex justify-between ">

            <div>
              <h1 className='text-black font-medium text-xl'>Hearth</h1>
            </div>
            <div className="border rounded-full px-2 py-1 ">
              <i className="bi bi-person-fill"></i>
            </div>
          </div>

          <div className="flex justify-between items-center w-full mb-4 bg-[#0000000D] p-2 rounded-2xl mt-4">
            <div className="text-left">
              <h2 className="font-medium text-xl">Are you in an emergency?</h2>
              <p className="text-sm text-gray-600 mt-2">Press the SOS button, your live location will be shared with the nearest help centre and your emergency contacts.</p>
            </div>
            <div>
              <img src={Sosimg} className='w-100' alt="" />
            </div>

          </div>
          <div className='flex justify-center'>
            <SOSButton />
          </div>


          <div className='mt-10'>
            <EmergencyOptions />
          </div>

          <NavigationMenu />
        </div>
      </div>
    </>
  );
}
