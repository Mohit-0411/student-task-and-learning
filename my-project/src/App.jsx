import { useState, useEffect } from 'react';
import jsnTasks from './data/tasks.json';
import { calculateSummary } from './utils/TaskHelpers';
import HeaderActions from './components/HeaderActions';
import SummarySection from './components/SummarySection';
import TaskList from './components/TaskList'; 
import ApiTasks from './components/ApiTasks'; 
import JsonInspector from './components/JsonInspector';
import AddTaskForm from './components/AddTaskForm';
import Modal from './components/Modal';

const STORAGE_KEY = 'student_dashboard_tasks';

const getInitialTasks = () => {
  const savedTasks = localStorage.getItem(STORAGE_KEY);
  if (!savedTasks) return jsnTasks;
  try {
    return JSON.parse(savedTasks);
  } catch (err) {
    console.error('Failed to parse tasks from localStorage:', err);
    return jsnTasks;
  }
};

export default function App() {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [activeModal, setActiveModal] = useState(null); // 'task' | 'json' | null

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks(prev => [newTask, ...prev]);
    setActiveModal(null);
  };

  const handleToggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  };

  const summary = calculateSummary(tasks);

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <HeaderActions 
          onOpenTaskModal={() => setActiveModal('task')} 
          onOpenJsonModal={() => setActiveModal('json')} 
        />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-6">
            <SummarySection {...summary} />
            <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <ApiTasks />
          </div>
        </div>

      </div>

      {/* Modals */}
      <Modal isOpen={activeModal === 'task'} onClose={() => setActiveModal(null)}>
        <AddTaskForm onAddTask={handleAddTask} onClose={() => setActiveModal(null)} />
      </Modal>

      <Modal isOpen={activeModal === 'json'} onClose={() => setActiveModal(null)}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">JSON Data Inspector</h2>
            <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-gray-600 font-bold text-lg cursor-pointer">
              ✕
            </button>
          </div>
          <JsonInspector sampleData={tasks} />
        </div>
      </Modal>
    </div>
  );
}