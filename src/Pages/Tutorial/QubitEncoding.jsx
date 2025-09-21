import NavigationButtons from '../../Components/NavigationButtons';
import { useNavigate } from 'react-router-dom';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function QubitEncoding() {
  // Show all possible combinations explicitly
  const tableRows = [
    { bit: 0, basis: '+', encoded: '|0⟩' },
    { bit: 1, basis: '+', encoded: '|1⟩' },
    { bit: 0, basis: '×', encoded: '|+⟩' },
    { bit: 1, basis: '×', encoded: '|−⟩' },
  ];

  const navigate = useNavigate();
  return (
    <GreenRectangleContainer>
      <h1 className="text-3xl font-bold text-green-700 mt-2 mb-2">Encoding Random Qubits</h1>
      <NavigationButtons
        onPrev={() => window.history.back()}
        onNext={() => navigate('/tutorial/transmission')}
      />
      <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
        <p>Alice generates two random strings:</p>
        <ul className="list-disc list-inside mt-2 mb-2 text-left">
          <li>A raw bit string (0s and 1s).</li>
          <li>A random basis string (Rectilinear + or Diagonal ×).</li>
        </ul>
        <p>She encodes each bit in the chosen basis:</p>
        <ul className="list-disc list-inside mt-2 mb-2 text-left">
          <li>0 in + basis = |0⟩, 1 in + basis = |1⟩</li>
          <li>0 in × basis = |+⟩, 1 in × basis = |−⟩</li>
        </ul>
      </div>
      {/* Visual Table */}
      <div className="mt-4 w-full flex flex-col items-center">
  <table className="table-auto border-collapse w-1/2 text-center bg-black text-green-500">
          <thead>
            <tr>
              <th className="border px-4 py-2">Bit</th>
              <th className="border px-4 py-2">Basis</th>
              <th className="border px-4 py-2">Encoded State</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{row.bit}</td>
                <td className="border px-4 py-2">{row.basis}</td>
                <td className="border px-4 py-2">{row.encoded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-green-700 text-center px-8">
        Alice does not tell Bob which basis she used.
      </div>
    </GreenRectangleContainer>
  );
}

export default QubitEncoding;
