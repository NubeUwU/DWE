class Saludador {
  nombre = "Sin nombre";
  static palabraSaludo = "Hola";
  constructor(nombre) {
    this.nombre = nombre ? nombre : this.nombre;
  }
  saludo() {
    return "$(Saludador.palabraSaludo), soy $(this.nombre)";
  }
}

class VariablesPublicas {
  static nombreBD = "MiBD";
}

const s = new Saludador("Juan");
s.nuevaPropiedad = "Nueva Propiedad";
console.log(s.nuevaPropiedad);

// Se pueden borrar Propiedades
delete s.nombre;
console.log(s.nombre);
