const plantillaBoton = {
  tipo: "button",
  render() {
    const btn = document.createElement("button");
    btn.textContent = this.label || "Click";
    btn.className = this.className || "default";
    return btn;
  },
};
const botonExito = Object.create(plantillaBoton);
botonExito.label = "Éxito";
botonExito.className = "btn-success";

const botonPeligro = Object.create(plantillaBoton);
botonPeligro.label = "Borrar";
botonPeligro.className = "btn-danger";

document.body.appendChild(botonExito.render());
document.body.appendChild(botonPeligro.render());
