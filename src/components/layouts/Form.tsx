import { FormEvent, forwardRef, ForwardedRef } from "react";

interface FormProps extends React.HTMLProps<HTMLFormElement> {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ onSubmit, children, ...rest }, ref: ForwardedRef<HTMLFormElement>) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(event);
    };

    return (
      <form ref={ref} onSubmit={handleSubmit} {...rest}>
        {children}
      </form>
    );
  }
);

Form.displayName = "Form";

export default Form;
