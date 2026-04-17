import "@/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CardList from "../components/card/CardList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardList />
  </StrictMode>,
);
