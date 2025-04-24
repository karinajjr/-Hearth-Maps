import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layot from './Companents/Layot'
import Navigator from './pages/Navigator';
import LactationSpaces from './pages/LactationSpaces';
import PeriodKits from './pages/PeriodKits';
import AyolTaxi from './pages/AyolTaxi';

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layot />} />
      <Route path="/navigator" element={<Navigator />} />
      <Route path="/lactation" element={<LactationSpaces />} />
      <Route path="/period-kits" element={<PeriodKits />} />
      <Route path="/taxi" element={<AyolTaxi />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App