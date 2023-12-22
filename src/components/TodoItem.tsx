import { TodoProps } from "../interfaces/interfaces";
import { useTodoContext } from "./context/TodoContext";
import Checkbox from "./icons/Checkbox";
import Checkmark from "./icons/Checkmark";
import TrashCanIcon from "./icons/TrashCanIcon";

export default function TodoItem({ todoData }: TodoProps) {
  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <li className={`todo-wrapper ${todoData.completed && "completed"}`}>
      {todoData.completed ? (
        <Checkmark
          completed={todoData.completed}
          onClick={() => toggleTodo(todoData)}
        />
      ) : (
        <Checkbox
          onClick={() => toggleTodo(todoData)}
          completed={todoData.completed}
        />
      )}

      {todoData.task}
      <TrashCanIcon onClick={() => deleteTodo(todoData)} />
    </li>
  );
}
