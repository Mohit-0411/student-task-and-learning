export default function Header() {
  return (
    <header className="mb-8 p-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-2">
            Student Task & Learning Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your learning tasks, track daily progress, and explore practice feeds.
          </p>
        </div>
      </div>
    </header>
  );
}