import './SearchBar.css';

function SearchBar({ searchPath, onSearchChange, onSearch, searchMessage }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <>
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="$.user.address.city"
          value={searchPath}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-search" onClick={onSearch}>
          Search
        </button>
      </div>

      {searchMessage && (
        <div className={`search-message ${searchMessage.includes('No match') ? 'error' : 'success'}`}>
          {searchMessage}
        </div>
      )}
    </>
  );
}

export default SearchBar;

