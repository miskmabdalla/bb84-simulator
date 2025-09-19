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
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/alice/common')}
      />
        {/* Overlay both photon rows absolutely centered */}
          <div style={{ position: 'absolute', left: '50%', top: '35%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transform: 'translate(-50%, -50%)' }}>
            {/* Alice's photons row */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', transition: 'transform 0.7s cubic-bezier(0.4,0.8,0.6,1)', zIndex: 2, transform: showBob ? 'translateY(-100px)' : 'translateY(0)' }}>
                <h2 className="text-2xl font-bold text-green-500 mt-6 mb-2 uppercase">ALICE'S PHOTONS</h2>
                <div id='alice-photons' style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
                    {photons.map((photon, index) => (
                        <PhotonDisplay key={index} photon={photon} />
                    ))}
                </div>
            </div>
            {/* Bob's photons row */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', transition: 'transform 0.7s cubic-bezier(0.4,0.8,0.6,1)', zIndex: 1, transform: showBob ? 'translateY(100px)' : 'translateY(0)', opacity: showBob ? 1 : 0 }}>
                {showBob && <h2 className="text-2xl font-bold text-green-500 mt-6 mb-2 uppercase">BOB'S PHOTONS</h2>}
                <div id='bob-photons' style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
                    {bobPhotons && bobPhotons.map((photon, index) => (
                    <PhotonDisplay key={index} photon={photon} showCopiedHighlight />
                    ))}
                </div>
            </div>
        </div>
  </GreenRectangleContainer>
  );
}

export default BobPhotons;
