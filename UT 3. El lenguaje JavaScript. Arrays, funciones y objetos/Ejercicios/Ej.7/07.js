function esAlfabetico(caracter) {
  return /^[a-záéíóúüñ]$/i.test(caracter);
}

let caracter;

do {
  caracter = prompt("Introduce un carácter:");

  if (caracter !== null && !esAlfabetico(caracter)) {
    alert("Error: solo debes introducir una letra.");
  }
} while (caracter !== null && !esAlfabetico(caracter));

if (caracter !== null) {
  alert("El carácter ' " + caracter + " ' es una letra.");
}
