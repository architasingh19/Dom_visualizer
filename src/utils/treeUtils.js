import { MarkerType } from 'reactflow';

// Generate unique ID for nodes
export const generateId = () => `node-${Math.random().toString(36).substr(2, 9)}`;

// Determine node type and color
export const getNodeStyle = (value, isHighlighted = false) => {
  let backgroundColor = '#93c5fd'; // Default blue for objects

  if (Array.isArray(value)) {
    backgroundColor = '#86efac'; // Green for arrays
  } else if (value === null) {
    backgroundColor = '#fde047'; // Yellow for primitives
  } else if (typeof value === 'object') {
    backgroundColor = '#c4b5fd'; // Purple for objects
  } else {
    backgroundColor = '#fed7aa'; // Orange for primitives
  }

  if (isHighlighted) {
    backgroundColor = '#f472b6'; // Pink for highlighted nodes
  }

  return { backgroundColor };
};

// Create node data object
export const createNodeData = (key, value, path) => {
  const nodeLabel = key === 'root' ? 'Root' : key;
  const displayValue = typeof value !== 'object' ? String(value) : null;
  
  return {
    label: nodeLabel,
    value: displayValue,
    path,
    fullValue: value,
    tooltip: `Path: ${path}\nValue: ${JSON.stringify(value)}`
  };
};

// Convert JSON to tree nodes and edges
export const jsonToTree = (obj, parentId = null, key = 'root', path = '$', highlightPath = '') => {
  const id = generateId();
  const isHighlighted = path === highlightPath;
  
  let newNodes = [];
  let newEdges = [];
  
  const value = obj;
  const { backgroundColor } = getNodeStyle(value, isHighlighted);
  const nodeData = createNodeData(key, value, path);

  newNodes.push({
    id,
    type: 'default',
    data: nodeData,
    position: { x: 0, y: 0 },
    style: {
      backgroundColor,
      border: isHighlighted ? '3px solid #ec4899' : '2px solid #666',
      borderRadius: '8px',
      padding: '12px 16px',
      minWidth: '120px',
      maxWidth: '200px',
      fontSize: '14px',
      fontWeight: '500',
      wordWrap: 'break-word'
    }
  });

  // Create edge from parent
  if (parentId !== null) {
    newEdges.push({
      id: `edge-${parentId}-${id}`,
      source: parentId,
      target: id,
      type: 'smoothstep',
      animated: isHighlighted,
      style: { stroke: isHighlighted ? '#ec4899' : '#94a3b8', strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: isHighlighted ? '#ec4899' : '#94a3b8'
      }
    });
  }

  // Process children
  if (value !== null && typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const childPath = `${path}[${index}]`;
        const { nodes: childNodes, edges: childEdges } = jsonToTree(
          item, 
          id, 
          `${index}`, 
          childPath, 
          highlightPath
        );
        newNodes = [...newNodes, ...childNodes];
        newEdges = [...newEdges, ...childEdges];
      });
    } else {
      Object.entries(value).forEach(([childKey, childValue]) => {
        const childPath = `${path}.${childKey}`;
        const { nodes: childNodes, edges: childEdges } = jsonToTree(
          childValue, 
          id, 
          childKey, 
          childPath, 
          highlightPath
        );
        newNodes = [...newNodes, ...childNodes];
        newEdges = [...newEdges, ...childEdges];
      });
    }
  }

  return { nodes: newNodes, edges: newEdges };
};

// Layout the tree using improved hierarchical positioning
export const layoutTree = (nodes, edges) => {
  if (nodes.length === 0) return nodes;

  const nodeMap = new Map(nodes.map(node => [node.id, node]));
  const childrenMap = new Map();
  
  // Build children map
  edges.forEach(edge => {
    if (!childrenMap.has(edge.source)) {
      childrenMap.set(edge.source, []);
    }
    childrenMap.get(edge.source).push(edge.target);
  });

  // Find root (node with no incoming edges)
  const targetIds = new Set(edges.map(e => e.target));
  const rootNode = nodes.find(n => !targetIds.has(n.id)) || nodes[0];

  // Configuration for spacing
  const NODE_WIDTH = 180;  // Estimated node width
  const NODE_HEIGHT = 120; // Vertical spacing between levels
  const HORIZONTAL_SPACING = 40; // Minimum horizontal spacing between sibling nodes
  const SIBLING_SPACING = NODE_WIDTH + HORIZONTAL_SPACING;

  // Calculate subtree widths (number of leaf descendants)
  const subtreeWidths = new Map();
  
  const calculateSubtreeWidth = (nodeId) => {
    if (subtreeWidths.has(nodeId)) {
      return subtreeWidths.get(nodeId);
    }

    const children = childrenMap.get(nodeId) || [];
    
    if (children.length === 0) {
      subtreeWidths.set(nodeId, 1);
      return 1;
    }

    let totalWidth = 0;
    children.forEach(childId => {
      totalWidth += calculateSubtreeWidth(childId);
    });

    subtreeWidths.set(nodeId, totalWidth);
    return totalWidth;
  };

  // Calculate subtree width for root
  calculateSubtreeWidth(rootNode.id);

  // Position nodes using post-order traversal
  const positionNode = (nodeId, level, leftBoundary) => {
    const children = childrenMap.get(nodeId) || [];
    const node = nodeMap.get(nodeId);
    
    if (!node) return leftBoundary;

    if (children.length === 0) {
      // Leaf node - position at leftBoundary
      node.position = {
        x: leftBoundary,
        y: level * NODE_HEIGHT
      };
      return leftBoundary + SIBLING_SPACING;
    }

    // Position children first
    let currentX = leftBoundary;
    const childPositions = [];

    children.forEach(childId => {
      const childNode = nodeMap.get(childId);
      const childLevel = level + 1;
      currentX = positionNode(childId, childLevel, currentX);
      
      if (childNode) {
        childPositions.push(childNode.position.x);
      }
    });

    // Position parent at the center of its children
    if (childPositions.length > 0) {
      const leftmostChild = childPositions[0];
      const rightmostChild = childPositions[childPositions.length - 1];
      const centerX = (leftmostChild + rightmostChild) / 2;

      node.position = {
        x: centerX,
        y: level * NODE_HEIGHT
      };
    }

    return currentX;
  };

  // Start positioning from root at level 0
  positionNode(rootNode.id, 0, 0);

  // Center the entire tree
  const xPositions = nodes.map(n => n.position.x);
  const minX = Math.min(...xPositions);
  const maxX = Math.max(...xPositions);
  const treeWidth = maxX - minX;
  const offsetX = -minX + 50; // Add some padding

  nodes.forEach(node => {
    node.position.x += offsetX;
  });

  return nodes;
};
