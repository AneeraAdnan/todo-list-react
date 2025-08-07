import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {getTodos,createTodo,updateTodo,deleteTodo,} from "../services/todoServices";

function Todo() {
  const { userId } = useParams();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [singleTodo, setSingleTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    const filtered = data.filter((todo) => todo.userId === parseInt(userId));
    setTodos(filtered);
    setSingleTodo(null);
  };

  const handleAddTodo = async () => {
    if (title.trim() === "") {
        alert("empty input field")
        return;}
    const newTodo = {
      title,
      completed: false,
      userId: parseInt(userId),
    };
    const added = await createTodo(newTodo);
    setTodos([added, ...todos]);
    setTitle("");
  };

  const handleUpdate = async (id) => {
    const updated = await updateTodo(id, {
      title,
      completed: false,
      userId: parseInt(userId),
    });
    setTodos(todos.map((todo) => (todo.id === id ? updated : todo)));
    setTitle("");
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setTitle(todo.title);
    setEditId(todo.id);
  };

  return (
    <div className="min-h-screen bg-fuchsia-50 p-6">
      <div className="max-w-2xl mx-auto bg-fuchsia-100 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User {userId}'s To-Do List</h2>

        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={title}
            placeholder="Enter a task"
            className="flex-1 px-3 py-2 border rounded-md"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={editId ? () => handleUpdate(editId) : handleAddTodo}
            className="bg-green-200 text-black px-4 rounded-md hover:bg-green-50"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-fuchsia-50 border px-4 py-2 rounded"
            >
              <span>{todo.title}</span>
              <div className="space-x-2 flex items-center">
                <Link to={`/todo/${todo.id}`}>
                  <button className="bg-blue-200 text-black px-2 rounded hover:bg-blue-50">
                    View
                  </button>
                </Link>
                <button
                  onClick={() => handleEdit(todo)}
                  className="bg-yellow-200 text-black px-2 rounded hover:bg-yellow-50">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-200 text-black px-2 rounded hover:bg-red-60">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
