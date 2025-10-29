import ReactFlow, { Controls, Background, Panel, useReactFlow, getRectOfNodes, getTransformForBounds } from 'reactflow';
import 'reactflow/dist/style.css';
import { toPng } from 'html-to-image';
import Legend from '../Legend/Legend';
import EmptyState from '../EmptyState/EmptyState';
import TreeNode from '../TreeNode/TreeNode';
import './TreeVisualization.css';
import { useMemo, useCallback } from 'react';

// Download Button Component
function DownloadButton() {
  const { getNodes } = useReactFlow();

  const downloadImage = useCallback(() => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      nodesBounds.width,
      nodesBounds.height,
      0.5,
      2
    );

    const viewport = document.querySelector('.react-flow__viewport');
    
    if (!viewport) return;

    toPng(viewport, {
      backgroundColor: getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-primary'),
      width: nodesBounds.width,
      height: nodesBounds.height,
      style: {
        width: nodesBounds.width,
        height: nodesBounds.height,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'json-tree-visualization.png';
      link.href = dataUrl;
      link.click();
    }).catch((error) => {
      console.error('Error downloading image:', error);
    });
  }, [getNodes]);

  return (
    <button className="download-btn" onClick={downloadImage} title="Download tree as image">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download
    </button>
  );
}

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
          <Panel position="top-right" className="download-panel">
            <DownloadButton />
          </Panel>
        </ReactFlow>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default TreeVisualization;
