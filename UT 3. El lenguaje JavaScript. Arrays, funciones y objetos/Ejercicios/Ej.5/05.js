let numeros = [];

document.write("<table border='1'>");
document.write("<tr><th>n</th><th>n!</th></tr>");

for (let i = 1; i <= 25; i++) {
  let factorial = 1;

  for (let j = 1; j <= i; j++) {
    factorial *= j;
  }

  numeros.push(factorial);

  document.write("<tr>");
  document.write("<td>" + i + "</td>");
  document.write("<td>" + numeros[i - 1] + "</td>");
  document.write("</tr>");
}

document.write("</table>");
