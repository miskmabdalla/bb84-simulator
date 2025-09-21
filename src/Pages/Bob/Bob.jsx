import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../../Components/NavigationButtons';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function Bob() {
	const navigate = useNavigate();
			return (
				<GreenRectangleContainer>
					<NavigationButtons
						onPrev={() => navigate(-1)}
						onNext={() => navigate('/bob/work-in-progress')}
					/>
					<h1 className="text-3xl font-bold text-green-500 mb-6">Bob's Page</h1>
					<p className="text-lg text-green-500">Welcome, Bob! Here you can receive photons.</p>
				</GreenRectangleContainer>
			);
}

export default Bob;
