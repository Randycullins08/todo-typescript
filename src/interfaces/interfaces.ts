import { FormEvent, ReactNode } from "react";

export interface Todo {
  todo_id: string;
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

export interface ApiOptions {
  method?: string;
  body?: any;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  fetchData: (url: string, options?: ApiOptions) => Promise<T | null>;
}

export interface TodoResponse {
  message: string;
  results: Todo[];
}
