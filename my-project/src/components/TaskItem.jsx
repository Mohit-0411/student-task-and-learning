// src/components/TaskItem.jsx
import { formatDate } from '../utils/TaskHelpers';

const getTopicBadgeStyle = (topicName) => {
  switch (topicName) {
    case 'React.js':
      return 'bg-blue-50 text-blue-600 border border-blue-200';
    case 'JavaScript':
      return 'bg-amber-50 text-amber-700 border border-amber-200';
    case 'Backend':
      return 'bg-purple-50 text-purple-700 border border-purple-200';
    case 'CSS & UI':
      return 'bg-teal-50 text-teal-700 border border-teal-200';
    default:
      return 'bg-gray-50 text-gray-700 border border-gray-200';
  }
};

export default function TaskItem({ task = {}, onToggleComplete }) {
  const { id, title, completed, topic, mentor, schedule } = task;

  return (
    <div className={`p-4 rounded-xl border transition-all bg-white ${
      completed ? 'border-gray-200 opacity-75' : 'border-gray-200 shadow-xs hover:border-gray-300'
    }`}>
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className={`text-base font-semibold truncate ${completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
              {title}
            </h4>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${getTopicBadgeStyle(topic?.name)}`}>
              {topic?.name}
            </span>
          </div>
          
          <div className="text-xs text-gray-500 flex items-center gap-4 flex-wrap">
            <span>Mentor: <strong className="text-gray-700">{mentor?.name}</strong></span>
            <span>Due: <strong className="text-gray-700">{formatDate(schedule?.dueDate)}</strong></span>
            <span>Est: <strong className="text-gray-700">{schedule?.estimatedMinutes} mins</strong></span>
          </div>
        </div>

        <button
          onClick={() => onToggleComplete?.(id)}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer inline-flex items-center gap-1.5 ${
            completed 
              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
              : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span>{completed ? '↺' : '✓'}</span>
          <span>{completed ? 'Reopen' : 'Complete'}</span>
        </button>
      </div>
    </div>
  );
}