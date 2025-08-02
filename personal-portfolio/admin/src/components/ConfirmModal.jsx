// ConfirmModal.jsx
import React from "react";

const ConfirmModal = ({ open, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Are you sure?
        </h2>
        <p className="text-gray-700 mb-6">
          Do you really want to delete this project ?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
