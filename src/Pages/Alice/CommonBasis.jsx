import { useNavigate } from 'react-router-dom';
import PhotonDisplay from '../../Components/PhotonDisplay';
import NavigationButtons from '../../Components/NavigationButtons';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';
import { motion } from 'framer-motion';

function CommonBasis({ photons, bobPhotons }) {
  const navigate = useNavigate();
  // Find common basis indices
  const commonIndices = photons.map((photon, i) => photon.selectedBasis === bobPhotons[i].selectedBasis);

  return (
    <GreenRectangleContainer>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/alice/sharedkey')}
      />
      <div style={{ position: 'absolute', left: '50%', top: '47.75%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transform: 'translate(-50%, -50%)' }}>
        {/* Alice's photons row */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 2 }}>
          <h2 className="text-2xl font-bold text-green-500 mt-6 mb-2 uppercase">ALICE'S PHOTONS</h2>
          <div id='alice-photons' style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
            {photons.map((photon, index) => (
              <PhotonDisplay
                key={index}
                photon={photon}
                showCopiedHighlight={commonIndices[index]}
                highlightBg={commonIndices[index] ? 'bg-yellow-200' : ''}
              />
            ))}
          </div>
        </div>
        {/* Bob's photons row */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1 }}>
          <h2 className="text-2xl font-bold text-green-500 mt-15 mb-2 uppercase">BOB'S PHOTONS</h2>
          <div id='bob-photons' style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
            {bobPhotons.map((photon, index) => (
              <PhotonDisplay
                key={index}
                photon={photon}
                showCopiedHighlight={commonIndices[index]}
                highlightBg={commonIndices[index] ? 'bg-yellow-200' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </GreenRectangleContainer>
  );
}

export default CommonBasis;
