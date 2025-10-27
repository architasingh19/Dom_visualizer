import './Legend.css';

function Legend() {
  return (
    <div className="legend-panel">
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#c4b5fd' }}></div>
          <span>Object</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#86efac' }}></div>
          <span>Array</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#fed7aa' }}></div>
          <span>Primitive</span>
        </div>
      </div>
      <div className="info-text">
        💡 Click on any node to copy its path
      </div>
    </div>
  );
}

export default Legend;

