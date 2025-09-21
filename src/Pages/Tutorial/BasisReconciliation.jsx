import NavigationButtons from '../../Components/NavigationButtons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function BasisReconciliation() {
  const navigate = useNavigate();
  // Example data for 4 qubits
  const aliceBases = ['+', '×', '+', '×'];
  const bobBases =   ['+', '+', '+', '×'];

  // Determine matches
  const matches = aliceBases.map((basis, i) => basis === bobBases[i]);

  return (
    <GreenRectangleContainer>
      <h1 className="text-3xl font-bold text-green-700 mt-0 mb-2">Public Basis Comparison</h1>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/tutorial/detectingeve')}
      />
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        <p>Now, Alice and Bob reveal their basis choices over the classical channel (but not the bit values!).<br />
        They discard all positions where their bases differ.<br />
        The remaining bits form the sifted key.</p>
      </div>
      {/* Visual Table: Highlight matches in green, mismatches in red, styled like QubitEncoding */}
      <div className="mt-4 w-full flex flex-col items-center">
        <table className="table-auto border-collapse w-1/2 text-center bg-black text-green-500">
          <thead>
            <tr>
              <th className="border px-4 py-2">Alice's Basis</th>
              <th className="border px-4 py-2">Bob's Basis</th>
              <th className="border px-4 py-2">Keep?</th>
            </tr>
          </thead>
          <tbody>
            {aliceBases.map((basis, i) => (
              <tr key={i} className={matches[i] ? 'bg-green-900 bg-opacity-40' : 'bg-red-900 bg-opacity-40'}>
                <td className="border px-4 py-2">{basis}</td>
                <td className="border px-4 py-2">{bobBases[i]}</td>
                <td className={`border px-4 py-2 font-bold ${matches[i] ? 'text-green-400' : 'text-red-400'}`}>{matches[i] ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        <span className="italic">Technical note:</span> On average, ~50% of bits are discarded.
      </div>
    </GreenRectangleContainer>
  );
}

export default BasisReconciliation;
