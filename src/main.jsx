import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/manrope/300.css"; // Light
import "@fontsource/manrope/400.css"; // Regular
import "@fontsource/manrope/500.css"; // Medium
import "@fontsource/manrope/700.css"; //semi-bold

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
