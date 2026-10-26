import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggleComplete }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-lg border border-gray-200">
        <p className="text-gray-500">No tasks found. Add a new task to get started!</p>
      </div>
    );
  }

  return (
    
    <div className="space-y-3">
      <h2 className='font-bold'>Task List</h2>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete} 
        />
      ))}
    </div>
  );
}