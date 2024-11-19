import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./components/context/TodoContext";

export default function App() {
  const { todos, activeArr, completedArr } = useTodoContext();

  console.log("active", activeArr);
  console.log("completed", completedArr);

  return (
    <div className="app bg-background min-h-screen p-6">
      <h1 className="text-3xl font-bold text-dark mb-4">Todo App</h1>

      <TodoForm />

      {todos && (
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.todo_id} todoData={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}
