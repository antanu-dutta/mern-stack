import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="bg-white  rounded-xl shadow p-5 mt-6">
      <h2 className="text-xl font-semibold text-gray-800  mb-4">Daily Tasks</h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400   "
        />
        <button
          onClick={handleAddTask}
          className="bg-indigo-600 text-white px-4 rounded-r-md hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100  px-4 py-2 rounded"
          >
            <span className="text-gray-800 ">{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
