import { useTodoContext } from "../context/TodoContext";

const Navbar: React.FC = () => {
  const { filter, setFilter } = useTodoContext();

  return (
    <nav className="bg-primary text-light shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-accent">
            TodoApp
          </a>
        </div>

        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <button
              className={`hover:text-accent ${
                filter === "all" && "text-accent font-bold"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
          </li>

          <li>
            <button
              className={`hover:text-accent ${
                filter === "active" && "text-accent font-bold"
              }`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
          </li>

          <li>
            <button
              className={`hover:text-accent ${
                filter === "completed" && "text-accent font-bold"
              }`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
