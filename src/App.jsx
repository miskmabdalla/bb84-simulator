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
import BobPhotons from './Pages/Alice/BobPhotons';
import React from 'react';
import CommonBasis from './Pages/Alice/CommonBasis';
import SharedKey from './Pages/Alice/SharedKey';
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // Helper to generate initial photons
  function getInitialPhotons(num) {
    return Array.from({ length: num }).map(() => ({
      selectedBit: Math.random() < 0.5 ? 0 : 1,
      selectedBasis: Math.random() < 0.5 ? '+' : '×',
    }));
  }

  const [photons, setPhotons] = useState(() => getInitialPhotons(8));

  // Calculate Bob's photons using BB84 logic
  function getBobPhotons(photons) {
    return photons.map(photon => {
      const bobBasis = Math.random() < 0.5 ? '+' : '×';
      let bobBit, copied;
      if (bobBasis === photon.selectedBasis) {
        bobBit = photon.selectedBit;
        copied = true;
      } else {
        bobBit = Math.random() < 0.5 ? 0 : 1;
        copied = false;
      }
      return {
        selectedBit: bobBit,
        selectedBasis: bobBasis,
        copied
      };
    });
  }

  const [bobPhotons, setBobPhotons] = useState(() => getBobPhotons(photons));

  // Update Bob's photons whenever Alice's photons change
  // (This ensures Bob's photons are always in sync)
  React.useEffect(() => {
    setBobPhotons(getBobPhotons(photons));
  }, [photons]);

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
            <Route path="/alice/step1" element={<SelectPhotons photons={photons} setPhotons={setPhotons} />} />
            <Route path="/alice/step2" element={<BobPhotons photons={photons} bobPhotons={bobPhotons} />} />
            <Route path="/alice/common" element={<CommonBasis photons={photons} bobPhotons={bobPhotons} />} />
            <Route path="/alice/sharedkey" element={<SharedKey photons={photons} bobPhotons={bobPhotons} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App


