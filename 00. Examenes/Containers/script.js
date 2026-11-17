// 1. CLASES
class Contenedor {
  constructor(referencia, peso, volumen) {
    this.referencia = referencia;
    this.peso = Number(peso);
    this.volumen = Number(volumen);
  }
}

class ContenedorAltaDensidad {
  constructor(referencia, densidad) {
    this.referencia = referencia;
    this.densidad = densidad;
  }
}

// 2. DATOS (Arrays iniciales)
const arrayContenedores = [
  new Contenedor("CONT-001", 50, 25),
  new Contenedor("CONT-002", 90, 30),
  new Contenedor("CONT-003", 100, 40),
  new Contenedor("CONT-004", 160, 50),
  new Contenedor("CONT-005", 40, 20),
  new Contenedor("CONT-006", 200, 50),
];

const arrayContenedoresAltaDensidad = [
  new ContenedorAltaDensidad("CONT-002", 3.0),
  new ContenedorAltaDensidad("CONT-004", 3.2),
  new ContenedorAltaDensidad("CONT-006", 4.0),
];

// 3. FUNCIONES DE VALIDACIÓN Y LÓGICA
function comprobarReferencia(referencia) {
  const contenedorExistente = arrayContenedores.find(
    (contenedor) => contenedor.referencia === referencia,
  );

  if (contenedorExistente) {
    alert("La referencia ya existe.");
    return false;
  }
  return true;
}

function agregarContenedor() {
  var referencia = document.getElementById("referencia").value;
  var peso = document.getElementById("peso").value;
  var volumen = document.getElementById("volumen").value;

  if (!comprobarReferencia(referencia)) {
    return;
  }

  arrayContenedores.push(new Contenedor(referencia, peso, volumen));
  if (calcularDensidad(peso, volumen) > 2.5) {
    arrayContenedoresAltaDensidad.push(
      new ContenedorAltaDensidad(referencia, calcularDensidad(peso, volumen)),
    );
  }
  console.log("Contenedor añadido:", arrayContenedores);
}

function editarContenedor() {
  // Pendiente de implementar tu lógica de modificación
  console.log("Botón Modificar pulsado");
}

function calcularDensidad(peso, volumen) {
  return peso / volumen;
}

// 4. EVENTOS
const form = document.querySelector("form");

form.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "add":
      agregarContenedor();
      break;
    case "edit":
      editarContenedor();
      break;
    case "calculate":
      var peso = document.getElementById("peso").value;
      var volumen = document.getElementById("volumen").value;
      var densidad = calcularDensidad(peso, volumen);
      console.log("Densidad:", densidad);
      break;
  }
});
