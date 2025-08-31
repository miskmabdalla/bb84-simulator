
import { useState } from 'react';
import PhotonDisplay from '../../Components/PhotonDisplay';
import NavigationButtons from '../../Components/NavigationButtons';
import { useNavigate } from 'react-router-dom';
// Single correct getInitialPhotons function
function getInitialPhotons(num) {
	return Array.from({ length: num }).map(() => ({
		selectedBit: Math.random() < 0.5 ? 0 : 1,
		selectedBasis: Math.random() < 0.5 ? '+' : '×',
	}));
}

function SelectPhotons({ photons, setPhotons }) {
	const [numPhotons, setNumPhotons] = useState(8);
	// Use photons and setPhotons from props
	// const [photons, setPhotons] = useState(() => getInitialPhotons(8));
	const navigate = useNavigate();

	const handleBitToggle = (index, bit) => {
		setPhotons(photons.map((photon, i) =>
			i === index
				? { ...photon, selectedBit: bit }
				: photon
		));
	};

	const handleBasisToggle = (index, basis) => {
		setPhotons(photons.map((photon, i) =>
			i === index
				? { ...photon, selectedBasis: basis }
				: photon
		));
	};

	const handleNumChange = (e) => {
		const n = Math.min(8, parseInt(e.target.value));
		setNumPhotons(n);
		setPhotons(getInitialPhotons(n));
	};

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="relative w-[900px] h-[600px] border-4 border-green-500 flex flex-col items-center justify-center">
				<NavigationButtons
					onPrev={() => window.history.back()}
					onNext={() => navigate('/alice/step2')}
				/>
				<div className="mb-8">
					<label htmlFor="numPhotons" className="text-green-500 font-bold mr-2 uppercase">NUMBER OF PHOTONS:</label>
					<select
						id="numPhotons"
						value={numPhotons}
						onChange={handleNumChange}
						className="px-4 py-2 bg-gray-900 text-white border border-green-500"
					>
						{Array.from({ length: 6 }, (_, i) => i + 3).map(num => (
							<option key={num} value={num}>{num}</option>
						))}
					</select>
				</div>
				<div className="flex gap-3 pb-2 justify-center" style={{ minWidth: 'fit-content' }}>
					{photons.map((photon, index) => (
						<PhotonDisplay
							key={index}
							photon={photon}
							selectable={true}
							onBitSelect={(bit) => handleBitToggle(index, bit)}
							onBasisSelect={(basis) => handleBasisToggle(index, basis)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default SelectPhotons;
