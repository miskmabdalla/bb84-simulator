import NavigationButtons from '../../Components/NavigationButtons';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PhotonDisplay from '../../Components/PhotonDisplay';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function BobPhotons({ photons, bobPhotons }) {
  const navigate = useNavigate();
  const [showBob, setShowBob] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowBob(true), 1600);
    return () => clearTimeout(timer);
  }, [photons]);

  return (
    <GreenRectangleContainer>
      <h2 className="text-2xl font-bold text-green-500 mt-6 mb-2 uppercase">ALICE'S PHOTONS</h2>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/alice/common')}
      />
      <div className="w-full flex flex-col items-center mt-8">
        <div className="flex gap-3 pb-2 justify-center" style={{ minWidth: 'fit-content' }}>
          {photons.map((photon, index) => (
            <PhotonDisplay key={index} photon={photon} />
          ))}
        </div>
        {showBob && (
          <>
            <h2 className="text-2xl font-bold text-green-500 mt-12 mb-2 uppercase">BOB'S PHOTONS</h2>
            <div className="flex gap-3 pb-2 justify-center" style={{ minWidth: 'fit-content' }}>
              {bobPhotons && bobPhotons.map((photon, index) => (
                <PhotonDisplay key={index} photon={photon} showCopiedHighlight />
              ))}
            </div>
          </>
        )}
      </div>
    </GreenRectangleContainer>
  );
}

export default BobPhotons;
