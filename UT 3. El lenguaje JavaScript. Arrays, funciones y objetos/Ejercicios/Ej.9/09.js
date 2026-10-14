function esNumerico(numero) {
  return /^-?[0-9]+$/.test(numero);
}

let numero;

do {
  numero = prompt("Introduce un número:");

  if (numero !== null && !esNumerico(numero)) {
    alert("Error: debes introducir un número.");
  }
} while (numero !== null && !esNumerico(numero));

if (numero !== null) {
  alert("El número introducido es " + numero);
}
