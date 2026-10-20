// Funcion para crear una persona con unos parametros dados
const Persona = function (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
};

const p = new Persona("Juan, 18");
console.log(p.nombre);
const miobjeto = {
  nombre: "Invasor del espacio #1",
  color: "Azul",
  x: 100,
  y: 100,
  disparos: 30,
  disparar: function () {
    this.disparos--;
    alert(this.nombre + " ha disparado");
  },
};
