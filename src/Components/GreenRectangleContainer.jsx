import React from 'react';

function GreenRectangleContainer({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-[900px] h-[600px] border-4 border-green-500 rounded-xl flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default GreenRectangleContainer;
