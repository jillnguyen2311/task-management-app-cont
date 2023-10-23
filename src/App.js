import "./styles.css";
import React, { useState } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTasks, setEditingTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleEdit = (id) => {
    setEditingTasks((prevEditingTasks) =>
      prevEditingTasks.includes(id)
        ? prevEditingTasks.filter((taskId) => taskId !== id)
        : [...prevEditingTasks, id]
    );
    setIsEditing(false);
  };

  const updateTodo = (id, text) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    setEditingTasks((prevEditingTasks) =>
      prevEditingTasks.filter((taskId) => taskId !== id)
    );
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <h2>Task list:</h2>
      <div className="tasks-list">
        <Todos
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={toggleEdit}
          updateTodo={updateTodo}
          editingTasks={editingTasks}
        />
      </div>
      <div className="todo-form">
        <TodoForm
          addTodo={addTodo}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </div>
    </div>
  );
}

export default App;
