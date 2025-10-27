import './EmptyState.css';

function EmptyState() {
  return (
    <div className="empty-state">
      <svg className="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
        />
      </svg>
      <h3>No Tree Generated Yet</h3>
      <p>Enter valid JSON data and click &quot;Generate Tree&quot; to visualize</p>
    </div>
  );
}

export default EmptyState;

