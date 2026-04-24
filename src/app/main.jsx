import "@/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DateDisplay, ClockDisplay } from "@/components/Clock.jsx";
import CardList from "../components/card/CardList.jsx";
import Example from "../components/example/Example2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Example />
    </div>
  </StrictMode>,
);
