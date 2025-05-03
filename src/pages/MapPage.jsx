import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const center = {
  lat: 41.311081, // Tashkent
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
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const startHeight = useRef(0);
  const isDragging = useRef(false);

  const minHeight = 30; // 30% экрана
  const maxHeight = 70; // 70% экрана

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
      setHeightPercent(maxHeight); // Открыть до 70%
    } else {
      setHeightPercent(minHeight); // Закрыть до 30%
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
        <button onClick={() => navigate(-1)}>←</button>
        <div className="flex flex-col gap-2 w-full px-4">
          <input type="text" className="border rounded-xl px-3 py-2" value="Novza metro" readOnly />
          <input type="text" className="border rounded-xl px-3 py-2" value="Technopark" readOnly />
        </div>
        <button>⇅</button>
      </div>

      {/* Карта */}
      <div className="flex-1 relative">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>

        {/* SOS кнопка */}
        <button className="absolute bottom-36 right-4 bg-white rounded-full p-3 shadow-md z-20">
          ⚠️
        </button>

        {/* Bottom Sheet */}
        <div
          ref={sheetRef}
          className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-lg transition-all duration-300 ease-in-out z-20"
          style={{
            height: `${heightPercent}vh`,
            touchAction: 'none',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-16 h-2 bg-gray-300 rounded-full mx-auto my-2 cursor-pointer" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Контент</h2>
            <p>Здесь твой контент внутри bottom sheet ✌️</p>
          </div>
        </div>
      </div>
    </div>
  );
}
