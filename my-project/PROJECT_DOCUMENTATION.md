# Student Task & Learning Dashboard

## Overview

Student Task & Learning Dashboard is a responsive React application for organizing learning tasks and monitoring study progress. It combines locally loaded task data with interactive task management, summary metrics, a JSON practice utility, and a sample API feed.

## Technology Stack

- **React 19** for the component-based user interface
- **Vite** for development and production builds
- **Tailwind CSS 4** for responsive styling
- **JavaScript (ES modules)** for application logic
- **JSONPlaceholder** for the external practice feed

## Features

### Task dashboard

- Loads initial tasks from `src/data/tasks.json`.
- Displays total, completed, and remaining task counts.
- Shows task topic, difficulty, mentor information, due date, and estimated duration.
- Allows tasks to be marked complete and reopened.
- Displays an empty state when no tasks are available.

### Add task form

Users can create a task with:

- Task title
- Topic name
- Difficulty level
- Mentor name and email
- Due date
- Estimated duration

The title and due date are required. If mentor details are omitted, default mentor information is used.

### Practice feed

The Practice Feed component retrieves five sample posts from:

```text
https://jsonplaceholder.typicode.com/posts?_limit=5
```

It includes loading, success, error, retry, and refresh states.

### JSON Inspector

The JSON Inspector demonstrates `JSON.stringify()` and `JSON.parse()` by allowing users to edit JSON, parse it, and view formatted output or parsing errors.

## Application Structure

```text
my-project/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── AddTaskForm.jsx
│   │   ├── ApiTasks.jsx
│   │   ├── Header.jsx
│   │   ├── JsonInspector.jsx
│   │   ├── SummaryCard.jsx
│   │   ├── SummarySection.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── data/
│   │   └── tasks.json
│   ├── utils/
│   │   └── TaskHelpers.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Component Responsibilities

| Component | Responsibility |
| --- | --- |
| `App` | Owns task state and composes the dashboard sections. |
| `Header` | Renders the dashboard title and description. |
| `SummarySection` | Displays the three task summary cards. |
| `SummaryCard` | Reusable presentation component for one metric. |
| `AddTaskForm` | Collects and validates new task details. |
| `TaskList` | Renders all tasks or the empty state. |
| `TaskItem` | Displays one task and handles completion toggling. |
| `ApiTasks` | Fetches and displays sample posts from JSONPlaceholder. |
| `JsonInspector` | Parses and formats user-provided JSON. |

## Task Data Model

Each task follows this general structure:

```json
{
  "id": 1,
  "title": "Practise JavaScript objects",
  "completed": false,
  "topic": {
    "name": "JavaScript",
    "level": "Beginner"
  },
  "mentor": {
    "name": "Course Mentor",
    "email": "mentor@example.com"
  },
  "schedule": {
    "dueDate": "2026-10-18",
    "estimatedMinutes": 45
  }
}
```

Task changes are held in React state and are not persisted to a database or browser storage. Reloading the page restores the original JSON data.

## Getting Started

### Prerequisites

- Node.js with npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in a browser.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run the linter

```bash
npm run lint
```

## Application Flow

1. `main.jsx` mounts the `App` component into the root HTML element.
2. `App` loads the initial task dataset and stores it with `useState`.
3. `calculateSummary` derives the dashboard metrics from the current task list.
4. Child components receive task data and event handlers through props.
5. `ApiTasks` independently loads sample posts after mounting.
6. `JsonInspector` uses the current task data as its initial JSON sample.

## Future Improvements

- Persist tasks with local storage or a backend service.
- Add task editing and deletion.
- Add filtering by completion status, topic, or difficulty.
- Add sorting by due date or estimated duration.
- Add automated component and interaction tests.
- Move the API endpoint into environment-based configuration.
