import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TodoProvider } from "./components/context/TodoContext.tsx";
import "./index.css";
import Navbar from "./components/layouts/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <Navbar />
      <App />
    </TodoProvider>
  </React.StrictMode>
);
