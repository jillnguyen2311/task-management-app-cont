import React from "react";
import Todo from "./Todo";
import EditTodo from "./EditTodo";

const Todos = ({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
  updateTodo,
  editingTasks
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editingTasks.includes(todo.id) ? (
            <EditTodo todo={todo} updateTodo={updateTodo} />
          ) : (
            <Todo
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Todos;
