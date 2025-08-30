
import { useState } from 'react';
import NavigationButtons from '../../Components/NavigationButtons';
// Single correct getInitialPhotons function
function getInitialPhotons(num) {
	return Array.from({ length: num }).map(() => ({
		selectedBit: Math.random() < 0.5 ? 0 : 1,
		selectedBasis: Math.random() < 0.5 ? '+' : '×',
	}));
}

function SelectPhotons() {
	const [numPhotons, setNumPhotons] = useState(8);
	const [photons, setPhotons] = useState(() => getInitialPhotons(8));

	const handleBitToggle = (index, bit) => {
		setPhotons(prev => prev.map((photon, i) =>
			i === index
				? { ...photon, selectedBit: bit }
				: photon
		));
	};

	const handleBasisToggle = (index, basis) => {
		setPhotons(prev => prev.map((photon, i) =>
			i === index
				? { ...photon, selectedBasis: basis }
				: photon
		));
	};

	const handleNumChange = (e) => {
		const n = Math.min(10, parseInt(e.target.value));
		setNumPhotons(n);
		setPhotons(getInitialPhotons(n));
	};

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="relative w-[900px] h-[600px] border-4 border-green-500 rounded-xl flex flex-col items-center justify-center">
				<NavigationButtons
					onPrev={() => window.history.back()}
					onNext={() => {}}
				/>
				<div className="mb-8">
					<label htmlFor="numPhotons" className="text-white font-bold mr-2">Number of Photons:</label>
					<select
						id="numPhotons"
						value={numPhotons}
						onChange={handleNumChange}
						className="px-4 py-2 rounded bg-gray-900 text-white border border-green-500"
					>
						{Array.from({ length: 8 }, (_, i) => i + 3).map(num => (
							<option key={num} value={num}>{num}</option>
						))}
					</select>
				</div>
				<div className="flex gap-3 pb-2 justify-center" style={{ minWidth: 'fit-content' }}>
					{photons.map((photon, index) => (
						<div key={index} className="flex flex-col items-center gap-2">
							<label className="text-sm font-semibold text-gray-300">Photon {index + 1}</label>
							{/* Bit Selection */}
							<div className="flex gap-1">
								<button
									className={`w-8 h-8 text-sm font-bold shadow-lg border-none ${photon.selectedBit === 0 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
									style={{ borderRadius: 0 }}
									onClick={() => handleBitToggle(index, 0)}
								>
									0
								</button>
								<button
									className={`w-8 h-8 text-sm font-bold shadow-lg border-none ${photon.selectedBit === 1 ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
									style={{ borderRadius: 0 }}
									onClick={() => handleBitToggle(index, 1)}
								>
									1
								</button>
							</div>
							{/* Basis Selection */}
							<div className="flex gap-1">
								<button
									className={`w-8 h-8 text-sm font-bold shadow-lg border-none ${photon.selectedBasis === '+' ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
									style={{ borderRadius: 0 }}
									onClick={() => handleBasisToggle(index, '+')}
								>
									+
								</button>
								<button
									className={`w-8 h-8 text-sm font-bold shadow-lg border-none ${photon.selectedBasis === '×' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
									style={{ borderRadius: 0 }}
									onClick={() => handleBasisToggle(index, '×')}
								>
									×
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SelectPhotons;
