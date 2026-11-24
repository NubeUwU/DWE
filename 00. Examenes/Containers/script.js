// CLASES
class Contenedor {
  constructor(referencia, peso, volumen) {
    this.referencia = referencia;
    this.peso = peso;
    this.volumen = volumen;
  }

  get referencia() {
    return this._referencia;
  }

  set referencia(valor) {
    this._referencia = valor;
  }

  get peso() {
    return this._peso;
  }

  set peso(valor) {
    this._peso = Number(valor);
  }

  get volumen() {
    return this._volumen;
  }

  set volumen(valor) {
    this._volumen = Number(valor);
  }

  // Getter calculado
  get densidad() {
    return this.peso / this.volumen;
  }
}

class ContenedorAltaDensidad {
  constructor(referencia, densidad) {
    this.referencia = referencia;
    this.densidad = densidad;
  }

  get referencia() {
    return this._referencia;
  }

  set referencia(valor) {
    this._referencia = valor;
  }

  get densidad() {
    return this._densidad;
  }

  set densidad(valor) {
    this._densidad = Number(valor);
  }
}

// Datos Iniciales
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

// Funciones del DOM
function validarCampos(referencia, peso, volumen) {
  if (!/^[a-zA-Z0-9-]+$/.test(referencia)) {
    log(
      "Error: La referencia solo puede contener letras y números (sin símbolos).",
    );
    return false;
  }

  if (
    !peso ||
    isNaN(peso) ||
    !Number.isInteger(Number(peso)) ||
    Number(peso) <= 10
  ) {
    log("Error: El peso debe ser un número entero mayor que 10.");
    return false;
  }

  if (!volumen || isNaN(volumen) || Number(volumen) <= 10) {
    log("Error: El volumen debe ser un número mayor que 10.");
    return false;
  }

  return true;
}

function comprobarReferencia(referencia) {
  const contenedorExistente = arrayContenedores.find(
    (contenedor) => contenedor.referencia === referencia,
  );

  if (contenedorExistente) {
    log("El contenedor con referencia " + referencia + " ya existe.");
    return false;
  }
  return true;
}

function agregarContenedor() {
  let referencia = document.getElementById("referencia").value;
  let peso = document.getElementById("peso").value;
  let volumen = document.getElementById("volumen").value;

  if (!validarCampos(referencia, peso, volumen)) return;
  if (!comprobarReferencia(referencia)) return;

  const nuevoContenedor = new Contenedor(referencia, peso, volumen);
  arrayContenedores.push(nuevoContenedor);

  if (nuevoContenedor.densidad > 2.5) {
    arrayContenedoresAltaDensidad.push(
      new ContenedorAltaDensidad(
        nuevoContenedor.referencia,
        nuevoContenedor.densidad,
      ),
    );
  }

  if (!document.getElementById("tabla-alta-densidad").hidden) {
    mostrarTabla();
  }
  log("Contenedor " + referencia + " añadido.");
}

function editarContenedor() {
  let referencia = document.getElementById("referencia").value;
  let peso = document.getElementById("peso").value;
  let volumen = document.getElementById("volumen").value;

  if (!validarCampos(referencia, peso, volumen)) return;

  const contenedor = arrayContenedores.find((c) => c.referencia === referencia);
  if (!contenedor) {
    log("Error: Referencia no encontrada.");
    return;
  }

  // Setteamos los valores del contenedor
  contenedor.peso = peso;
  contenedor.volumen = volumen;

  actualizarAltaDensidad(contenedor.referencia, contenedor.densidad);

  if (!document.getElementById("tabla-alta-densidad").hidden) {
    mostrarTabla();
  }
  log("Contenedor " + referencia + " modificado.");
}

function actualizarAltaDensidad(referencia, densidad) {
  const indice = arrayContenedoresAltaDensidad.findIndex(
    (a) => a.referencia === referencia,
  );

  if (indice !== -1) {
    arrayContenedoresAltaDensidad.splice(indice, 1);
  }

  if (densidad > 2.5) {
    arrayContenedoresAltaDensidad.push(
      new ContenedorAltaDensidad(referencia, densidad),
    );
  }
}

function calcularDensidad(peso, volumen) {
  return (peso / volumen).toFixed(2);
}

// Tabla y Logs
function log(texto, clase) {
  const contenedorLog = document.getElementById("logs");

  const p = document.createElement("p");
  p.textContent = texto;
  contenedorLog.prepend(p);

  if (contenedorLog.children.length > 5) {
    contenedorLog.lastElementChild.remove();
  }
}

function mostrarTabla() {
  const tabla = document.getElementById("tabla-alta-densidad");
  const tbody = document.getElementById("container-list");

  tbody.innerHTML = "";
  tabla.hidden = false;

  arrayContenedoresAltaDensidad.forEach((c) => {
    const fila = tbody.insertRow();
    fila.insertCell().textContent = c.referencia;
    fila.insertCell().textContent = c.densidad.toFixed(2) + " Kg/m³";
  });
}

// Eventos del DOM
document.querySelector("form").addEventListener("click", (event) => {
  switch (event.target.id) {
    case "agregar":
      agregarContenedor();
      break;
    case "editar":
      editarContenedor();
      break;
    case "calcular":
      let peso = document.getElementById("peso").value;
      let volumen = document.getElementById("volumen").value;
      if (!peso || !volumen) {
        log("Error: Introduce peso y volumen.");
        return;
      }
      log("Densidad: " + calcularDensidad(peso, volumen) + "Kg/m³");
      break;
  }
});

document
  .getElementById("btn-alta-densidad")
  .addEventListener("click", mostrarTabla);
