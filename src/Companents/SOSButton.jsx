import React from 'react';
import Sosimg from '../../public/Sos.png'
import SoSButton from '../../public/SoSButton.png'
import { useNavigate } from 'react-router-dom';





export default function SOSButton() {
  const navigate = useNavigate();

  const handleSOS = () => {
    const message = "Мама, я в опасности!";
    const phone = "+998991449406";
    const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };


  return (
    <>
      <div>
        <div className="h-screen bg-white flex flex-col  p-4 block md:hidden ">

          <div className=" flex justify-between ">
            <i class="bi bi-arrow-left text-2xl"  onClick={() => navigate('/')}></i>
            <div className='flex flex-col items-center'>
              <h1 className='text-xl'>SOS button</h1>
              <p className='text-sm font-light '>press the button in an emergency</p>
            </div>
            <i className="bi bi-list text-2xl"></i>
          </div>


          <div className='flex justify-center mt-25'>
            <button onClick={handleSOS}  >
              <img src={SoSButton} alt="" />
            </button>
          </div>



          <div className="flex justify-between items-center w-full mb-4 bg-[#0000000D] p-2 rounded-2xl mt-20">
            <div className="text-left">
              <h2 className="font-medium text-xl">Are you in an emergency?</h2>
              <p className="text-sm text-gray-600 mt-2">Press the SOS button, your live location will be shared with the nearest help centre and your emergency contacts.</p>
            </div>
            <div>
              <img src={Sosimg} className='w-100' alt="" />
            </div>

          </div>



        </div>
      </div>
    </>
  );
}












