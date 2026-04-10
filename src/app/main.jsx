import CardList from "@/components/CardList.jsx";
import Card from "../components/Card.jsx";  
import {objectManager, manipulateObject} from "@/helpers/objectManager.js";
import "@/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

let persona = {
  nombre: "Juan",
  edad: 30,
  tarea: "Developer",
};

//Manipulación de objetos
objectManager.extraction(persona);
objectManager.extractionRename(persona);

//Edición de objetos
manipulateObject.read(persona, "nombre");
manipulateObject.update(persona, "edad", 31);
manipulateObject.update(persona, "Trabajo", "Senior Developer");
manipulateObject.delete(persona, "tarea");


createRoot(document.getElementById("root")).render(

  <StrictMode>
    <CardList list={[
      { nombre: "Juan", edad: 25 },
      { nombre: "María", edad: 30 },
      { nombre: "Pedro", edad: 28 },
    ]} />

    <Card primaryParamName="Cargo" primaryParamValue="Develop"  secondaryParamName="Años de experiencia" secondaryParamValue={10} />
  </StrictMode>,
);
