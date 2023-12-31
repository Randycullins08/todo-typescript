import { ToggleProps } from "../../types/types";

export default function Checkbox({ onClick, ...props }: ToggleProps) {
  return (
    <button onClick={onClick}>
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
