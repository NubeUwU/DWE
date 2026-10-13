function verNumeros() {
  let repetir;

  do {
    // 1. Muestra los números del 1 al 10
    for (let i = 1; i <= 10; i++) {
      window.alert(i);
    }

    // 2. Pregunta al usuario y guarda la respuesta
    let respuesta = prompt("¿Desea ver los números otra vez? (S/N)");

    // 3. Comprueba si el usuario escribió 's' o 'si' (ignorando mayúsculas)
    repetir =
      (respuesta !== null && respuesta.toLowerCase().trim() === "s") ||
      respuesta.toLowerCase().trim() === "si";
  } while (repetir); // Si es verdadero, vuelve a empezar
}
