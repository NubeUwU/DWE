class Marcianito {
  constructor(nombre, color) {
    this.nombre = nombre;
    this.color = color;
  }
}

const m = new Marcianito("Invasor 1", "Verde");
console.log("Nombre: " + m.nombre + ", color: " + m.color);
console.log(m);
m.disparos = 30;
console.log(m.disparos);
