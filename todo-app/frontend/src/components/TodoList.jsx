import { Check, Trash2 } from "lucide-react"; // icon library

const TodoList = ({ todos, setTodos }) => {
  // Toggle todo completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-md mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">My Todos</h2>
      {todos.length > 0 ? (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`border border-gray-200 p-3 rounded-lg ${
                todo.completed ? "bg-green-50" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                {/* Title + Description */}
                <div className="flex-1 min-w-0">
                  <span
                    className={`block font-medium break-words ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                  {todo.description && (
                    <p className="text-sm text-gray-600 mt-1 break-words">
                      {todo.description}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className="text-green-600 hover:text-green-800"
                    title="Mark Complete"
                  >
                    <Check size={20} />
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete Todo"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No todos yet.</p>
      )}
    </div>
  );
};

export default TodoList;
