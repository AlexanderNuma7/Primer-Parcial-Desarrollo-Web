// ================= HEADER Y FOOTER =================
// Carga el archivo header.html y lo inserta dentro del elemento con id="header"
fetch("components/header.html")
    .then(res => res.text()) // Convierte la respuesta a texto HTML
    .then(data => document.getElementById("header").innerHTML = data); // Lo coloca en la página

// Carga el archivo footer.html y lo inserta dentro del elemento con id="footer"
fetch("components/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);


// ================= CARGAR JSON =================
let motos = []; 
// Arreglo vacío donde se guardarán las motos del JSON

// Cargar archivo productos.json
fetch("data/productos.json")
    .then(res => {
        console.log("STATUS:", res.status); // Muestra el estado de la petición (200 = OK)
        console.log("URL FINAL:", res.url);
        return res.json(); // Convierte la respuesta a objeto JSON
    })
    .then(data => {
       console.log("DATA:", data);  // Guarda los datos en la variable motos
        motos = data; // Confirma que cargó bien
    })
    .catch(err => {
console.error("❌ ERROR CARGANDO JSON:"); });


// ================= MOSTRAR INFORMACIÓN DE UNA MOTO =================
function mostrarMoto(id) {

    // Si el JSON aún no ha cargado, muestra mensaje y detiene la función
    if (motos.length === 0) {
        alert("Las motos aún están cargando, intenta de nuevo");
        return;
    }

    // Busca la moto dentro del arreglo por su ID
    let moto = motos.find(m => m.id == id);

    // Si no existe la moto, muestra mensaje en consola
    if (!moto) {
        console.log("No encontrada:", id);
        return;
    }

    // Busca el contenedor HTML donde se mostrará la información de esa moto
    let contenedor = document.querySelector(`[data-moto="${id}"] .infoMoto`);

    // Si no existe el contenedor, muestra error
    if (!contenedor) {
        console.log("No existe el contenedor HTML");
        return;
    }

    // Limpia información de otras motos y quita clase activa
    document.querySelectorAll(".infoMoto").forEach(el => {
        el.innerHTML = "";
        el.classList.remove("activa");
    });

    // Inserta la información de la moto seleccionada en el HTML
    contenedor.innerHTML = `
        <p><b>Motor:</b> ${moto.motor}</p>
        <p><b>Potencia:</b> ${moto.potencia}</p>
        <p><b>Velocidad:</b> ${moto.velocidad}</p>
        <p><b>Tipo:</b> ${moto.tipo}</p>
        <p><b>Precio:</b> ${moto.precio}</p>
    `;

    // Activa estilos visuales para mostrarla destacada
    contenedor.classList.add("activa");
}


// -------------------- EFECTO MOUSE -----------------------------
// Hace que un elemento se mueva ligeramente según el movimiento del mouse
document.addEventListener("mousemove", (e) => {
    let cover = document.querySelector(".container__cover");

    if (!cover) return; // Si no existe el elemento, no hace nada

    // Calcula desplazamiento según posición del mouse
    let x = (e.clientX / window.innerWidth - 0.5) * 10;
    let y = (e.clientY / window.innerHeight - 0.5) * 10;

    // Aplica movimiento al elemento
    cover.style.transform = `translate(${x}px, ${y}px)`;
});



// ================= LOADER =================
// Oculta la pantalla de carga cuando la página termina de cargar
window.addEventListener("load", () => {
    let loader = document.getElementById("loader");

    if (loader) loader.style.display = "none"; // Oculta el loader
});



// ================= NAVBAR SCROLL =================
// Cambia el estilo del header cuando el usuario hace scroll
window.addEventListener("scroll", () => {
    let header = document.querySelector("header");

    if (!header) return;

    // Si baja más de 50px, agrega clase "scrolled"
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



// ================= ANIMACIONES SCROLL =================
// Selecciona todos los elementos con clase "animar"
const elementos = document.querySelectorAll(".animar");

// Cuando se hace scroll, revisa si los elementos están visibles
window.addEventListener("scroll", () => {
    elementos.forEach(el => {
        let top = el.getBoundingClientRect().top;

        // Si el elemento está cerca de entrar en pantalla, lo muestra
        if (top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});



// ================= WHATSAPP =================
// Abre WhatsApp con un mensaje automático ya escrito
function comprarMoto(nombre) {

    // Mensaje personalizado con el nombre de la moto
    let mensaje = `Hola, estoy interesado en la ${nombre}, ¿me puedes dar información?`;

    // URL de WhatsApp con número y mensaje codificado
    let url = `https://api.whatsapp.com/send?phone=573145882936&text=${encodeURIComponent(mensaje)}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(url, "_blank");
}