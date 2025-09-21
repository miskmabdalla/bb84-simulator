import NavigationButtons from '../../Components/NavigationButtons';
import { useNavigate } from 'react-router-dom';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function BobMeasurements() {
  const navigate = useNavigate();
  // Example data for 4 qubits

  return (
    <GreenRectangleContainer>
      <h1 className="text-3xl font-bold text-green-700 mt-0 mb-2">Bob Measures Randomly</h1>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/tutorial/basisreconciliation')}
      />
      {/* Removed Bob icon and label */}
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        <p>Bob also generates a random basis string.<br />
        For each incoming qubit, he randomly chooses whether to measure in the + or × basis.<br />
        If his basis matches Alice’s → Bob gets the correct bit.<br />
        If his basis differs → Bob gets a random outcome.</p>
      </div>
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        This randomness ensures Eve cannot predict both bases and bits.
      </div>
    </GreenRectangleContainer>
  );
}

export default BobMeasurements;
