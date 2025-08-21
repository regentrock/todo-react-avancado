import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() =>
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useLocalStorage("todos", todos);

  const addTodo = (text) =>
    setTodos([...todos, { id: Date.now(), text, completed: false }]);

  const toggleTodo = (id) =>
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const removeTodo = (id) =>
    setTodos(todos.filter(t => t.id !== id));

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
