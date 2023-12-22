import { useState } from "react";
import { Todo } from "../interfaces/interfaces";
import { v4 } from "uuid";

export const useTodoFunctions = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async (): Promise<void> => {
    await fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.error("Error getting todos: ", err));
  };

  const addTodo = async (task: string): Promise<void> => {
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
    })
      .then((res) => {
        res.json();
        setTodos((prev) => [...prev, newTodo]);
      })
      .catch((err) => console.error("Error submitting todo: ", err));
  };

  const toggleTodo = async (todo: Todo): Promise<void> => {
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
    })
      .then((res) => {
        res.json();
        setTodos(completedTodo);
      })
      .catch((err) => console.error("Error Completing Task: ", err));
  };

  const deleteTodo = async (todo: Todo): Promise<void> => {
    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => {
        res.json();
        if (res.ok) {
          setTodos((prev) =>
            prev.filter((todoItem) => todoItem.id !== todo.id)
          );
        }
      })
      .catch((err) => console.error("Error submitting todo: ", err));
  };

  return { todos, getTodos, addTodo, toggleTodo, deleteTodo };
};
