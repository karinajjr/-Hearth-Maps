import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cup from '../../public/icon/Cup.png';
import Med from '../../public/icon/Med.png';
import ProMax from '../../public/icon/ProMax.png';
import ProMaxTwo from '../../public/icon/ProMaxTwo.png';
import Wet from '../../public/icon/Wet.png';
import Tursik from '../../public/icon/Tursik.png';
import Toilet from '../../public/icon/Toilet.png';
import Tampons from '../../public/icon/Tampons.png';
import Promini from '../../public/icon/Promini.png';
import KotexLogo from '../../public/icon/KotexLogo.png';
import AlwaysLogo from '../../public/icon/AlwaysLogo.png';
import LibresseLogo from '../../public/icon/bellaLogo.png';
import darkkotex from '../../public/icon/darkkotex.png'


function PeriodKits() {
  const [isActive, setIsActive] = useState(false);
  const [absorbency, setAbsorbency] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(!isActive);
    if (isActive) {
      setAbsorbency(0);  // Сбросить если закрыли
      setSelectedBrand(null);
      setQuantity(0);
    }
  };

  const brands = [
    {
      name: 'Kotex',
      imgDefault: darkkotex ,
      imgSelected: KotexLogo,
    },
    {
       name: 'Always',
       img: AlwaysLogo },
    {
       name: 'Libresse', 
      img: LibresseLogo },
  ];



  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex justify-between px-4 py-3">
          <i className="bi bi-arrow-left text-2xl" onClick={() => navigate('/')}></i>
          <div className="flex flex-col items-center">
            <h1 className="text-xl">Period kit: delivery</h1>
            <p className="text-sm font-light">E district, entrance 7</p>
          </div>
          <i className="bi bi-list text-2xl"></i>
        </div>

        <div className="px-6 mt-4">
          <div>
            <h1 className="text-xl">Fill your pack</h1>
            <p className="mt-4">Menstrual products</p>

            <div className="flex gap-3 mt-2">
              <button>
                <img src={Promini} alt="Pantyliners" />
                <p className="text-[11px]">Pantyliners</p>
              </button>

              <button onClick={handleClick}>
                <img src={isActive ? ProMaxTwo : ProMax} alt="Period pads" />
                <p className="text-[11px]">Period pads</p>
              </button>

              <button>
                <img src={Tampons} alt="Tampons" />
                <p className="text-[11px]">Tampons</p>
              </button>
              <button>
                <img src={Cup} alt="Menstrual cup" />
                <p className="text-[11px]">Menstrual cup</p>
              </button>
            </div>
          </div>

          {isActive && (
            <>
              {/* Капли */}
              <div className="mt-6">
                <p>Choose size:</p>
                <div className='flex flex-col items-center '>
                  <div className="flex items-center justify-center space-x-4 mt-2 w-full bg-[#EFEFF0] px-2 py-2 rounded-2xl ">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <i
                        key={num}
                        className={`bi  ${num <= absorbency ? 'bi-droplet-fill text-[#021B4E]' : 'bi-droplet text-gray-400'} text-2xl cursor-pointer`}
                        onClick={() => setAbsorbency(num)}
                      ></i>
                    ))}
                  </div>
                </div>

              </div>

              {/* Бренды */}
              <div className="mt-6">
                <p>Choose manufacturer:</p>
                <div className="flex space-x-4 mt-2">
                  {brands.map((brand) => (
                    <img
                      key={brand.name}
                      src={selectedBrand === brand.name ? brand.imgSelected : brand.imgDefault}
                      alt={brand.name}
                      className="w-22 h-12 cursor-pointer"
                      onClick={() => setSelectedBrand(brand.name)}
                    />

                  ))}
                </div>
              </div>

              {/* Количество */}
              <div className="mt-6">
                <p>Select quantity:</p>
                <div className="flex space-x-2 mt-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      className={`w-8 h-8 rounded-full border text-sm flex items-center justify-center ${quantity === num
                          ? 'bg-blue-500 text-white'
                          : 'border-gray-300 text-gray-600'
                        }`}
                      onClick={() => setQuantity(num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex gap-4 mt-10">
            <button>
              <img src={Tursik} alt="Underwear" className="w-21" />
              <p className="text-[11px]">Underwear</p>
            </button>
            <button>
              <img src={Med} alt="Medicine" className="w-21" />
              <p className="text-[11px]">Medicine</p>
            </button>
          </div>

          <div className="mt-10">
            <p className="mb-3">Hygiene products</p>
            <div className="flex gap-4">
              <button>
                <img src={Toilet} alt="Toilet paper" className="w-21" />
                <p className="text-[11px]">Toilet paper</p>
              </button>
              <button>
                <img src={Wet} alt="Wet wipes" className="w-21" />
                <p className="text-[11px]">Wet wipes</p>
              </button>
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 inset-x-0 flex flex-col items-center bg-white rounded-2xl border-t-1">

          {absorbency > 0 && selectedBrand && (
            <div className="mt-4 mb-4">
              <p className="text-sm text-gray-500 mb-2">
                You selected: {selectedBrand} with {absorbency} absorbency, quantity {quantity}
              </p>
       
            </div>
          )}
          <button
            onClick={() => navigate('/perio')}
            className="bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-lg w-[90%] max-w-sm hover:bg-blue-600 transition"
          >
            перейти
          </button>



        </div>
      </div>
    </>
  );
}

export default PeriodKits;
