import { useState } from 'react';

export default function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [topicName, setTopicName] = useState('React');
  const [level, setLevel] = useState('Beginner');
  const [mentorName, setMentorName] = useState('');
  const [mentorEmail, setMentorEmail] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [estimatedMinutes, setEstimatedMinutes] = useState(45);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !dueDate) {
      alert('Please fill in the task title and due date.');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      topic: {
        name: topicName,
        level: level
      },
      mentor: {
        name: mentorName.trim() || 'Course Mentor',
        email: mentorEmail.trim() || 'mentor@example.com'
      },
      schedule: {
        dueDate: dueDate,
        estimatedMinutes: Number(estimatedMinutes)
      }
    };

    onAddTask(newTask);

    setTitle('');
    setMentorName('');
    setMentorEmail('');
    setDueDate('');
    setEstimatedMinutes(45);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Task Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Practise JavaScript objects"
            className="w-full text-sm p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Topic Name
            </label>
            <input
              type="text"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              placeholder="e.g., JavaScript"
              className="w-full text-sm p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Difficulty Level
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full text-sm p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Mentor Name
            </label>
            <input
              type="text"
              value={mentorName}
              onChange={(e) => setMentorName(e.target.value)}
              placeholder="e.g., Course Mentor"
              className="w-full text-sm p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Mentor Email
            </label>
            <input
              type="email"
              value={mentorEmail}
              onChange={(e) => setMentorEmail(e.target.value)}
              placeholder="e.g., mentor@example.com"
              className="w-full text-sm p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full text-sm p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Estimated Minutes
            </label>
            <input
              type="number"
              value={estimatedMinutes}
              onChange={(e) => setEstimatedMinutes(e.target.value)}
              min="5"
              step="5"
              className="w-full text-sm p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors shadow-sm"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}