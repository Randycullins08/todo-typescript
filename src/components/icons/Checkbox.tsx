import { MouseEvent } from "react";

interface CheckboxProps {
  completed: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Checkbox({
  onClick,
  completed,
  ...props
}: CheckboxProps) {
  return (
    <button
      className={`${completed ? "checked" : "unchecked"}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="20"
        {...props}
      >
        <rect
          width="18"
          height="18"
          x="3"
          y="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          rx="2"
          ry="2"
        />
      </svg>
    </button>
  );
}
