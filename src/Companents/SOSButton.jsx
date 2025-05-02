import React from 'react';
import NavigationMenu from './NavigationMenu';
import Sosimg from '../../public/Sos.png'
import Logo from '../../public/logo.png'



export default function SOSButton() {

  const handleSOS = () => {
    const message = "Мама, я в опасности!";
    const phone = "+998991449406";
    const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };


  const options = [
    'Medical', 'Fire', 'Rescue', 'Violance',
    'Accident', 'Natural disasster', 'Call Umida'
  ];

  return (
    <>
      <div>
        <p className='hidden sm:block text-red-700 flex justify-center text-center items-center font-bold mt-20 text-2xl'>Доступно только в мабильном версии!</p>
        <div className="h-screen bg-white flex flex-col  p-4 block md:hidden ">

          <div className=" flex justify-between ">

            <div className="text-xl px-2 py-1 ">
              <i className="bi bi-list"></i>
            </div>

            <div>
              <h1 className='text-black text-xl'>Hearth</h1>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <img src={Logo} alt="Logo" className='w-16  ' />
          </div>

          <div className='flex justify-center'>
            <button onClick={handleSOS} className=" rounded-2xl bg-blue-600 text-white text-4xl font-bold shadow-lg border-20 border-blue-200" >
              SOS
            </button>
          </div>


          <div className='mt-10'>
            <div className="flex flex-wrap justify-center gap-2  mb-6">

              {options.map((opt) => (

                <button key={opt} className="bg-gray-100 rounded-full px-1.5 py-0.5 text-sm flex items-center gap-2" >
                  <span className="w-3 h-3 bg-blue-400 rounded-full"></span> {opt}
                </button>
              ))}
            </div>
          </div>

          <NavigationMenu />
        </div>
      </div>
    </>
  );
}




<div className="flex justify-between items-center w-full mb-4 bg-[#0000000D] p-2 rounded-2xl mt-4">
  <div className="text-left">
    <h2 className="font-medium text-xl">Are you in an emergency?</h2>
    <p className="text-sm text-gray-600 mt-2">Press the SOS button, your live location will be shared with the nearest help centre and your emergency contacts.</p>
  </div>
  <div>
    <img src={Sosimg} className='w-100' alt="" />
  </div>

</div>







