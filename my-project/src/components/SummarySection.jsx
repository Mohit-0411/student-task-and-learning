// src/components/SummarySection.jsx
import SummaryCard from './SummaryCard';

export default function SummarySection({ total, completed, remaining }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <SummaryCard 
        title="Total Tasks" 
        count={total} 
        tag="Current Sprint"
        
      />
      <SummaryCard 
        title="Completed" 
        count={completed} 
        tag="In progress"
      />
      <SummaryCard 
        title="In Queue" 
        count={remaining} 
        tag="Pending action"
      />
    </div>
  );
}