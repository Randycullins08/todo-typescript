import { FormEvent } from "react";
import { FormProps } from "../../interfaces/interfaces";

export default function Form({ onSubmit, children, ...props }: FormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(event);
  };

  return (
    <form className="todo-form-container" onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
}
