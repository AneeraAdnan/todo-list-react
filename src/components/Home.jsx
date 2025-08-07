import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId.trim() !== "") {
      navigate(`/todos/${userId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-fuchsia-200 mb-6">
          Welcome to the To-Do App
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="userId" className="block text-gray-700 font-medium">
            Enter your User ID:
          </label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fuchsia-400 focus:outline-none"
          />
          <button
            className="w-full bg-fuchsia-200 text-black py-2 rounded-md hover:bg-fuchsia-300">
            View To-Dos
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
