import React from 'react';

function NavigationButtons({ onPrev, onNext }) {
  return (
    <>
      <button
        className="absolute top-4 left-4 btn-small w-8 h-8 flex items-center justify-center p-0 text-base"
        onClick={onPrev}
      >
        {'<'}
      </button>
      <button
        className="absolute bottom-4 right-4 btn-small w-8 h-8 flex items-center justify-center p-0 text-base"
        onClick={onNext}
      >
        {'>'}
      </button>
    </>
  );
}

export default NavigationButtons;
