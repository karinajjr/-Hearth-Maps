import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

const center = {
  lat: 41.311081, // Tashkent
  lng: 69.240562,
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

export default function MapPage() {
    const navigate = useNavigate()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCyfamI0AbkaXK1woprxg-Zrjh8EckXfUQ', 
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className="h-screen flex flex-col">
      {/* Верхняя панель */}
      <div className="bg-white p-4 flex items-center justify-between">
      <button onClick={() => navigate(-1)}>←</button>
        <div className="flex flex-col gap-2 w-full px-4">
          <input type="text" className="border rounded-xl px-3 py-2" value="Novza metro" readOnly />
          <input type="text" className="border rounded-xl px-3 py-2" value="Technopark" readOnly />
        </div>
        <button>⇅</button>
      </div>

      {/* Google Map */}
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
        <button className="absolute bottom-36 right-4 bg-white rounded-full p-3 shadow-md">
          ⚠️
        </button>
      </div>

      {/* Панель навигации */}
      <div className="bg-white p-4 rounded-t-3xl shadow-lg">
        <h3 className="font-semibold mb-2">Navigator</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-xl">🚶 7 min</span>
          <span className="text-sm">🚌 5 min</span>
          <span className="text-sm">🚗 10,000 so’m</span>
          <span className="text-sm">🚕 2 min</span>
        </div>

        <div className="flex justify-between text-center text-sm">
          <div>
            <p>🌙 Lightening</p>
            <p className="text-blue-600">📊📊📊</p>
          </div>
          <div>
            <p>🚨 Crime rate</p>
            <p className="text-blue-600">📊📊</p>
          </div>
          <div>
            <p>👥 Population</p>
            <p className="text-blue-600">📊📊📊📊</p>
          </div>
        </div>
      </div>
    </div>
  )
}
