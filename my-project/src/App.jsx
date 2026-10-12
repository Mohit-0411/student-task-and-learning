import { useState } from 'react';
import jsnTasks from './data/tasks.json';
import { calculateSummary } from './utils/TaskHelpers';
import Header from './components/Header';
import SummarySection from './components/SummarySection';
import TaskList from './components/TaskList'; 

export default function App() {
  const [tasks, setTasks] = useState(jsnTasks);

  const handleToggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const { total, completed, remaining } = calculateSummary(tasks);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        
        <SummarySection 
          total={total}
          completed={completed}
          remaining={remaining}
        />

        <TaskList 
          tasks={tasks} 
          onToggleComplete={handleToggleComplete} 
        />
      </div>
    </div>
  );
}