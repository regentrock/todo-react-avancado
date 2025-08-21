import React, { useState, useMemo } from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";


export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form class="todo-form" onSubmit={handleSubmit}>
      <input
        class="input-line"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button class="submit-input">Adicionar</button>
    </form>
  );
}
