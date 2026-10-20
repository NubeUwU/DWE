const Usuario = function (nombre, clave, seg, res) {
  this.nombre = nombre;
  this.clave = clave;
  this.seg = seg;
  this.res = res;
};

let usuarios = [];
usuarios.push(new Usuario("Pepe", "1234", "Color favorito", "Azul"));
