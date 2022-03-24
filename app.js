const navToggle = document.querySelector(".nav__toggle");
const navUl = document.querySelector(".nav__ul");
const body = document.querySelector("body");

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navUl.classList.toggle("nav__ul__visible");

  if (navUl.classList.contains("nav__ul__visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

body.addEventListener("click", () => {
    navUl.classList.remove("nav__ul__visible");
});