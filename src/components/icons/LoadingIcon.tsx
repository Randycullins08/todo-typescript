import { IconProps } from "../../types/types";

export default function LoadingIcon({ ...props }: IconProps) {
  return (
    <button aria-label="Loading" {...props}>
      <svg
        className="animate-spin h-12 w-12 text-primary dark:text-dark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </button>
  );
}
