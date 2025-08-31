import { motion, AnimatePresence } from 'framer-motion';
import PhotonDisplay from '../../Components/PhotonDisplay';
import NavigationButtons from '../../Components/NavigationButtons';

function CommonBasis({ photons, bobPhotons }) {
  // Find common basis indices
  const commonIndices = photons.map((photon, i) => photon.selectedBasis === bobPhotons[i].selectedBasis);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[900px] h-[600px] border-4 border-green-500 flex flex-col items-center justify-start">
        <h2 className="text-2xl font-bold text-green-500 mt-6 mb-2 uppercase">ALICE'S PHOTONS</h2>
        <NavigationButtons
          onPrev={() => window.history.back()}
          onNext={() => {}}
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
      </div>
    </div>
  );
}

export default CommonBasis;
