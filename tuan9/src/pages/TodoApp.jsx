import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../store/todoSlice";

function TodoApp() {
  const [inputText, setInputText] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText));
      setInputText("");
    }
  };

  return (
    <div className="p-4" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-grow mr-2"
          style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)', borderColor: 'var(--border-color)' }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTodo}
          style={{ backgroundColor: 'var(--button-primary)' }}
          className="text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 rounded"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', border: '1px solid' }}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="mr-2"
              />
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ backgroundColor: 'var(--button-danger)' }}
              className="text-white px-2 py-1 rounded text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-gray-500 mt-4">No tasks added yet</p>
      )}
    </div>
  );
}

export default TodoApp;
