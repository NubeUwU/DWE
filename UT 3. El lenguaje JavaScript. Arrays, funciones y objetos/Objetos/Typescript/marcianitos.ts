export {};

class Marcianito {
  nombre: string;
  color: string;
  constructor(nom: string, col: string) {
    this.nombre = nom;
    this.color = col;
  }
}

const n = new Marcianito("Invasor 1", "Azul");
console.log(n.nombre, n.color);
