
import NavigationButtons from '../../Components/NavigationButtons';
import { useNavigate } from 'react-router-dom';
import aliceIcon from '../../assets/alice-green.png';
import bobIcon from '../../assets/bob-green.png';
import eveIcon from '../../assets/eve-red.png';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';
// Inline style for sequential dot animation

const DOT_ANIMATION_DURATION = 2.4; // seconds
const dotStyle = {
  display: 'inline-block',
  animation: `dotFade ${DOT_ANIMATION_DURATION}s infinite`,
};
const dot1 = { ...dotStyle, animationDelay: '0s' };
const dot2 = { ...dotStyle, animationDelay: '0.4s' };
const dot3 = { ...dotStyle, animationDelay: '0.8s' };

// Eve-to-Bob dots start after Alice-to-Eve animation completes, every loop
// Use negative delays so they start at opacity 0.2 on initial load
const dot1Delayed = { ...dotStyle, animationDelay: '-1.2s' };
const dot2Delayed = { ...dotStyle, animationDelay: '-0.8s' };
const dot3Delayed = { ...dotStyle, animationDelay: '-0.4s' };

const styleTag = (
  <style>
    {`
      @keyframes dotFade {
        0% { opacity: 0.2; }
        20% { opacity: 1; }
        100% { opacity: 0.2; }
      }
    `}
  </style>
);

function WhyBB84() {
  const navigate = useNavigate();
  return (
    <>
      {styleTag}
      <GreenRectangleContainer>
  <h1 className="text-3xl font-bold text-green-500 mb-2">Why BB84?</h1>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/tutorial/qubitencoding')}
      />
      {/* Visual Split-Screen Diagram */}
      <div className="flex w-full items-center justify-center mt-8 mb-2 gap-0">
        <div className="flex flex-col items-center mr-8">
          <img src={aliceIcon} alt="Alice icon" className="w-16 h-16" />
          <span className="mt-2 text-green-500 font-semibold">Alice</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <span style={{ fontSize: '2.5rem', color: '#22c55e' }}>
            <span style={dot1}>.</span>
            <span style={dot2}>.</span>
            <span style={dot3}>.</span>
          </span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <img src={eveIcon} alt="Eve icon" className="w-16 h-16" />
          <span className="mt-2 text-red-700 font-semibold">Eve</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <span style={{ fontSize: '2.5rem', color: '#ef4444' }}>
            <span style={dot1Delayed}>.</span>
            <span style={dot2Delayed}>.</span>
            <span style={dot3Delayed}>.</span>
          </span>
        </div>
        <div className="flex flex-col items-center ml-8">
          <img src={bobIcon} alt="Bob icon" className="w-16 h-16" />
          <span className="mt-2 text-green-500 font-semibold">Bob</span>
        </div>
      </div>
  <div className="mt-2 text-lg text-green-500 font-semibold text-center px-8">
        <p>Alice and Bob want to share a secret key. They are connected by two channels:</p>
        <ul className="list-disc list-inside mt-4 mb-4 text-left">
          <li>A quantum channel (to send qubits).</li>
          <li>A classical channel (public, but authenticated).</li>
        </ul>
        <p>An eavesdropper, Eve, can listen to the classical channel and may try to intercept qubits.</p>
      </div>
      </GreenRectangleContainer>
    </>
  );
}

export default WhyBB84;
