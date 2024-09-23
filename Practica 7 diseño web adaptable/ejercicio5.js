//iterar propiedades de un objeto
const producto ={
    nombre: "laptop",
    precio: 800,
    dispomible: true
  };

  //uso
  for (let propiedad in producto) {
    console.log(`${producto[propiedad]}`);
  }