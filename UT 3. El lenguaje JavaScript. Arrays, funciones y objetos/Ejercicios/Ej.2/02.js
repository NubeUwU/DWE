function comprobarMultiplo() {
  let repetir;

  do {
    let a = prompt("Introduce el primer número (a):");
    const b = 3;

    if (a !== null && !isNaN(a)) {
      if (a % b === 0) {
        window.alert("El número " + a + " es múltiplo de " + b);
      } else {
        window.alert("El número " + a + " no es múltiplo de " + b);
      }
    }

    let respuesta = prompt("Desea comprobar otro número? (S/N) ");

    repetir =
      respuesta !== null &&
      (respuesta.toLowerCase().trim() === "s" ||
        respuesta.toLowerCase().trim() === "si");
  } while (repetir);
}
