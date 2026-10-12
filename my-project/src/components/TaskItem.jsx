import { formatDate } from '../utils/TaskHelpers';

export default function TaskItem({ task = {}, onToggleComplete }) {
  const { id, title, completed, topic, level, mentor, schedule } = task;

  return (
    <div className={`p-4 mb-3 rounded-lg border transition-all ${
      completed ? 'bg-gray-100 border-gray-200 opacity-75' : 'bg-white border-blue-100 shadow-sm'
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded text-gray-800">{topic?.name}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded  text-gray-800">{level}</span>
          </div>
          
          <h4 className={`text-lg font-medium ${completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {title}
          </h4>
        </div>

        <button
          onClick={() => onToggleComplete?.(id)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            completed ? 'bg-gray-200 text-gray-700 ' : 'bg-green-600 text-white'
          }`}
        >
          {completed ? 'Reopen' : 'Complete'}
        </button>
      </div>

      <div className="mt-4 text-xs text-gray-500 flex flex-wrap gap-4 border-t pt-2 border-gray-100">
        <span>👤 Mentor: <strong>{mentor?.name}</strong> ({mentor?.email})</span>
        <span>📅 Due: <strong>{formatDate(schedule?.dueDate)}</strong></span>
        <span>⏱️ Est: <strong>{schedule?.estimatedMinutes} mins</strong></span>
      </div>
    </div>
  );
}