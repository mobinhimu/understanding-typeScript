import React from "react";

interface TodoListProps {
  items: { id: string; title: string }[];
}

function TodoList({ items }): JSX.Element<TodoListProps> {
  return (
    <ul>
      {items.map(({ title, id }) => (
        <li key={id}>
          <span>{title}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
