const form = document.querySelector("form");
form.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.matches("button.validate"))
    document.getElementById("display").textContent = "Validating...";
});
