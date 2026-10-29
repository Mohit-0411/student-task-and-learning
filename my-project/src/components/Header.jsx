export default function Header({ onOpenModal }) {
  return (
    <header className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Task & Learning Dashboard
          </h1>
          <p className="text-gray-600 mt-1 text-sm">
            Manage your assignments, track sprint milestones, and view study tasks.
          </p>
        </div>
        <button
          onClick={onOpenModal}
          className="inline-flex items-center  px-2 py-2 bg-emerald-400 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
        >
          + New Task
        </button>
      </div>
    </header>
  );
}