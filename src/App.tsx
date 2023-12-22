import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./components/context/TodoContext";

export default function App() {
  const { todos } = useTodoContext();

  return (
    <div className="app">
      <h1>Todo App</h1>

      <TodoForm />

      {todos && todos.map((todo) => <TodoItem key={todo.id} todoData={todo} />)}
    </div>
  );
}
