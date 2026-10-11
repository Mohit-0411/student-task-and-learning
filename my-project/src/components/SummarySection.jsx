import SummaryCard from './SummaryCard';

export default function SummarySection({ total, completed, remaining }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <SummaryCard 
        title="Total Tasks" 
        count={total} 
        bgColor="bg-blue-400" 
      />
      <SummaryCard 
        title="Completed" 
        count={completed} 
        bgColor="bg-emerald-400" 
      />
      <SummaryCard 
        title="Remaining" 
        count={remaining} 
        bgColor="bg-amber-400" 
      />
    </div>
  );
}