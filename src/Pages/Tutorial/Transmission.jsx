import NavigationButtons from '../../Components/NavigationButtons';
import aliceGreenIcon from '../../assets/alice-green.png';
import bobGreenIcon from '../../assets/bob-green.png';
import { useNavigate } from 'react-router-dom';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function Transmission() {
  const navigate = useNavigate();
  // Example qubits for animation
  const qubits = ['|0⟩', '|1⟩', '|+⟩', '|−⟩'];

  return (
    <GreenRectangleContainer>
      <h1 className="text-3xl font-bold text-green-700 mt-0 mb-2">Sending Qubits</h1>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/tutorial/bobmeasurements')}
      />
      {/* Alice and Bob Diagram (green icons) */}
      <div className="flex w-full items-center justify-center mt-4 mb-4 gap-0">
        <div className="flex flex-col items-center mr-8">
          <img src={aliceGreenIcon} alt="Alice icon" className="w-16 h-16" />
          <span className="mt-2 text-green-700 font-semibold">Alice</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <span className="text-green-500 text-4xl animate-pulse">...</span>
        </div>
        <div className="flex flex-col items-center ml-8">
          <img src={bobGreenIcon} alt="Bob icon" className="w-16 h-16" />
          <span className="mt-2 text-green-700 font-semibold">Bob</span>
        </div>
      </div>
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        <p>Alice sends the qubits over the quantum channel to Bob.<br />
        Each qubit is fragile and any attempt to measure it changes its state.</p>
      </div>
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        Unlike classical bits, qubits cannot be copied due to the no-cloning theorem, which states that it is impossible to create an independent and identical copy of an arbitrary unknown quantum state.<br />
        Therefore, Eve cannot perfectly intercept without disturbance.
      </div>
    </GreenRectangleContainer>
  );
}

export default Transmission;
