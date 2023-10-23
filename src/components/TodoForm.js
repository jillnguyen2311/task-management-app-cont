import React, { useState } from "react";

const TodoForm = ({ addTodo, isEditing, setIsEditing }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="add">Add</button>
        </form>
      ) : (
        <button type="add-new-task" onClick={() => setIsEditing(true)}>
          Add Task
        </button>
      )}
    </div>
  );
};

export default TodoForm;
