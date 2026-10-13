function sumaPares(pares) {
  for (let i = 0; i <= 100; i += 2) {
    pares += i;
  }

  return pares;
}

function sumaImpares(impares) {
  for (let i = 1; i <= 99; i += 2) {
    impares += i;
  }

  return impares;
}
