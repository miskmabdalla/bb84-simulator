import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../../Components/NavigationButtons';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function Eve() {
	const navigate = useNavigate();
		return (
			<GreenRectangleContainer>
				<NavigationButtons
					onPrev={() => navigate(-1)}
					onNext={() => navigate('/eve/work-in-progress')}
				/>
				<h1 className="text-3xl font-bold text-green-500 mb-6">Eve's Page</h1>
				<p className="text-lg text-green-500">Welcome, Eve! Here you can intercept photons.</p>
			</GreenRectangleContainer>
		);
}

export default Eve;
