import './TreeNode.css';

function TreeNode({ data }) {
  return (
    <div className="node-content" title={data.tooltip}>
      <div className="node-key">{data.label}</div>
      {data.value && (
        <div className="node-value">{data.value}</div>
      )}
    </div>
  );
}

export default TreeNode;

