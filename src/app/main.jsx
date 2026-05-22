import "@/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesApp from "./routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoutesApp />
  </StrictMode>,
);
