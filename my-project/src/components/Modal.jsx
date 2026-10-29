// src/components/Modal.jsx
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
}