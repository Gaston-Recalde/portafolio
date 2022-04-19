// Barra de navegación responsive
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

// Fin de barra de navegación

// Control de el Formulario
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
  const messageValue = message.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el nombre en blanco');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}

  if(messageValue === '') {
		setErrorFor(message, 'No puede dejar el mensaje en blanco');
	} else {
		setSuccessFor(message);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Alertas de Formulario
// const button = document.querySelector("#button");
// button.addEventListener("click", showAlert, showAlert2);

const showAlert = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: false,
        timer: 1500
      })
}

const showAlert2 = () => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Error, mensaje no enviado',
    showConfirmButton: false,
    timer: 1500
  })
}

form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
  event.preventDefault();

  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    this.reset();
    showAlert();
  } else {
    showAlert2();
  }
}