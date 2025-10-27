import ReactFlow, { Controls, Background, Panel } from 'reactflow';
import 'reactflow/dist/style.css';
import Legend from '../Legend/Legend';
import EmptyState from '../EmptyState/EmptyState';
import TreeNode from '../TreeNode/TreeNode';
import './TreeVisualization.css';
import { useMemo } from 'react';

function TreeVisualization({ 
  nodes, 
  edges, 
  onNodesChange, 
  onEdgesChange, 
  onNodeClick, 
  hasGenerated 
}) {
  // Create custom node types with JSX
  const nodesWithLabels = useMemo(() => {
    return nodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        label: <TreeNode data={node.data} />
      }
    }));
  }, [nodes]);

  return (
    <div className="tree-container">
      {hasGenerated ? (
        <ReactFlow
          nodes={nodesWithLabels}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.1}
          maxZoom={2}
        >
          <Background />
          <Controls />
          <Panel position="top-left" className="info-panel">
            <Legend />
          </Panel>
        </ReactFlow>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default TreeVisualization;
