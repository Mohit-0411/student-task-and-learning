// src/components/TaskList.jsx
import { useState, useMemo } from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggleComplete }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate category counts dynamically
  const counts = useMemo(() => {
    return {
      All: tasks.length,
      'React': tasks.filter(t => t.topic?.name === 'React').length,
      JavaScript: tasks.filter(t => t.topic?.name === 'JavaScript').length,
      Python: tasks.filter(t => t.topic?.name === 'Python').length,
      'CSS': tasks.filter(t => t.topic?.name === 'CSS').length,
    };
  }, [tasks]);

  // Filter tasks based on selected tab and search query
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesCategory = 
        selectedFilter === 'All' || 
        task.topic?.name === selectedFilter;

      const matchesSearch = 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.topic?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.mentor?.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [tasks, selectedFilter, searchQuery]);

  return (
    <div className="space-y-4">
      {/* Filter Tabs & Search Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-3 rounded-xl border border-gray-200 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {['All', 'React', 'JavaScript', 'CSS', 'Python'].map((category) => {
            const count = counts[category] ?? tasks.length;
            const isActive = selectedFilter === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-xs'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        <div className="relative min-w-55">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 text-xs">
            🔍
          </span>
          <input
            type="text"
            placeholder="Filter tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:bg-white transition"
          />
        </div>
      </div>

      {/* Task Items List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500 text-sm">No tasks match your search or filter criteria.</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleComplete={onToggleComplete} 
            />
          ))
        )}
      </div>
    </div>
  );
}