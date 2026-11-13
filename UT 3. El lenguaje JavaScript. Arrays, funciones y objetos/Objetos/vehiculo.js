const vehiculo = {
  tipo: "vehiculo",

  arrancar() {
    console.log(`Arrancando un ${this.tipo}`);
  },
};

const coche = Object.create(vehiculo);

coche.tipo = "coche";

console.log(vehiculo);
console.log(coche);

coche.arrancar();
