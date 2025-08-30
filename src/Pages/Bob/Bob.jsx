import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../../Components/NavigationButtons';

function Bob() {
	const navigate = useNavigate();
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="relative w-[900px] h-[600px] border-4 border-green-500 rounded-xl flex flex-col items-center justify-center">
				<NavigationButtons
					onPrev={() => navigate(-1)}
					onNext={() => navigate('/eve')}
				/>
				<h1 className="text-3xl font-bold text-green-500 mb-6">Bob's Page</h1>
				<p className="text-lg text-green-500">Welcome, Bob! Here you can receive photons.</p>
			</div>
		</div>
	);
}

export default Bob;
