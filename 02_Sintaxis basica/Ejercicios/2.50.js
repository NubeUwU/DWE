function convertToBase16(x) {
  if (x === 0) return "0";

  // Convertimos la entrada a un número entero por si acaso
  let numero = parseInt(x);
  let base16 = "";

  // Cadena de referencia para los dígitos hexadecimales (0-9 y A-F)
  const digitosHex = "0123456789ABCDEF";

  // Mientras el número sea mayor que 0, seguimos dividiendo
  while (numero > 0) {
    let resto = numero % 16;
    base16 = digitosHex[resto] + base16; // Buscamos el carácter y lo ponemos al inicio
    numero = Math.floor(numero / 16); // Nos quedamos con el cociente entero
  }

  return base16;
}

let x = prompt("Ingrese un número a convertir a base 16: ");

while (
  isNaN(x) ||
  x.trim() === "" ||
  !Number.isInteger(Number(x)) ||
  Number(x) < 0
) {
  x = prompt("Por favor, ingrese un número válido: ");
  x = x.trim();
}

let numBase16 = convertToBase16(x);
alert("El número " + x + " en base 16 es: " + numBase16);
