function esOperador(operador) {
  return /^[+\-*/]$/.test(operador);
}

let operador;

do {
  operador = prompt("Introduce un símbolo de operación (+, -, *, /):");

  if (operador !== null && !esOperador(operador)) {
    alert("Error: debes introducir un símbolo de operación.");
  }
} while (operador !== null && !esOperador(operador));

if (operador !== null) {
  alert("Has introducido el operador '" + operador + "'");
}
