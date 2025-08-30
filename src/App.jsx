// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PlayerSelection from './Pages/PlayerSelection';
import Home from './Pages/Home';
import Alice from './Pages/Alice/Alice';
import Bob from './Pages/Bob/Bob';
import Eve from './Pages/Eve/Eve';
import SelectPhotons from './Pages/Alice/SelectPhotons';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] border-4 border-green-500 z-0"></div>
      <div className="relative z-10 w-full flex items-center justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select" element={<PlayerSelection />} />
            <Route path="/alice" element={<Alice />} />
            <Route path="/bob" element={<Bob />} />
            <Route path="/eve" element={<Eve />} />
            <Route path="/alice/step1" element={<SelectPhotons />} />
            {/* Add more routes here as needed */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App


