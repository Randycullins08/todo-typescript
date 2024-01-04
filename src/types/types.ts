import { MouseEvent } from "react";
import { Todo } from "../interfaces/interfaces";

export type IconProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type ToggleProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type TodoProps = {
  todoData: Todo;
};
