export default function HeaderActions({ onOpenTaskModal, onOpenJsonModal }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Task & Learning Dashboard</h1>
        <p className="text-sm text-gray-500">Manage your assignments, track sprint milestones, and view study tasks.</p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={onOpenJsonModal}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm px-4 py-2.5 rounded-full transition flex items-center space-x-2 border border-gray-200 cursor-pointer"
        >
          <span>{'{ }'}</span>
          <span>Inspect JSON</span>
        </button>

        <button
          onClick={onOpenTaskModal}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md transition-all whitespace-nowrap cursor-pointer"
        >
          + New Task
        </button>
      </div>
    </div>
  );
}