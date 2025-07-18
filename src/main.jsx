import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/reset.css";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")).render(<App />);
