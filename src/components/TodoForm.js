import React from "react";
import { Button, Form } from "react-bootstrap";

const TodoForm = ({
  handleSubmit,
  todo,
  editId,
  setTodo,
  handleReset,
  inputElement,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="display-5 mb-3">TODO App</Form.Label>
        <Form.Control
          className="mb-3 text-center"
          placeholder="Add a Todo here"
          type="text"
          value={todo}
          ref={inputElement}
          onChange={(e) => setTodo(e.target.value)}
        ></Form.Control>
        <Button className="mb-3" type="submit">
          {" "}
          {editId ? "Edit" : "Add"}
        </Button>
        <Button
          onClick={() => handleReset()}
          variant="danger"
          className="mb-3 ms-3"
        >
          Reset
        </Button>
      </Form.Group>
    </Form>
  );
};

export default TodoForm;
