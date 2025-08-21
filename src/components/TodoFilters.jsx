import React from "react";

export default function TodoFilters({ setFilter }) {
  return (
    <div class="filters">
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
      <button onClick={() => setFilter("pending")}>Pendentes</button>
    </div>
  );
}
