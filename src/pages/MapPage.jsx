import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import For from "../../public/icon/For.png"
import One from "../../public/icon/One.png"
import three from "../../public/icon/three.png"
import Two from "../../public/icon/Two.png"




const center = {
  lat: 41.311081,
  lng: 69.240562,
};

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function MapPage() {

  const [selected, setSelected] = useState('walk');

  const transportOptions = [
    {
      id: 'walk',
      icon: 'bi-person-walking',
      text: '7 min'
    },
    {
      id: 'car',
      icon: 'bi-car-front',
      text: '7 min'
    },
    {
      id: 'bus',
      icon: 'bi-bus-front',
      text: '7 min'
    },
    {
      id: 'bike',
      icon: 'bi-bicycle',
      text: '7 min'
    },
    {
      id: 'scooter',
      icon: 'bi-scooter',
      text: '7 min'
    },
  ];

  const sheetRef = useRef(null);
  const startY = useRef(0);
  const startHeight = useRef(0);
  const isDragging = useRef(false);

  const minHeight = 21;
  const maxHeight = 70;

  const [heightPercent, setHeightPercent] = useState(minHeight);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startY.current = e.touches[0].clientY;
    startHeight.current = heightPercent;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const deltaY = startY.current - e.touches[0].clientY;
    const screenHeight = window.innerHeight;
    const deltaPercent = (deltaY / screenHeight) * 100;
    let newHeight = startHeight.current + deltaPercent;
    newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));
    setHeightPercent(newHeight);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (heightPercent > (minHeight + maxHeight) / 2) {
      setHeightPercent(maxHeight);
    } else {
      setHeightPercent(minHeight);
    }
  };

  const navigate = useNavigate();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCyfamI0AbkaXK1woprxg-Zrjh8EckXfUQ',
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="h-screen flex flex-col">
      {/* Верхняя панель */}
      <div className="bg-white p-4 flex items-center justify-between z-10">
        <button onClick={() => navigate(-1)}><i class="bi bi-arrow-left text-2xl"></i></button>
        <div className="flex flex-col gap-2 w-full px-4">
          <input type="text" className="border rounded-xl px-3 py-2" value="Novza metro" readOnly />
          <input type="text" className="border rounded-xl px-3 py-2" value="Technopark" readOnly />
        </div>
        <button>⇅</button>
      </div>

      {/* Карта */}
      <div className="flex-1 relative">

        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options} >
          <Marker position={center} />
        </GoogleMap>




        {/* Bottom Sheet */}
        <div ref={sheetRef} className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out z-20" style={{ height: `${heightPercent}vh`, touchAction: 'none', }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} >

          <div className="w-20 h-1.5 bg-gray-300 rounded-full mx-auto my-2 cursor-pointer " />
          <div className="px-1 py-4">
            <div className="flex gap-1 justify-center ">
              {transportOptions.map((option) => (
                <button key={option.id} onClick={() => setSelected(option.id)}
                  className={` flex text-xl items-end gap-1 px-2 py-1 rounded-lg transition-all duration-200 ${selected === option.id ? 'bg-blue-500 text-white' : ''}`}>
                  <i className={`bi ${option.icon}`}></i>
                  <p className='text-sm'> {` ${option.text}`}</p>

                </button>
              ))}
            </div>

            <div className='overflow-x-auto no-scrollbar'>
              <div className='flex gap-2 p-2 mt-8 rounded-2xl w-max'>
                <img src={One} className='w-25' />
                <img src={Two} className='w-25' />
                <img src={three} className='w-25' />
                <img src={For} className='w-25' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
