//const btn = document.querySelector("button");
//btn.addEventListener("click", () => alert("Hola"));
document.addEventListener("click", (event) => {
  if (event.target.matches("button")) alert("Hola");
});
const nuevoboton = document.createElement("button");
nuevoboton.textContent = "Nuevo Botón";
document.getElementById("placeholder").appendChild(nuevoboton);
