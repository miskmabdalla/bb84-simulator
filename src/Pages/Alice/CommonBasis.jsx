import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PhotonDisplay from '../../Components/PhotonDisplay';
import NavigationButtons from '../../Components/NavigationButtons';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function CommonBasis({ photons, bobPhotons }) {
  const navigate = useNavigate();
  // Find common basis indices
  const commonIndices = photons.map((photon, i) => photon.selectedBasis === bobPhotons[i].selectedBasis);

  return (
    <GreenRectangleContainer>
      <h2 className="text-2xl font-bold text-green-500 mt-6 mb-2 uppercase">ALICE'S PHOTONS</h2>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/alice/sharedkey')}
      />
      <div className="w-full flex flex-col items-center mt-8">
        <div className="flex gap-3 pb-2 justify-center" style={{ minWidth: 'fit-content' }}>
          {photons.map((photon, index) => (
            <PhotonDisplay
              key={index}
              photon={photon}
              showCopiedHighlight={commonIndices[index]}
              highlightBg={commonIndices[index] ? 'bg-yellow-200' : ''}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-green-500 mt-12 mb-2 uppercase">BOB'S PHOTONS</h2>
        <div className="flex gap-3 pb-2 justify-center" style={{ minWidth: 'fit-content' }}>
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
    </GreenRectangleContainer>
  );
}

export default CommonBasis;
