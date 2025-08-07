// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo";
import TodoDetail from "./components/TodoDetail";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:userId" element={<Todo />} />
        <Route path="/todo/:todoId" element={<TodoDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
