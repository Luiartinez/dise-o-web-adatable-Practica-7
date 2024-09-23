//objeto que contiene propiedades con otros objetos
const estudiante = {
    nombre: "Luis",
    edad: 20,
    direccion:
    {
      calle: "Calle principal",
      ciudad: "san antonio",
    },
    materia: ["matematicas", "programacion", "fisica"]
  };
  
  //acceso de la propiedades anidadas
  console.log(estudiante.direccion.ciudad)
  console.log(estudiante.materia[1]);