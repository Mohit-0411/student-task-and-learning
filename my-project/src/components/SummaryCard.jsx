export default function SummaryCard({ title, count, bgColor }) {
  return (
    <div className={`p-5 rounded-xl shadow-sm flex items-center text-gray-700  justify-between ${bgColor}`}>
      <div>
        <h3 className="text-xs font-semibold uppercase ">{title}</h3>
        <p className="text-3xl font-extrabold mt-1">{count}</p>
      </div>
      <div className="p-3 rounded-lg">
        <span className="text-xl">📊</span>
      </div>
    </div>
  );
}