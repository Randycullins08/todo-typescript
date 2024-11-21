import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./components/context/TodoContext";

export default function App() {
  const { todos, activeArr, completedArr, filter } = useTodoContext();

  const filteredTodos =
    filter === "all" ? todos : filter === "active" ? activeArr : completedArr;

  return (
    <div className="app bg-background min-h-screen p-6">
      <h1 className="text-3xl font-bold text-dark mb-4">Todo App</h1>

      <TodoForm />

      {filteredTodos && (
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.todo_id} todoData={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}
