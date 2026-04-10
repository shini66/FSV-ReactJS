let datosPersonales = {
  nombre: "Juan",
  edad: 30,
};

let datosLaborales = {
  empresa: "Tech Solutions",
  cargo: "Developer",
  tarea: "Desarrollo de aplicaciones web",
}

let info1 = {
  proyecto: "Proyecto A",
  deadline: "2024-12-31",
}

let info2 = {
  proyecto: "Proyecto B",
  deadline: "2025-03-31",
}

let { nombre, edad } = datosPersonales;
let { empresa, cargo, tarea } = datosLaborales;

console.log(`Nombre: ${nombre}, Edad: ${edad}`);
console.log(`Empresa: ${empresa}, Cargo: ${cargo}, Tarea: ${tarea}`);

let {proyecto: proyect1, deadline: deadline1} = info1;
let {proyecto: proyect2, deadline: deadline2} = info2;

console.log(`Proyecto: ${proyect1}, Deadline: ${deadline1}`);
console.log(`Proyecto: ${proyect2}, Deadline: ${deadline2}`);

let objetoCombinado = {...info1, ...info2};
console.log('Objeto combinado:', objetoCombinado);
let objetoCombinado2 = Object.assign({}, datosPersonales, datosLaborales);
console.log('Objeto combinado 2:', objetoCombinado2);