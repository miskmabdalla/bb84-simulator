import './Button.css'; 
function PlayerButton({ playerName, playerDesc, onClick }) {
  return (
    <div className="flex flex-col items-center group">
      <button
        className="btn-big"
        onClick={onClick}
      >
        {playerName}
      </button>
      <span className="mt-4 text-sm text-green-700 opacity-0 group-hover:opacity-100 transition-opacity h-5 flex items-center">
        {playerDesc}
      </span>
    </div>
  );
}

export default PlayerButton;
