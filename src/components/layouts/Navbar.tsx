import { useTodoContext } from "../context/TodoContext";

const Navbar: React.FC = () => {
  const { filter, setFilter, theme, toggleTheme } = useTodoContext();

  return (
    <nav className="bg-primary dark:bg-dark text-light dark:text-light shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold">
          <h1>TodoApp</h1>
        </div>

        <ul className="flex space-x-6 text-sm font-medium">
          <li className="transition-transform transform hover:scale-110">
            <button
              className={`hover:text-accent dark:hover:text-primary ${
                filter === "all" && "text-accent dark:text-primary font-bold"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
          </li>

          <li className="transition-transform transform hover:scale-110">
            <button
              className={`hover:text-accent dark:hover:text-primary ${
                filter === "active" && "text-accent dark:text-primary font-bold"
              }`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
          </li>

          <li className="transition-transform transform hover:scale-110">
            <button
              className={`hover:text-accent dark:hover:text-primary ${
                filter === "completed" &&
                "text-accent dark:text-primary font-bold"
              }`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className="p-2 rounded border font-bold hover:text-accent dark:hover:text-primary dark:text-light transition-transform transform hover:scale-110"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
