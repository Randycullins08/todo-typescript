import { useState } from "react";

import { useTodoContext } from "./context/TodoContext";
import Form from "./layouts/Form";

export default function TodoForm() {
  const [input, setInput] = useState<string>("");

  const { addTodo } = useTodoContext();

  const handleSubmit = () => {
    addTodo(input);

    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="todo">Enter Todo: </label>
      <input
        type="text"
        id="todo"
        name="todoItem"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button className="save-btn">Save Todo</button>
    </Form>
  );
}
