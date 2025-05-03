import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layot from './Companents/Layot'
import Navigator from './Companents/Navigator';
import LactationSpaces from './Companents/LactationSpaces';
import PeriodKits from './Companents/PeriodKits';
import AyolTaxi from './pages/AyolTaxi';
import ChooseDestinationPage from "./pages/ChooseDestinationPage"
import MapPage from "./pages/MapPage"
import SOSButton  from "./Companents/SOSButton"

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layot />} />
      <Route path="/sos" element={<SOSButton />} />
      <Route path="/navigator" element={<Navigator />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/choose" element={<ChooseDestinationPage />} />
      <Route path="/lactation" element={<LactationSpaces />} />
      <Route path="/period" element={<PeriodKits />} />
      <Route path="/taxi" element={<AyolTaxi />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App