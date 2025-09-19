import PlayerButton from '../Components/PlayerButton';
import { useNavigate } from 'react-router-dom';
import GreenRectangleContainer from '../Components/GreenRectangleContainer';


function PlayerSelection() {
	const navigate = useNavigate();
	return (
		<GreenRectangleContainer>
			<h1 className="text-3xl font-bold text-green-500 mb-8">SELECT YOUR PLAYER</h1>
			<div className="flex justify-center space-x-10">
				<PlayerButton playerName="ALICE" playerDesc="SEND PHOTONS" onClick={() => navigate('/alice')} />
				<PlayerButton playerName="BOB" playerDesc="RECEIVE PHOTONS" onClick={() => navigate('/bob')} />
				<PlayerButton playerName="EVE" playerDesc="INTERCEPT PHOTONS" onClick={() => navigate('/eve')} />
			</div>
		</GreenRectangleContainer>
	);
}

export default PlayerSelection;
