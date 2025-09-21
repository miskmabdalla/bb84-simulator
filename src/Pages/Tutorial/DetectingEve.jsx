import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../../Components/NavigationButtons';
import eveIcon from '../../assets/eve-red.png';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function DetectingEve() {
  const navigate = useNavigate();
  return (
    <GreenRectangleContainer>
      <h1 className="text-3xl font-bold text-green-700 mt-0 mb-2">Error Checking</h1>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/select')}
      />
      <div className="flex items-center justify-center mt-4 gap-4">
        <img src={eveIcon} alt="Eve icon" className="w-16 h-16" />
        <span className="text-red-500 font-semibold text-lg">Eve measures qubits</span>
      </div>
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        <p>
          Alice and Bob publicly compare a random subset of their sifted key.<br />
          If Eve intercepted, her random basis guesses introduced errors.<br />
          <span className="block">High error rate = Eve detected.</span>
          <span className="block">Low error rate = Key is safe.</span>
        </p>
      </div>
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        <span className="italic">Technical note:</span> The error threshold depends on quantum channel noise tolerance. Typical BB84 assumes ≤ 11% QBER (Quantum Bit Error Rate).
      </div>
    </GreenRectangleContainer>
  );
}

export default DetectingEve;
