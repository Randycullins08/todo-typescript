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
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const {
    todos,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    loading,
    saveNewOrder,
  } = useTodoFunctions();

  const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

  useEffect(() => {
    getTodos();
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

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
    theme,
    toggleTheme,
    loading,
    saveNewOrder,
  };

  return (
    <TodoContext.Provider value={contextValues}>
      <div className={`${theme === "dark" && "dark"}`}>{children}</div>
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
