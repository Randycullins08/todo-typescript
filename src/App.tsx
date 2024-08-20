import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./components/context/TodoContext";

export default function App() {
  const { todos } = useTodoContext();

  return (
    <div className="app">
      <h1>Todo App</h1>

      <TodoForm />

      {todos && (
        <ul>
          {todos.map((todo) => (
            <TodoItem todoData={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
