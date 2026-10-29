# Student Task & Learning Dashboard

A responsive React application designed to help students track learning tasks, monitor progress, analyze task metadata, and integrate external API feeds. Built with Vite, React 19, Tailwind CSS 4, and modern JavaScript (ES6+).

---

## 📌 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [JavaScript Concepts Demonstrated](#javascript-concepts-demonstrated)
- [Installation and Setup](#installation-and-setup)
- [API Integration](#api-integration)

---

## 🔍 Overview

The Student Task & Learning Dashboard provides an intuitive, modern interface for managing academic workload. It calculates real-time summary metrics (total, completed, and remaining tasks), supports adding new tasks through a modal form, toggling completion states with `localStorage` persistence, inspecting nested JSON payloads, and fetching sample data from a public API with complete state handling (loading, success, error).

---

## ✨ Key Features

- **Real-Time Summary Metrics:** Dynamic computation of total tasks, completed tasks, and pending tasks via `SummarySection`.
- **Interactive Task Management:** Filterable, persistent task list with completion toggles and modal-driven task creation.
- **JSON Data Inspector:** Interactive utility to test `JSON.stringify()` and `JSON.parse()` on application states.
- **API Integration Feed:** Asynchronous fetching from the JSONPlaceholder API (`/posts?_limit=5`) featuring loading skeletons, error handling with retry options, and manual refresh triggers.
- **Responsive UI:** Clean, mobile-first grid and flexbox layout designed using Tailwind CSS 4.

---

## 📁 Project Structure

```text
my-project/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── AddTaskForm.jsx      # Controlled form component to create new tasks
│   │   ├── ApiTasks.jsx         # Async API feed component with status views
│   │   ├── Header.jsx           # Header bar and navigational title
│   │   ├── HeaderActions.jsx    # Action buttons for modals
│   │   ├── JsonInspector.jsx    # Interactive JSON parse/stringify utility
│   │   ├── Modal.jsx            # Reusable modal wrapper component
│   │   ├── SummaryCard.jsx      # Reusable card component for individual metrics
│   │   ├── SummarySection.jsx   # Wrapper section for dashboard metric cards
│   │   ├── TaskItem.jsx         # Component for individual task details and actions
│   │   └── TaskList.jsx         # Parent container for rendering the task list
│   ├── data/
│   │   └── tasks.json           # Initial dataset containing default task records
│   ├── utils/
│   │   └── TaskHelpers.js       # Pure helper functions for metrics calculation
│   ├── App.css
│   ├── App.jsx                  # Main state holder and root component layout
│   ├── index.css                # Global styles and Tailwind configuration
│   └── main.jsx                 # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── PROJECT_DOCUMENTATION.md
├── README.md
└── vite.config.js