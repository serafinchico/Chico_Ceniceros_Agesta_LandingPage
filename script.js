// FORM
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let edad = document.getElementById("edad").value;

    document.getElementById("mensaje").innerText =
    "Muchas gracias " + nombre + " (" + edad + " años), te contactaremos en " + mail;

    this.reset();
});

// ANIMACIONES
const elementos = document.querySelectorAll(".animado");

function mostrar() {
  elementos.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", mostrar);
mostrar();