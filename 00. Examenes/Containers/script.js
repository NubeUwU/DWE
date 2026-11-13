class Contenedor {
  constructor(referencia, peso, volumen) {
    this.referencia = referencia;
    this.peso = peso;
    this.volumen = volumen;
  }
}

class ContenedorAltaDensidad {
  constructor(referencia, densidad) {
    this.referencia = referencia;
    this.densidad = densidad;
  }
}

const arrayContenedores = [];
const arrayContenedoresAltaDensidad = [];

/**/

const form = document.querySelector("form");
form.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.matches("button.add"))
    arrayContenedores.push(
      new Contenedor(
        document.getElementById("referencia").value,
        document.getElementById("peso").value,
        document.getElementById("volumen").value,
      ),
    );
  console.log(arrayContenedores);
});
