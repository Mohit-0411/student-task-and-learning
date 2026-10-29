// src/App.jsx
import { useState, useEffect } from 'react';
import jsnTasks from './data/tasks.json';
import { calculateSummary } from './utils/TaskHelpers';
import Header from './components/Header';
import SummarySection from './components/SummarySection';
import Modal from './components/Modal';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList'; 

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks]);
    setIsModalOpen(false);
  };

  const handleToggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const { total, completed, remaining } = calculateSummary(tasks);

  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header onOpenModal={() => setIsModalOpen(true)} />
        
        <SummarySection 
          total={total}
          completed={completed}
          remaining={remaining}
        />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <AddTaskForm 
            onAddTask={handleAddTask} 
            onClose={() => setIsModalOpen(false)} 
          />
        </Modal>

        <TaskList 
          tasks={tasks} 
          onToggleComplete={handleToggleComplete} 
        />
      </div>
    </div>
  );
}