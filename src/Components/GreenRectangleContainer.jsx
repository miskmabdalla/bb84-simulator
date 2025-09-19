import React from 'react';

function GreenRectangleContainer({ children }) {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="relative w-[900px] h-[650px] border-4 border-green-500 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default GreenRectangleContainer;
