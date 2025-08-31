import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../../Components/NavigationButtons';

function Eve() {
	const navigate = useNavigate();
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="relative w-[900px] h-[600px] border-4 border-green-500 flex flex-col items-center justify-center">
				<NavigationButtons
					onPrev={() => navigate(-1)}
					onNext={() => navigate('/select')}
				/>
				<h1 className="text-3xl font-bold text-green-500 mb-6">Eve's Page</h1>
				<p className="text-lg text-green-500">Welcome, Eve! Here you can intercept photons.</p>
			</div>
		</div>
	);
}

export default Eve;
