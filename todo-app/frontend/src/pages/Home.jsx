import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn MERN Stack", completed: false },
    { id: 2, title: "Build a Todo App", completed: true },
  ]);

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-5 items-center">
        {/* Form always full width on mobile, smaller on large screens */}
        <div className="w-full">
          <TodoForm todos={todos} setTodos={setTodos} />
        </div>

        {/* Todo list with responsive adjustments */}
        <div className="w-full">
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default Home;
