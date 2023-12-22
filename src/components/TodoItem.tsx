import TrashCanIcon from "./icons/TrashCanIcon";
import { Todo } from "../interfaces/interfaces";
import Checkbox from "./icons/Checkbox";
import Checkmark from "./icons/Checkmark";
import { useTodoContext } from "./context/TodoContext";

interface TodoProps {
  todoData: Todo;
  // handleDelete: (item: Todo) => Promise<void>;
  // handleComplete: (item: Todo) => Promise<void>;
}

export default function TodoItem({ todoData }: TodoProps) {
  const { toggleTodo, deleteTodo } = useTodoContext();
  return (
    <ul className={`todo-wrapper ${todoData.completed && "completed"}`}>
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
      <li>{todoData.task}</li>
      <TrashCanIcon onClick={() => deleteTodo(todoData)} />
    </ul>
  );
}
