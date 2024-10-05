import { useCallback, useState } from "react";
import { v4 } from "uuid";
import { Todo, TodoResponse, UseTodoFunctions } from "../interfaces/interfaces";
import { useApi } from "./useApi";

export const useTodoFunctions = (): UseTodoFunctions => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { fetchData } = useApi<TodoResponse>();

  const getTodos = useCallback(async () => {
    try {
      const result = await fetchData("/todos");
      if (result && Array.isArray(result.results)) {
        setTodos(result.results);
      } else {
        console.error("Unexpected data format:", result);
      }
    } catch (error) {
      console.error("Error getting todos: ", error);
    }
  }, [fetchData]);

  const addTodo = useCallback(
    async (task: string) => {
      const newId = v4();
      const newTodo = { todo_id: newId, task, completed: false };

      try {
        await fetchData("/todos", {
          method: "POST",
          body: newTodo,
        });
        setTodos((prev) => [...prev, newTodo]);
      } catch (error) {
        console.error("Error adding todo: ", error);
      }
    },
    [fetchData]
  );

  const toggleTodo = useCallback(
    async (todo: Todo) => {
      const updatedTodo = { ...todo, completed: !todo.completed };

      try {
        await fetchData(`/todo/${todo.todo_id}`, {
          method: "PUT",
          body: updatedTodo,
        });
        setTodos((prev) =>
          prev.map((todoItem) =>
            todoItem.todo_id === todo.todo_id ? updatedTodo : todoItem
          )
        );
      } catch (error) {
        console.error("Error updating todo: ", error);
      }
    },
    [fetchData, todos]
  );

  const deleteTodo = useCallback(
    async (todo: Todo) => {
      try {
        await fetchData(`/todo/${todo.todo_id}`, {
          method: "DELETE",
        });
        setTodos((prev) =>
          prev.filter((todoItem) => todoItem.todo_id !== todo.todo_id)
        );
      } catch (error) {
        console.error("Error deleting todo: ", error);
      }
    },
    [fetchData]
  );

  return { todos, getTodos, addTodo, toggleTodo, deleteTodo };
};
