import { useState } from "react";
import { Todo, UseTodoFunctions } from "../interfaces/interfaces";
import { v4 } from "uuid";

export const useTodoFunctions = (): UseTodoFunctions => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    await fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.error("Error getting todos: ", err));
  };

  const addTodo = async (task: string) => {
    const newId = v4();

    const newTodo: Todo = {
      id: newId,
      task: task,
      completed: false,
    };

    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTodo),
    }).catch((err) => console.error("Error submitting todo: ", err));

    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = async (todo: Todo) => {
    const completedTodo = todos.map((todoItem) =>
      todoItem.id === todo.id
        ? { ...todoItem, completed: !todoItem.completed }
        : todoItem
    );

    const updateTodo = todos.indexOf(todo);

    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(completedTodo[updateTodo]),
    }).catch((err) => console.error("Error Completing Task: ", err));

    setTodos(completedTodo);
  };

  const deleteTodo = async (todo: Todo) => {
    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    }).catch((err) => console.error("Error deleting todo: ", err));

    setTodos((prev) => prev.filter((todoItem) => todoItem.id !== todo.id));
  };

  return { todos, getTodos, addTodo, toggleTodo, deleteTodo };
};
