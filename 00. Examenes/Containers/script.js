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

// 2. DATOS INICIALES
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

// 3. FUNCIONES DEL DOM
function validarCampos(referencia, peso, volumen) {
  if (!/^[a-zA-Z0-9]+$/.test(referencia)) {
    log(
      "Error: La referencia solo puede contener letras y números (sin símbolos).",
      "mensaje-error",
    );
    return false;
  }

  if (
    !peso ||
    isNaN(peso) ||
    !Number.isInteger(Number(peso)) ||
    Number(peso) <= 10
  ) {
    log(
      "Error: El peso debe ser un número entero mayor que 10.",
      "mensaje-error",
    );
    return false;
  }

  if (!volumen || isNaN(volumen) || Number(volumen) <= 10) {
    log("Error: El volumen debe ser un número mayor que 10.", "mensaje-error");
    return false;
  }

  return true;
}

function comprobarReferencia(referencia) {
  const contenedorExistente = arrayContenedores.find(
    (contenedor) => contenedor.referencia === referencia,
  );

  if (contenedorExistente) {
    log("La referencia " + referencia + " ya existe.", "mensaje-error");
    return false;
  }
  return true;
}

function agregarContenedor() {
  var referencia = document.getElementById("referencia").value;
  var peso = document.getElementById("peso").value;
  var volumen = document.getElementById("volumen").value;

  if (!validarCampos(referencia, peso, volumen)) return;
  if (!comprobarReferencia(referencia)) return;

  arrayContenedores.push(new Contenedor(referencia, peso, volumen));
  const densidad = calcularDensidad(peso, volumen);

  if (densidad > 2.5) {
    arrayContenedoresAltaDensidad.push(
      new ContenedorAltaDensidad(referencia, densidad),
    );
  }

  // Solo actualiza la tabla si ya está visible
  if (!document.getElementById("tabla-alta-densidad").hidden) {
    mostrarTabla();
  }
  log("Contenedor " + referencia + " añadido.", "mensaje-exito");
}

function editarContenedor() {
  var referencia = document.getElementById("referencia").value;
  var peso = document.getElementById("peso").value;
  var volumen = document.getElementById("volumen").value;

  if (!validarCampos(referencia, peso, volumen)) return;

  const contenedor = arrayContenedores.find((c) => c.referencia === referencia);
  if (!contenedor) {
    log("Error: Referencia no encontrada.", "mensaje-error");
    return;
  }

  contenedor.peso = Number(peso);
  contenedor.volumen = Number(volumen);

  actualizarAltaDensidad(referencia, calcularDensidad(peso, volumen));

  // Solo actualiza la tabla si ya está visible
  if (!document.getElementById("tabla-alta-densidad").hidden) {
    mostrarTabla();
  }
  log("Contenedor " + referencia + " modificado.", "mensaje-exito");
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

// 4. MÓDULO VISUAL (Tabla y Log)
function log(texto, clase) {
  const contenedorLog = document.getElementById("logs");

  const p = document.createElement("p");
  p.textContent = texto;
  p.className = clase;
  contenedorLog.prepend(p);

  if (contenedorLog.children.length > 3) {
    contenedorLog.lastElementChild.remove();
  }
}

function mostrarTabla() {
  const tabla = document.getElementById("tabla-alta-densidad");
  const tbody = document.getElementById("container-list");

  tbody.innerHTML = "";
  tabla.hidden = false; // Hacemos visible la tabla

  arrayContenedoresAltaDensidad.forEach((c) => {
    const fila = tbody.insertRow();
    fila.insertCell().textContent = c.referencia;
    fila.insertCell().textContent = Number(c.densidad).toFixed(2) + " Kg/m³";
  });
}

// 5. EVENTOS
document.querySelector("form").addEventListener("click", (event) => {
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
      if (!peso || !volumen) {
        log("Error: Introduce peso y volumen.", "mensaje-error");
        return;
      }
      log("Densidad: " + calcularDensidad(peso, volumen), "mensaje-calculo");
      break;
  }
});

// Al hacer clic en el botón, se muestra la tabla de alta densidad
document
  .getElementById("btn-alta-densidad")
  .addEventListener("click", mostrarTabla);
