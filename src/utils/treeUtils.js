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
      padding: '10px',
      minWidth: '100px',
      fontSize: '14px',
      fontWeight: '500'
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

// Layout the tree using hierarchical positioning
export const layoutTree = (nodes, edges) => {
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

  const levelWidth = 200;
  const levelHeight = 100;

  // Calculate positions using BFS
  const positioned = new Set();
  const queue = [{ id: rootNode.id, level: 0, position: 0 }];

  while (queue.length > 0) {
    const { id, level, position } = queue.shift();
    
    if (positioned.has(id)) continue;
    positioned.add(id);

    const node = nodeMap.get(id);
    if (!node) continue;

    // Position node
    node.position = {
      x: position * levelWidth,
      y: level * levelHeight
    };

    // Get children
    const children = childrenMap.get(id) || [];
    const childCount = children.length;
    
    children.forEach((childId, index) => {
      const childPosition = position - (childCount - 1) / 2 + index;
      queue.push({ id: childId, level: level + 1, position: childPosition });
    });
  }

  return nodes;
};
