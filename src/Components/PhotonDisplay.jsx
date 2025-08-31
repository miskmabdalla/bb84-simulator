import React from 'react';

function PhotonDisplay({ photon, showCopiedHighlight = false, selectable = false, onBitSelect, onBasisSelect, highlightBg }) {
  return (
    <div
      className={`flex flex-col items-center gap-2 border-2 ${highlightBg ? highlightBg : 'bg-transparent'}`}
      style={{ padding: '6px', minWidth: 'fit-content', borderRadius: 0 }}
    >
      {/* Bit Selection */}
      <div className="flex gap-1">
        <button
          className={`w-8 h-8 text-sm font-bold shadow-lg border-none ${photon.selectedBit === 0 ? (showCopiedHighlight && photon.copied ? 'bg-blue-500 text-white border-2 border-yellow-400' : 'bg-blue-500 text-white') : 'bg-gray-700 text-gray-300'}`}
          style={{ borderRadius: 0 }}
          disabled={!selectable}
          title={photon.copied ? 'Copied from Alice' : 'Random'}
          onClick={selectable ? () => onBitSelect && onBitSelect(0) : undefined}
        >
          0
        </button>
        <button
          className={`w-8 h-8 text-sm font-bold shadow-lg border-none ${photon.selectedBit === 1 ? (showCopiedHighlight && photon.copied ? 'bg-purple-500 text-white border-2 border-yellow-400' : 'bg-purple-500 text-white') : 'bg-gray-700 text-gray-300'}`}
          style={{ borderRadius: 0 }}
          disabled={!selectable}
          title={photon.copied ? 'Copied from Alice' : 'Random'}
          onClick={selectable ? () => onBitSelect && onBitSelect(1) : undefined}
        >
          1
        </button>
      </div>
      {/* Basis Selection */}
      <div className="flex gap-1">
        <button
          className={`w-8 h-8 text-sm font-bold shadow-lg border-none ${photon.selectedBasis === '+' ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          style={{ borderRadius: 0 }}
          disabled={!selectable}
          onClick={selectable ? () => onBasisSelect && onBasisSelect('+') : undefined}
        >
          +
        </button>
        <button
          className={`w-8 h-8 text-sm font-bold shadow-lg border-none ${photon.selectedBasis === '×' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          style={{ borderRadius: 0 }}
          disabled={!selectable}
          onClick={selectable ? () => onBasisSelect && onBasisSelect('×') : undefined}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default PhotonDisplay;
