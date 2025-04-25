import React from 'react';
import { useNavigate } from 'react-router-dom';
import AyolTaxi from "../../public/AyolTaxi.png";
import LocationSpaces from "../../public/LocationSpaces.png";
import Navigator from "../../public/Navigator.png";
import PeriotKits from "../../public/PeriotKits.png";

const NavigationMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#DCDCDC] shadow-lg rounded-t-3xl p-2 flex justify-around z-50 ">
      
      <div
        className="flex flex-col items-center cursor-pointer custom-navigator mb-3"
        onClick={() => navigate('/navigator')}
      >
        <img src={Navigator} alt="Navigator" className="w-17 h-17 " />
        <span className="text-[10px] mt-1 text-center">Navigator</span>
      </div>

      <div
        className="flex flex-col items-center cursor-pointer custom-lactation  mb-3"
        onClick={() => navigate('/lactation')}
      >
        <img src={LocationSpaces} alt="Lactation spaces" className="w-17 h-17" />
        <span className="text-[10px] mt-1 text-center">Lactation spaces</span>
      </div>

      <div
        className="flex flex-col items-center cursor-pointer custom-period-kits  mb-3"
        onClick={() => navigate('/period-kits')}
      >
        <img src={PeriotKits} alt="Period kits" className="w-17 h-17 " />
        <span className="text-[10px] mt-1 text-center">Period kits</span>
      </div>

      <div
        className="flex flex-col items-center cursor-pointer custom-taxi  mb-3"
        onClick={() => navigate('/taxi')}
      >
        <img src={AyolTaxi} alt="Ayo'l taxi" className="w-17 h-17" />
        <span className="text-[10px] mt-1 text-center">Ayo'l taxi</span>
      </div>

    </div>
  );
};

export default NavigationMenu;
