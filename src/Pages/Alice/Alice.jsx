import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../../Components/NavigationButtons';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function Alice() {
  const navigate = useNavigate();
  return (
    <GreenRectangleContainer>
      <NavigationButtons
        onPrev={() => navigate(-1)}
        onNext={() => navigate('step1')}
      />
      <h1 className="text-3xl font-bold text-green-500 mb-6">ALICE'S PAGE</h1>
      <p className="text-lg text-green-500">WELCOME, ALICE! HERE YOU CAN SEND PHOTONS.</p>
    </GreenRectangleContainer>
  );
}
export default Alice;