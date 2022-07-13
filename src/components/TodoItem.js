import React from "react";
import { Button } from "react-bootstrap";

function TodoItem({ handleDelete, handleEdit, t, handleDone, index }) {
  return (
    <li className="todo" key={t.id}>
      <span
        style={{
          textDecoration: t.done ? "line-through" : "none",
        }}
      >
        {t.todo}
      </span>
      <div>
        <Button variant="success" onClick={() => handleDone(index)}>
          ✓
        </Button>
        <Button className="ms-2" onClick={() => handleEdit(t.id)}>
          🖉
        </Button>
        <Button
          variant="danger"
          className="ms-2"
          onClick={() => handleDelete(t.id)}
        >
          ✕
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
