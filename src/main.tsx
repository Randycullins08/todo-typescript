import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/layouts/Navbar.tsx";
import App from "./App.tsx";

import { TodoProvider } from "./components/context/TodoContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <Navbar />
      <App />
    </TodoProvider>
  </React.StrictMode>
);
