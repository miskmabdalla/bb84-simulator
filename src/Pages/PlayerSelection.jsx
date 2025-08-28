import PlayerButton from '../Components/PlayerButton';

function PlayerSelection() {
	return (
		<div className="flex flex-col items-center min-h-screen justify-center">
            <h1 className="text-3xl font-bold text-green-500 mb-12">SELECT YOUR PLAYER</h1>
			<div className="flex justify-center space-x-10">
				<PlayerButton playerName="ALICE" playerDesc="SEND PHOTONS" />
				<PlayerButton playerName="BOB" playerDesc="RECEIVE PHOTONS" />
				<PlayerButton playerName="EVE" playerDesc="INTERCEPT PHOTONS" />
			</div>
		</div>
	);
}

export default PlayerSelection;
