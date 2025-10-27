import './Header.css';

function Header({ isDarkMode, onToggleTheme }) {
  return (
    <header className="app-header">
      <h1>JSON Tree Visualizer</h1>
      <div className="header-controls">
        <span className="mode-label">Dark/Light</span>
        <button 
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          <div className={`toggle-slider ${isDarkMode ? 'active' : ''}`}>
            <div className="toggle-thumb"></div>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;

