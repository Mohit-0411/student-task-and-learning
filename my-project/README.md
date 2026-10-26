Student Task & Learning Dashboard

A responsive React application designed to help students track learning tasks, monitor progress, analyze task metadata, and integrate external API feeds. Built with Vite, React, and modern JavaScript (ES6+).

📌 Table of Contents

Overview

Key Features

Project Structure

JavaScript Concepts Demonstrated

Installation and Setup

API Integration

Screenshots

License

🔍 Overview

The Student Task & Learning Dashboard provides an intuitive interface for managing academic workload. It calculates summary metrics (total, completed, and remaining tasks), supports adding new tasks, toggling completion states, inspecting JSON payloads, and fetching sample data from a public API with complete state handling (loading, success, error).

✨ Key Features

Task Summary Metrics: Real-time display of total tasks, completed tasks, and remaining tasks via SummarySection.

Task Management: Render dynamic task list using key-mapped components with support for toggling completion and adding new items.

Nested Data Inspector: Detailed JSON parsing/stringifying utility to inspect object structures.

API Integration Feed: Asynchronous fetching from JSONPlaceholder API (/posts?_limit=5) featuring loading spinners, error boundaries, and dynamic success views.

Responsive Design: Mobile-first grid and flexbox layout designed for desktop and mobile screen sizes.

📁 Project Structure

student-learning-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header bar and navigational title
│   │   ├── SummarySection.jsx  # Wrapper section for dashboard metrics
│   │   ├── SummaryCard.jsx     # Reusable card component for individual metrics
│   │   ├── TaskList.jsx        # Parent container for rendering list of tasks
│   │   ├── TaskItem.jsx        # Component for individual task details and actions
│   │   ├── AddTaskForm.jsx     # Controlled form component to create new tasks
│   │   ├── ApiTasks.jsx        # Async API feed component with status views
│   │   └── JsonInspector.jsx   # Interactive JSON parse/stringify utility
│   ├── data/
│   │   └── tasks.json          # Initial dataset containing initial task records
│   ├── utils/
│   │   └── taskHelpers.js      # Pure helper functions for calculations and formatting
│   ├── App.jsx                 # Main state holder and root component layout
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles and responsive layout utilities
├── package.json
└── README.md


🧠 JavaScript Concepts Demonstrated

Concept

Implementation Details

JSON

Utilized JSON.stringify() and JSON.parse() within JsonInspector.jsx to transform and validate task payloads. Initial data loaded from tasks.json.

Objects & Nested Objects

Accessed nested data points like task.topic.name, task.mentor.name, and task.schedule.dueDate.

Functions

Defined pure helper functions in taskHelpers.js for calculating metrics, date formatting, and form field validation.

Callback Functions

Passed handler functions like onAddTask and onToggleComplete down from App.jsx to child components (AddTaskForm, TaskItem).

Destructuring

Utilized object destructuring for props in components (e.g., const TaskItem = ({ task, onToggle }) => ...).

Spread Operator

Used array spread [...tasks, newTask] to add items, and object spread { ...task, completed: !task.completed } to update state immutably.

Rest Operator

Applied rest parameters (...args) in custom logging/utility functions to handle dynamic arguments cleanly.

Import / Export

Modularized code using ES6 import and export default / named exports across all components and helper modules.

Promises & async/await

Handled asynchronous HTTP queries via async/await syntax inside ApiTasks.jsx.

Fetch API

Retrieved external data from https://jsonplaceholder.typicode.com/posts?_limit=5, checking response.ok to catch network and HTTP status errors.

JSX

Rendered dynamic variables, embedded expressions, and conditional components using curly braces {}.

Components & Props

Constructed functional, reusable React components passing data down via props.

.map() Method

Rendered dynamic arrays (tasks.map(), posts.map()) assigning unique key props (e.g., key={task.id}).

🛠️ Installation and Setup

Clone the repository:

git clone https://github.com/your-username/student-learning-dashboard.git
cd student-learning-dashboard


Install dependencies:

npm install


Start the local development server:

npm run dev


Build for production:

npm run build


🌐 API Integration

The Practice Feed component connects to the public JSONPlaceholder endpoint:

Endpoint: https://jsonplaceholder.typicode.com/posts?_limit=5

Error Handling: Explicitly evaluates response.ok before calling response.json().

States Handled:

Loading: Displays loading indicator/skeleton while request is pending.

Error: Catches network/status failures and displays a user-friendly error box.

Success: Maps returned JSON array to feed list components.


[![Architecture diagram of mohit-0411/student-task-and-learning](https://gitdiagram.com/mohit-0411/student-task-and-learning/diagram.png)](https://gitdiagram.com/mohit-0411/student-task-and-learning?utm_source=readme&utm_medium=picture)