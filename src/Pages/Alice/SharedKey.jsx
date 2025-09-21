// import { motion, AnimatePresence } from 'framer-motion';
import PhotonDisplay from '../../Components/PhotonDisplay';
import NavigationButtons from '../../Components/NavigationButtons';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function SharedKey({ photons, bobPhotons }) {
  // Find common basis indices
  const commonIndices = photons.map((photon, i) => photon.selectedBasis === bobPhotons[i].selectedBasis);

  return (
    <GreenRectangleContainer>
      <h2 className="text-2xl font-bold text-green-500 mt-6 mb-2 uppercase">SHARED KEY PHOTONS</h2>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => {}}
      />
      <div className="w-full flex flex-col items-center mt-8">
        <div className="flex gap-3 pb-2 justify-center" style={{ minWidth: 'fit-content' }}>
          {bobPhotons.map((photon, index) => (
            <div key={index} className="flex flex-col items-center">
              <PhotonDisplay
                photon={photon}
                showCopiedHighlight={commonIndices[index]}
                highlightBg={commonIndices[index] ? 'bg-yellow-200' : ''}
              />
              {commonIndices[index] && (
                <div className="mt-2 flex items-center justify-center">
                  <span
                    className={`w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg border-none rounded ${photon.selectedBit === 0 ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}`}
                  >
                    {photon.selectedBit}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </GreenRectangleContainer>
  );
}

export default SharedKey;
