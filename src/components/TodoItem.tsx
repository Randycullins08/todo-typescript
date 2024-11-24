import TrashCanIcon from "./icons/TrashCanIcon";
import Checkmark from "./icons/Checkmark";
import Checkbox from "./icons/Checkbox";
import { useTodoContext } from "./context/TodoContext";
import { TodoProps } from "../types/types";

export default function TodoItem({ todoData }: TodoProps) {
  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg shadow-sm transition-all ${
        todoData.completed
          ? "bg-cyan-100 dark:bg-dark dark:text-light text-gray-500 line-through"
          : "bg-white text-dark"
      } hover:bg-gray-100`}
    >
      <span
        className="cursor-pointer"
        onClick={() => toggleTodo(todoData)}
        aria-label="Toggle complete"
      >
        {todoData.completed ? <Checkmark /> : <Checkbox />}
      </span>

      <span className="flex-grow px-3 text-lg">{todoData.task}</span>

      <span
        className="text-red-500 cursor-pointer hover:text-red-700"
        onClick={() => deleteTodo(todoData)}
        aria-label="Delete todo"
      >
        <TrashCanIcon />
      </span>
    </li>
  );
}
