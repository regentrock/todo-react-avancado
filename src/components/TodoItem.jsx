import React, { memo } from "react";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>
      <button class="delete-button" onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}

export default memo(TodoItem);
