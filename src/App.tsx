import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";

import LoadingIcon from "./components/icons/LoadingIcon";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

import { useTodoContext } from "./components/context/TodoContext";

export default function App() {
  const { todos, activeArr, completedArr, filter, loading, saveNewOrder } =
    useTodoContext();

  const filteredTodos =
    filter === "all" ? todos : filter === "active" ? activeArr : completedArr;

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = filteredTodos.findIndex(
        (todo) => todo.todo_id === active.id
      );
      const newIndex = filteredTodos.findIndex(
        (todo) => todo.todo_id === over.id
      );

      const updatedTodos = arrayMove(filteredTodos, oldIndex, newIndex);
      saveNewOrder(updatedTodos);
    }
  };

  return (
    <div className="app bg-background min-h-screen p-6">
      <h1 className="text-3xl font-bold text-dark mb-4">Todo App</h1>

      <TodoForm />

      {loading && (
        <div className="flex justify-center mt-4">
          <LoadingIcon />
        </div>
      )}

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
