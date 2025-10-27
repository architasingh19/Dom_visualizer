import { useState, useCallback } from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import { jsonToTree, layoutTree } from '../utils/treeUtils';

export const useJsonTree = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [error, setError] = useState('');
  const [hasGenerated, setHasGenerated] = useState(false);

  const generateTree = useCallback((jsonInput, highlightPath = '') => {
    setError('');
    
    try {
      const parsed = JSON.parse(jsonInput);
      const { nodes: treeNodes, edges: treeEdges } = jsonToTree(parsed, null, 'root', '$', highlightPath);
      
      const layoutedNodes = layoutTree(treeNodes, treeEdges);
      
      setNodes(layoutedNodes);
      setEdges(treeEdges);
      setHasGenerated(true);
      
      return { success: true, nodes: layoutedNodes };
    } catch (err) {
      setError(`Invalid JSON: ${err.message}`);
      setNodes([]);
      setEdges([]);
      setHasGenerated(false);
      
      return { success: false, error: err.message };
    }
  }, [setNodes, setEdges]);

  const clearTree = useCallback(() => {
    setNodes([]);
    setEdges([]);
    setError('');
    setHasGenerated(false);
  }, [setNodes, setEdges]);

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    error,
    hasGenerated,
    generateTree,
    clearTree
  };
};

