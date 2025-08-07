import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTodoById } from "../services/todoServices";

function TodoDetail() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetchTodo();
  }, [todoId]);

  const  fetchTodo = async () => {
      try {
        const data = await getTodoById(todoId);
        setTodo(data);
      } catch (error) {
        setTodo({ error: "Todo not found." });
      }
    }

  if (!todo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-fuchsia-50 flex justify-center items-center">
      <div className="bg-fuchsia-100 p-8 rounded-lg shadow-md w-full max-w-lg">
        <Link
          to={`/todos/${todo.userId}`}
          className="text-black-500 hover:underline text-sm block mb-4"
        >
          View all todos
        </Link>

        <h2 className="text-xl font-bold mb-4">Todo Detail</h2>
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>User ID:</strong> {todo.userId}</p>
        <p><strong>Title:</strong> {todo.title}</p>
        <p><strong>Completed:</strong> {todo.completed ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default TodoDetail;
