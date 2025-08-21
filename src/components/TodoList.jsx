import React, { useState, useMemo } from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";

export default function TodoList() {
  const { todos } = useTodos();
  const [filter, setFilter] = useState("all");

  const filteredTodos = useMemo(() => {
    if (filter === "completed") return todos.filter(t => t.completed);
    if (filter === "pending") return todos.filter(t => !t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <>
      <TodoFilters setFilter={setFilter} />
      <ul>
        {filteredTodos.map(t => <TodoItem key={t.id} todo={t} />)}
      </ul>
    </>
  );
}
