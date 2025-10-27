import './JsonInput.css';

function JsonInput({ 
  jsonInput, 
  onInputChange, 
  error, 
  onGenerateTree, 
  onLoadSample, 
  onClear 
}) {
  return (
    <div className="left-panel">
      <div className="input-section">
        <label className="input-label">Paste or type JSON data</label>
        <textarea
          className="json-input"
          value={jsonInput}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Enter JSON data here..."
          spellCheck="false"
        />
        
        {error && (
          <div className="error-message">{error}</div>
        )}

        <div className="button-group">
          <button className="btn btn-primary" onClick={onGenerateTree}>
            Generate Tree
          </button>
          <button className="btn btn-secondary" onClick={onLoadSample}>
            Load Sample
          </button>
          <button className="btn btn-secondary" onClick={onClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default JsonInput;

