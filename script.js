const inputUser = document.getElementById('user');// Obtiene el elemento <input> con id="user" y lo guarda en una variable para usarlo desde JavaScript.const inputPassword = document.getElementById('password');
const inputPassword = document.getElementById('password');// Obtiene el elemento <input> con id="password" y lo guarda en una variable para usarlo desde JavaScript.
const btnLogin = document.getElementById("loginbtn");
const formLogin = document.getElementById("formLogin");// Obtiene el elemento <form> con id="formLogin" y lo guarda en una variable para usarlo desde JavaScript.
const loginMessage = document.getElementById("loginMessage");

const usuarioCorrecto = "admin";
const passwordCorrecto = "123456";

formLogin.addEventListener('submit', iniciarSesion); 
function iniciarSesion(event) {
    event.preventDefault();// elimina el comportamiento por default del formulario, que es recargar la página al enviar el formulario
    const user = inputUser.value.trim(); // se usar la constante user para guardar el valor de lo que el usuario escriba en el input, obtenemos los datos para procesar el inicio de sesión
    const password = inputPassword.value.trim();
    const accesoPermitido = validarCredenciales(user, password);
    console.log(accesoPermitido);
  if (accesoPermitido) {
    mostrarMensaje("Inicio de sesión exitoso", "success");  
    
  }
  else {
    mostrarMensaje("Usuario o contraseña incorrectos", "error");
  }

}

function validarCredenciales(user, password) {
    const usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.nombre === user;

    });
        // Si find() no encuentra un usuario cuyo nombre sea igual a user,
        // devuelve undefined y usuarioEncontrado tendrá ese valor.

    if (usuarioEncontrado && usuarioEncontrado.password === password) {
        return true;
    }

    return false;

}


inputUser.addEventListener('input', validarFormulario);

// Lo primero que hacemos es agregar un evento de escucha al input del usuario, para que cada vez que el usuario escriba algo en el input, se ejecute la función validarFormulario. 
// Esto nos permite habilitar o deshabilitar el botón de login dependiendo de si los campos están llenos o no.
inputPassword.addEventListener('input', validarFormulario);
function validarFormulario() {
    const user = inputUser.value.trim(); // se usar la constante user para guardar el valor de lo que el usuario escriba en el input, obtenemos los datos para validar el formulario
    const password = inputPassword.value.trim();// trim se usa para eliminar los espacios en blanco al inicio y al final de la cadena de texto
if (user.length >= 3 && password.length >= 6) { // si el usuario y la contraseña no estan vacios y tienen al menos 3 caracteres
   btnLogin.disabled = false; // si el usuario y la contraseña no estan vacios se habilita el boton de login
} else {
    btnLogin.disabled = true;
}
}


function mostrarMensaje(texto, tipo) {

    loginMessage.textContent = texto;

    loginMessage.classList.remove("success", "error");

    loginMessage.classList.add(tipo);

}

const usuarios = [
    {
        nombre: "admin",
        password: "123456"
    },
    {
        nombre: "michelle",
        password: "qwerty"
    }
];
