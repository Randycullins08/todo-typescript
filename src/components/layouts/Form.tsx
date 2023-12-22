import { FormEvent, forwardRef, ForwardedRef } from "react";
import { FormProps } from "../../interfaces/interfaces";

const Form = forwardRef<HTMLFormElement, FormProps>(
  (props, ref: ForwardedRef<HTMLFormElement>) => {
    const { onSubmit, children, ...rest } = props;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onSubmit(event);
    };

    return (
      <form
        ref={ref}
        className="todo-form-container"
        onSubmit={handleSubmit}
        {...rest}
      >
        {children}
      </form>
    );
  }
);

export default Form;
