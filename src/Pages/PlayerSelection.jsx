import PlayerButton from '../Components/PlayerButton';
import { useNavigate } from 'react-router-dom';


function PlayerSelection() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center min-h-screen justify-center">
            <h1 className="text-3xl font-bold text-green-500 mb-12">SELECT YOUR PLAYER</h1>
			<div className="flex justify-center space-x-10">
				<PlayerButton playerName="ALICE" playerDesc="SEND PHOTONS" onClick={() => navigate('/alice')} />
				<PlayerButton playerName="BOB" playerDesc="RECEIVE PHOTONS" onClick={() => navigate('/bob')} />
				<PlayerButton playerName="EVE" playerDesc="INTERCEPT PHOTONS" onClick={() => navigate('/eve')} />
			</div>
		</div>
	);
}

export default PlayerSelection;
