function esNumerico(n1, n2) {
  return /^-?[0-9]+$/.test(n1) && /^-?[0-9]+$/.test(n2);
}

let n1, n2;

do {
  n1 = prompt("Introduce el primer número:");
  n2 = prompt("Introduce el segundo número:");

  if (n1 !== null && n2 !== null && !esNumerico(n1, n2)) {
    alert("Error: solo debes introducir números.");
  }
} while (n1 !== null && n2 !== null && !esNumerico(n1, n2));

if (n1 !== null && n2 !== null) {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  if (n1 > n2) {
    alert("El número " + n1 + " es mayor que el número " + n2);
  } else if (n1 < n2) {
    alert("El número " + n1 + " es menor que el número " + n2);
  } else {
    alert("Los dos números son iguales.");
  }
}
