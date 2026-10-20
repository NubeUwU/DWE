"use strict";
class Marcianito {
    nombre;
    color;
    constructor(nom, col) {
        this.nombre = nom;
        this.color = col;
    }
}
const n = new Marcianito("Invasor 1", "Azul");
console.log(n.nombre, n.color);
