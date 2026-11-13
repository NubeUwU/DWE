const crearObjeto = (nom, col, posX, posY, disparosIniciales) => {
  const miObjeto = {
    nombre: nom,
    color: col,
    x: posX,
    y: posY,
    disparos: disparosIniciales,
    disparar: function () {
      this.disparos--;
      alert(this.nombre + " ha disparado");
    },
  };

  return miObjeto;
};
const miobjNuevo1 = crearObjeto("Invasor1", "Azul", 0, 0, 30);
miobjNuevo1.disparar();
const miObjetoNuevo2 = crearObjeto("invasor 2", "Verde", 100, 30, 50);
