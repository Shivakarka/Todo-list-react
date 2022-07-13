import React from "react";
import { Card } from "react-bootstrap";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDelete, handleEdit, handleDone }) => {
  return (
    <ul>
      {todos.map((t, index) => (
        <Card key={index} className="border-bottom mb-1">
          <Card.Body>
            <TodoItem
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              t={t}
              index={index}
              handleDone={handleDone}
            />
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};

export default TodoList;
