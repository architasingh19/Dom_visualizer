import { useState, useCallback } from 'react';
import Header from './components/Header/Header';
import JsonInput from './components/JsonInput/JsonInput';
import SearchBar from './components/SearchBar/SearchBar';
import TreeVisualization from './components/TreeVisualization/TreeVisualization';
import { useTheme } from './hooks/useTheme';
import { useJsonTree } from './hooks/useJsonTree';
import { SAMPLE_JSON } from './constants/sampleData';
import './App.css';

function App() {
  const [jsonInput, setJsonInput] = useState(JSON.stringify(SAMPLE_JSON, null, 2));
  const [searchPath, setSearchPath] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [matchedNodeId, setMatchedNodeId] = useState(null);
  
  const { isDarkMode, toggleTheme } = useTheme();
  const { 
    nodes, 
    edges, 
    onNodesChange, 
    onEdgesChange, 
    error, 
    hasGenerated,
    generateTree,
    clearTree
  } = useJsonTree();

  // Generate tree visualization
  const handleGenerateTree = useCallback(() => {
    setSearchMessage('');
    setMatchedNodeId(null);
    generateTree(jsonInput);
  }, [jsonInput, generateTree]);

  // Search functionality
  const handleSearch = useCallback(() => {
    if (!searchPath.trim()) {
      setSearchMessage('Please enter a search path');
      setMatchedNodeId(null);
      return;
    }

    const result = generateTree(jsonInput, searchPath);
    
    if (result.success) {
      const matchedNode = result.nodes.find(node => node.data.path === searchPath);
      if (matchedNode) {
        setSearchMessage('Match found');
        setMatchedNodeId(matchedNode.id);
      } else {
        setSearchMessage('No match found');
        setMatchedNodeId(null);
      }
    } else {
      setSearchMessage('Error searching');
      setMatchedNodeId(null);
    }
  }, [searchPath, jsonInput, generateTree]);

  // Clear/Reset functionality
  const handleClear = () => {
    setJsonInput('');
    clearTree();
    setSearchPath('');
    setSearchMessage('');
    setMatchedNodeId(null);
  };

  // Load sample JSON
  const handleLoadSample = () => {
    setJsonInput(JSON.stringify(SAMPLE_JSON, null, 2));
  };

  // Node click handler - copy path
  const handleNodeClick = useCallback((event, node) => {
    const path = node.data.path;
    navigator.clipboard.writeText(path).then(() => {
      setSearchMessage(`Path copied: ${path}`);
      setTimeout(() => setSearchMessage(''), 2000);
    }).catch(() => {
      setSearchMessage('Failed to copy path');
    });
  }, []);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      
      <div className="main-content">
        <JsonInput
          jsonInput={jsonInput}
          onInputChange={setJsonInput}
          error={error}
          onGenerateTree={handleGenerateTree}
          onLoadSample={handleLoadSample}
          onClear={handleClear}
        />

        <div className="right-panel">
          <SearchBar
            searchPath={searchPath}
            onSearchChange={setSearchPath}
            onSearch={handleSearch}
            searchMessage={searchMessage}
          />

          <TreeVisualization
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={handleNodeClick}
            hasGenerated={hasGenerated}
            matchedNodeId={matchedNodeId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
