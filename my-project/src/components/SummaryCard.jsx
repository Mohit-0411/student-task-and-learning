// src/components/SummaryCard.jsx
export default function SummaryCard({ title, count, tag, tagColor }) {
  return (
    <div className="p-7 bg-white rounded-4xl border  border-gray-100 shadow-xs flex items-center justify-between">
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{title}</h3>
        <p className="text-3xl font-extrabold text-gray-900 mt-1">{count}</p>
      </div>
      {tag && (
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50`}>
          {tag}
        </span>
      )}
    </div>
  );
}