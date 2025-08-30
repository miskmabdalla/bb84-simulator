import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../../Components/NavigationButtons';

function Alice() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[900px] h-[600px] border-4 border-green-500 rounded-xl flex flex-col items-center justify-center">
        {/* Top left button inside green rectangle */}
          {/* Navigation buttons inside green rectangle */}
          <NavigationButtons
            onPrev={() => navigate(-1)}
            onNext={() => navigate('alice/step1')}
          />
        <h1 className="text-3xl font-bold text-green-500 mb-6">Alice's Page</h1>
        <p className="text-lg text-green-500">Welcome, Alice! Here you can send photons.</p>
        {/* Bottom right button inside green rectangle */}
      </div>
    </div>
  );
}
export default Alice;