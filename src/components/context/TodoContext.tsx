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

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeArr, setActiveArr] = useState<Todo[]>([]);
  const [completedArr, setCompletedArr] = useState<Todo[]>([]);

  const { todos, getTodos, addTodo, toggleTodo, deleteTodo } =
    useTodoFunctions();

  useEffect(() => {
    getTodos();

    todos.forEach((todo) => {
      if (!todo.completed) {
        setActiveArr((prev) => [...prev, todo]);
      }

      setCompletedArr((prev) => [...prev, todo]);
    });
  }, []);

  const contextValues: TodoContextProps = {
    todos,
    activeArr,
    completedArr,
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
