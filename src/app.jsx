import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './styles.css';

export default function App() {
  return (
    <TodoProvider>
      <main>
        <h1>Lista de Tarefas</h1>
        <TodoForm />
        <TodoList />
      </main>
    </TodoProvider>
  );
}
