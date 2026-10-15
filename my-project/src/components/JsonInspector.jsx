import { useState } from 'react';

export default function JsonInspector({ sampleData }) {
  const [jsonString, setJsonString] = useState(
    JSON.stringify(sampleData || { title: "Sample Task", level: "Beginner" }, null, 2)
  );
  const [output, setOutput] = useState('Click "Parse" to test.');
  const [error, setError] = useState('');

  const handleParse = () => {
    try {
      setError('');
      const parsed = JSON.parse(jsonString);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err) {
      setError(err.message);
      setOutput('');
    }
  };

  return (
    <div className="p-6 bg-white border rounded-lg shadow-sm max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">JSON Inspector</h2>
      <p className="text-sm text-gray-500 mb-4">Test `JSON.stringify()` and `JSON.parse()`.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">JSON String</label>
          <textarea
            value={jsonString}
            onChange={(e) => setJsonString(e.target.value)}
            rows={6}
            className="w-full font-mono text-xs p-2 border rounded bg-gray-50"
          />
          <button
            onClick={handleParse}
            className="mt-2 px-3 py-1.5 bg-emerald-500 text-white text-xs font-medium rounded hover:bg-emerald-600"
          >
            Parse JSON
          </button>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Result</label>
          {error ? (
            <div className="p-2 bg-red-50 border border-red-200 rounded text-red-600 text-xs font-mono">
              Error: {error}
            </div>
          ) : (
            <pre className="p-2 border rounded bg-gray-900 text-emerald-400 font-mono text-xs h-35 overflow-auto">
              {output}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}