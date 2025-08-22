import React, { useState } from "react";

const TodoForm = ({ setTodos, todos }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, formData]);
    setFormData({ title: "", description: "", completed: false }); // reset form
  };

  return (
    <form
      action="/todos"
      method="POST"
      className="space-y-4 w-full max-w-md px-4 mx-auto sm:px-6 md:px-0"
      onSubmit={handleFormSubmit}
    >
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter todo title"
          required
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter todo description"
          rows="3"
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
