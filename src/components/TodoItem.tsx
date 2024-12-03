import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import TrashCanIcon from "./icons/TrashCanIcon";
import Checkmark from "./icons/Checkmark";
import Checkbox from "./icons/Checkbox";

import { useTodoContext } from "./context/TodoContext";
import { TodoProps } from "../types/types";

export default function TodoItem({ todoData }: TodoProps) {
  const { toggleTodo, deleteTodo } = useTodoContext();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: todoData.todo_id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => toggleTodo(todoData)}
      className={`flex items-center justify-between p-3 rounded-lg shadow-sm transition-all cursor-pointer ${
        todoData.completed
          ? "bg-cyan-100 dark:bg-dark dark:text-light text-gray-500 line-through"
          : "bg-white text-dark"
      } hover:bg-gray-100`}
    >
      <span aria-label="Toggle complete">
        {todoData.completed ? <Checkmark /> : <Checkbox />}
      </span>

      <span className="flex-grow px-3 text-lg">{todoData.task}</span>

      <span
        className="text-red-500 cursor-pointer hover:text-red-700"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todoData);
        }}
        aria-label="Delete todo"
      >
        <TrashCanIcon />
      </span>
    </li>
  );
}
