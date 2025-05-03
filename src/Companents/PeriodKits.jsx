import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cup from '../../public/icon/Cup.png'
import Med from '../../public/icon/Med.png'
import ProMax from '../../public/icon/ProMax.png'
import ProMaxTwo from '../../public/icon/ProMaxTwo.png'
import Wet from '../../public/icon/Wet.png'
import Tursik from '../../public/icon/Tursik.png'
import Toilet from '../../public/icon/Toilet.png'
import Tampons from '../../public/icon/Tampons.png'
import Promini from '../../public/icon/Promini.png'



function PeriodKits() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <div className=" flex justify-between px-4 py-3">
          <i class="bi bi-arrow-left text-2xl" onClick={() => navigate('/')}></i>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl'>Period kit: delivery</h1>
            <p className='text-sm font-light'>E district, entrance 7</p>
          </div>
          <i className="bi bi-list text-2xl"></i>
        </div>


        <div className='px-6 mt-4'>
          <div>
            <h1 className='text-xl'>Fill your pack</h1>
            <p className='mt-4'>Menstrual products</p>

            <div className='flex gap-3 mt-2'>
              <button >
                <img src={Promini} className='' />
                <p className='text-[11px]'>Pantyliners</p>
              </button >

              <button onClick={handleClick}>
                <img src={isActive ? ProMaxTwo : ProMax} className='' />
                <p className='text-[11px]'>Period pads</p>
              </button>
              <button>
                <img src={Tampons} className='' />
                <p className='text-[11px]'>Tampons</p>
              </button>
              <button>
                <img src={Cup} className='' />
                <p className='text-[11px]'>Menstrual cup</p>
              </button>
            </div>
          </div>

          <div className='flex gap-4 mt-10'>
            <button>
              <img src={Tursik} className='w-21' />
              <p className='text-[11px] '>Underwear</p>
            </button>
            <button>
              <img src={Med} className='w-21' />
              <p className='text-[11px]'>Medicine</p>
            </button>
          </div>

          <div className='mt-10'>
            <p className='mb-3'>Hygiene products</p>
            <div className='flex gap-4 '>
              <button>
                <img src={Toilet} className='w-21' />
                <p className='text-[11px] '>Toilet paper</p>
              </button>
              <button>
                <img src={Wet} className='w-21' />
                <p className='text-[11px]'>Wet wipes</p>
              </button>
            </div>
          </div>



        </div>
    
        <button className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-lg">
  SOS
</button>

      </div>
    </>
  )
}

export default PeriodKits