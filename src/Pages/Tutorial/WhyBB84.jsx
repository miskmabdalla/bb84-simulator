import NavigationButtons from '../../Components/NavigationButtons';
import { useNavigate } from 'react-router-dom';
import aliceIcon from '../../assets/alice.png';
import bobIcon from '../../assets/bob.png';
import eveIcon from '../../assets/eve.png';

function WhyBB84() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="relative w-[900px] h-[600px] border-4 border-green-500 flex flex-col items-center justify-center mb-4">
  <h1 className="text-3xl font-bold text-green-700 mb-2">Why BB84?</h1>
        <NavigationButtons
          onPrev={() => window.history.back()}
          onNext={() => navigate('/tutorial/qubitencoding')}
        />
        {/* Visual Split-Screen Diagram */}
        <div className="flex w-full justify-center items-center mt-8 mb-2 gap-0">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-400">
              <img src={aliceIcon} alt="Alice icon" className="w-16 h-16" />
            </div>
            <span className="mt-2 text-blue-700 font-semibold">Alice</span>
          </div>
          <div className="flex-1 flex flex-col items-center relative">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center border-2 border-red-400">
              <img src={eveIcon} alt="Eve icon" className="w-16 h-16" />
            </div>
            <span className="mt-2 text-red-700 font-semibold">Eve</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-400">
              <img src={bobIcon} alt="Bob icon" className="w-16 h-16" />
            </div>
            <span className="mt-2 text-green-700 font-semibold">Bob</span>
          </div>
        </div>
        <div className="mt-2 text-lg text-green-700 font-semibold text-center px-8">
          <p>Alice and Bob want to share a secret key. They are connected by two channels:</p>
          <ul className="list-disc list-inside mt-4 mb-4 text-left">
            <li>A quantum channel (to send qubits).</li>
            <li>A classical channel (public, but authenticated).</li>
          </ul>
          <p>An eavesdropper, Eve, can listen to the classical channel and may try to intercept qubits.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyBB84;
