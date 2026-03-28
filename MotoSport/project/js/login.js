// Credenciales predeterminadas (hardcoded)
const CREDENCIALES = {
    usuario: "admin",
    contrasena: "12345"
};

const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envie

    const usuario = document.getElementById("username").value;
    const contrasena = document.getElementById("password").value;

    if (usuario === CREDENCIALES.usuario && contrasena === CREDENCIALES.contrasena) {
        alert("Login exitoso");
        errorMsg.textContent = "";
       
         window.location.href = "index.html";
    } else {
        errorMsg.textContent = "Usuario o contrasena incorrectos.";
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 4e1f7b06e6e4c12f1c7833fabef1cdfaacba6779
