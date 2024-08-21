import { useState } from "react";
import { Todo, UseTodoFunctions } from "../interfaces/interfaces";
import { v4 } from "uuid";

export const useTodoFunctions = (): UseTodoFunctions => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    await fetch("http://127.0.0.1:5000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.results);
      })
      .catch((err) => console.error("Error getting todos: ", err));
  };

  const addTodo = async (task: string) => {
    const newId = v4();

    const newTodo: Todo = {
      todo_id: newId,
      task,
      completed: false,
    };

    await fetch("http://127.0.0.1:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .catch((err) => console.error("Error submitting todo: ", err));

    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = async (todo: Todo) => {
    const completedTodo = todos.map((todoItem) =>
      todoItem.todo_id === todo.todo_id
        ? { ...todoItem, completed: !todoItem.completed }
        : todoItem
    );

    const updateTodo = todos.indexOf(todo);

    await fetch(`http://127.0.0.1:5000/todo/${todo.todo_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(completedTodo[updateTodo]),
    })
      .then((res) => res.json())
      .catch((err) => console.error("Error Completing Task: ", err));

    setTodos(completedTodo);
  };

  const deleteTodo = async (todo: Todo) => {
    await fetch(`http://127.0.0.1:5000/todo/${todo.todo_id}`, {
      method: "DELETE",
    }).catch((err) => console.error("Error deleting todo: ", err));

    setTodos((prev) =>
      prev.filter((todoItem) => todoItem.todo_id !== todo.todo_id)
    );
  };

  return { todos, getTodos, addTodo, toggleTodo, deleteTodo };
};
