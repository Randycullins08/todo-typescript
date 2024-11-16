import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-light shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-accent">
            TodoApp
          </a>
        </div>

        {/* Filters or Actions */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-accent">
              All
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent">
              Active
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent">
              Completed
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
