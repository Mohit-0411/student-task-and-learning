import SummaryCard from './SummaryCard';

export default function SummarySection({ total, completed, remaining }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <SummaryCard 
        title="Total Tasks" 
        count={total} 
        bgColor="bg-white" 
      />
      <SummaryCard 
        title="Completed" 
        count={completed} 
        bgColor="bg-white" 
      />
      <SummaryCard 
        title="Remaining" 
        count={remaining} 
        bgColor="bg-white" 
      />
    </div>
  );
}