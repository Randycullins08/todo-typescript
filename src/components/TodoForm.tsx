import { useState } from "react";
import { useTodoContext } from "./context/TodoContext";
import Form from "./layouts/Form";

export default function TodoForm() {
  const [input, setInput] = useState<string>("");

  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 mt-6"
    >
      <label htmlFor="todo" className="text-lg font-medium text-dark">
        Enter Todo:
      </label>
      <input
        type="text"
        id="todo"
        name="todoItem"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        className="flex-grow p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        placeholder="Write your task here..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-light font-medium rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Save Todo
      </button>
    </Form>
  );
}
