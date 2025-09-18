// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PlayerSelection from './Pages/PlayerSelection';
import Home from './Pages/Home';
import Alice from './Pages/Alice/Alice';
import Bob from './Pages/Bob/Bob';
import BobWorkInProgress from './Pages/Bob/BobWorkInProgress';
import Eve from './Pages/Eve/Eve';
import EveWorkInProgress from './Pages/Eve/EveWorkInProgress';
import SelectPhotons from './Pages/Alice/SelectPhotons';
import BobPhotons from './Pages/Alice/BobPhotons';
import React from 'react';
import CommonBasis from './Pages/Alice/CommonBasis';
import SharedKey from './Pages/Alice/SharedKey';
import WhyBB84 from './Pages/Tutorial/WhyBB84';
import QubitEncoding from './Pages/Tutorial/QubitEncoding';
import Transmission from './Pages/Tutorial/Transmission';
import BobMeasurements from './Pages/Tutorial/BobMeasurements';
import BasisReconciliation from './Pages/Tutorial/BasisReconciliation';
import DetectingEve from './Pages/Tutorial/DetectingEve';
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
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="flex-1 flex flex-col items-center justify-center" style={{ minHeight: '600px' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select" element={<PlayerSelection />} />
            <Route path="/alice" element={<Alice />} />
            <Route path="/bob" element={<Bob />} />
            <Route path="/bob/work-in-progress" element={<BobWorkInProgress />} />
            <Route path="/eve" element={<Eve />} />
            <Route path="/eve/work-in-progress" element={<EveWorkInProgress />} />
            <Route path="/alice/step1" element={<SelectPhotons photons={photons} setPhotons={setPhotons} />} />
            <Route path="/alice/step2" element={<BobPhotons photons={photons} bobPhotons={bobPhotons} />} />
            <Route path="/alice/common" element={<CommonBasis photons={photons} bobPhotons={bobPhotons} />} />
            <Route path="/alice/sharedkey" element={<SharedKey photons={photons} bobPhotons={bobPhotons} />} />
            <Route path="/tutorial/whybb84" element={<WhyBB84 />} />
            <Route path="/tutorial/qubitencoding" element={<QubitEncoding />} />
            <Route path="/tutorial/transmission" element={<Transmission />} />
            <Route path="/tutorial/bobmeasurements" element={<BobMeasurements />} />
            <Route path="/tutorial/basisreconciliation" element={<BasisReconciliation />} />
            <Route path="/tutorial/detectingeve" element={<DetectingEve />} />
          </Routes>
        </BrowserRouter>
      <div className="mt-15 mb-2 text-xs text-gray-500 text-center">
        Alice, Bob, and Eve icons:
        <a href="https://www.flaticon.com/free-icons/8-bit" title="8 bit icons" target="_blank" rel="noopener noreferrer" className="underline ml-1">
          8 bit icons created by frelayasia - Flaticon
        </a>
        </div>
      </div>
    </div>
  );
}

export default App


