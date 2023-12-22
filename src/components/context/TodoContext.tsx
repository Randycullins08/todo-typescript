import { FC, ReactNode, createContext, useContext, useEffect } from "react";
import { TodoContextProps } from "../../interfaces/interfaces";
import { useTodoFunctions } from "../../hooks/useTodoFunctions";

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { todos, getTodos, addTodo, toggleTodo, deleteTodo } =
    useTodoFunctions();

  useEffect(() => {
    getTodos();
  }, []);

  const contextValues: TodoContextProps = {
    todos,
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
