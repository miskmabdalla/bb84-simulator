import NavigationButtons from '../../Components/NavigationButtons';
import bobGreenIcon from '../../assets/bob-green.png';

function BobMeasurements() {
  // Example data for 4 qubits
  const bases = ['+', '×', '+', '×']; // Bob's random bases
  const results = [1, 0, 0, 1]; // Example measurement results

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[900px] h-[600px] border-4 border-green-500 flex flex-col items-center justify-center mb-4">
        <h1 className="text-3xl font-bold text-green-700 mt-0 mb-2">Bob Measures Randomly</h1>
        <NavigationButtons
          onPrev={() => window.history.back()}
          onNext={() => {}}
        />
  {/* Removed Bob icon and label */}
        <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
          <p>Bob also generates a random basis string.<br />
          For each incoming qubit, he randomly chooses whether to measure in the + or × basis.<br />
          If his basis matches Alice’s → Bob gets the correct bit.<br />
          If his basis differs → Bob gets a random outcome.</p>
        </div>
        {/* Visual Table: Bob's measurement outcomes */}
        <div className="mt-4 w-full flex flex-col items-center">
          <table className="table-auto border-collapse w-1/2 text-center bg-black text-green-500">
            <thead>
              <tr>
                <th className="border px-4 py-2">Basis Chosen</th>
                <th className="border px-4 py-2">Measurement Result</th>
              </tr>
            </thead>
            <tbody>
              {bases.map((basis, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">{basis}</td>
                  <td className="border px-4 py-2">{results[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-lg text-green-700 font-semibold text-center px-8">
          This randomness ensures Eve cannot predict both bases and bits.
        </div>
      </div>
    </div>
  );
}

export default BobMeasurements;
