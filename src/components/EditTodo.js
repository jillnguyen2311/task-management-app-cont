import React, { useState } from "react";

const EditTodo = ({ todo, updateTodo }) => {
  const [text, setText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      updateTodo(todo.id, text);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="update">Update</button>
    </form>
  );
};

export default EditTodo;
