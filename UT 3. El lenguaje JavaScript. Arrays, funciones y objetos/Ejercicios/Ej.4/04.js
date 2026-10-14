let nombre = prompt("Ingrese su nombre:");
let nombreServidor = prompt("Ingrese su nombre de servidor:");
let dominio = prompt("Ingrese su dominio:");

let correoElectronico = `${nombre}@${nombreServidor}.${dominio}`;
window.alert("Su correo electrónico es: " + correoElectronico);
