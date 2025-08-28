import './Button.css'; 
function PlayerButton({ playerName, playerDesc }) {
  return (
    <div className="flex flex-col items-center group">
      <button
        class="btn-big"
        //   `text-green-500 text-xl px-8 py-4 border outline outline-2 hover:cursor-pointer border-green-500 outline-green-500 transition-colors duration-200 hover:bg-green-500 hover:text-black`
        
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
