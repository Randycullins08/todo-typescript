import { FormEvent, ReactNode } from "react";

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

export interface UseTodoFunctions {
  todos: Todo[];
  getTodos: () => Promise<void>;
  addTodo: (task: string) => Promise<void>;
  toggleTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (todo: Todo) => Promise<void>;
}

export interface TodoContextProps {
  todos: Todo[];
  addTodo: (task: string) => Promise<void>;
  toggleTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (todo: Todo) => Promise<void>;
}

export interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}
