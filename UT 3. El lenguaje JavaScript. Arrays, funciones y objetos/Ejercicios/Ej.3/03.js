function compararNumeros() {
  let num1 = Number(prompt("Ingrese el primer número: "));
  let num2 = Number(prompt("Ingrese el segundo número: "));
  let num3 = Number(prompt("Ingrese el tercer número: "));

  // 2. Creamos el array agrupando las 3 variables
  let numeros = [num1, num2, num3];

  // 3. Ordenamos los 3 elementos de menor a mayor
  numeros.sort((a, b) => a - b);

  // 4. Mostramos el resultado ordenado
  window.alert("Números ordenados de menor a mayor: " + numeros.join(", "));
}

compararNumeros();
