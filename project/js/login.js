// Credenciales predeterminadas (hardcoded)
const CREDENCIALES = {
    usuario: "admin",
    contraseña: "12345"
};

const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const usuario = document.getElementById("username").value;
    const contraseña = document.getElementById("password").value;

    if (usuario === CREDENCIALES.usuario && contraseña === CREDENCIALES.contraseña) {
        alert("¡Login exitoso!");
        errorMsg.textContent = "";
        // Aquí podrías redirigir a otra página:
        // window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos.";
    }
});
