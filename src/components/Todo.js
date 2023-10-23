import React from "react";
import "../styles.css";

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </div>
      <div>
        <button type="edit" onClick={() => editTodo(todo.id)}>
          Edit
        </button>
        <button type="remove" onClick={() => deleteTodo(todo.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Todo;
