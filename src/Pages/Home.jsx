import { useNavigate } from 'react-router-dom';
import GreenRectangleContainer from '../Components/GreenRectangleContainer';

function Home() {
	const navigate = useNavigate();
	return (
		<GreenRectangleContainer>
			<div className="text-green-500 mb-8">
				<h1 className="text-3xl font-bold">WELCOME TO BB84 SIMULATOR</h1>
				<p className="mt-2">An interactive journey into quantum key distribution. Press start to begin.</p>
			</div>
					<button
						className="text-green-500 text-xl px-8 py-4 border hover:cursor-pointer border-green-500 outline-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-black"
						onClick={() => navigate('/tutorial/whybb84')}
					>
						START
					</button>
		</GreenRectangleContainer>
	);
}

export default Home;
