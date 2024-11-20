import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Todo, TodoContextProps } from "../../interfaces/interfaces";
import { useTodoFunctions } from "../../hooks/useTodoFunctions";
import { FilterType } from "../../types/types";

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<FilterType>("all");

  const { todos, getTodos, addTodo, toggleTodo, deleteTodo } =
    useTodoFunctions();

  useEffect(() => {
    getTodos();
  }, []);

  const activeArr: Todo[] = todos.filter((todo) => !todo.completed);
  const completedArr: Todo[] = todos.filter((todo) => todo.completed);

  const contextValues: TodoContextProps = {
    todos,
    activeArr,
    completedArr,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
};
