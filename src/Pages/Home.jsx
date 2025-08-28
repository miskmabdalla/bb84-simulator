import { useNavigate } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center min-h-screen justify-center">
			<div className="text-green-500 mb-8">
				<h1 className="text-3xl font-bold">WELCOME TO BB84 SIMULATOR</h1>
				<p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
			</div>
			<button
				className="text-green-500 text-xl px-8 py-4 border outline outline-2 hover:cursor-pointer border-green-500 outline-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-black"
				onClick={() => navigate('/select')}
			>
				START
			</button>
		</div>
	);
}

export default Home;
