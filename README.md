# Primer-Parcial-Desarrollo-Web
MotoSport es una aplicación web de una tienda de motos de diferentes cilindrajes desarrollada con HTML, CSS y JavaScript. Implementa modularización con componentes reutilizables como header, sidebar y footer. Incluye login con validación, uso de plantillas &lt;template>, carga de productos desde JSON con Fetch API y Web Components.

## ⚠️ Aviso de Seguridad

Este proyecto implementa un sistema de login básico utilizando credenciales quemadas en el código JavaScript.

⚠️ IMPORTANTE:
Este método es únicamente con fines educativos y NO es seguro para aplicaciones reales.

Razones:
- Las credenciales están visibles en el código fuente.
- No existe encriptación ni autenticación en servidor.
- Puede ser fácilmente vulnerado.


1️⃣ Fragmentos, Plantillas y Web Components

Fragmentos (DocumentFragment)
Es un contenedor ligero para nodos DOM que no está en el documento principal.
Permite agregar múltiples elementos al DOM de manera eficiente, evitando re-renderizados repetidos.

Plantillas (<template>)
Elemento HTML que contiene marcado que no se renderiza hasta que lo clones con JS.
Ideal para generar contenido dinámico sin duplicar HTML en el DOM.

Web Components
Tecnología para crear componentes reutilizables y encapsulados en HTML, CSS y JS.
Se implementa con Custom Elements y Shadow DOM para aislar estilos.


2️⃣ Implementación del Formulario de Inicio de Sesión
El formulario está en una sección centrada, con inputs para usuario y contraseña.
Validación mínima en JavaScript, verificando que los campos no estén vacíos.


3️⃣ Buenas Prácticas Aplicadas
Uso de fetch y JSON`: para separar datos de la lógica de presentación.
Modularidad: header y footer cargados con fetch desde archivos separados.
Variables CSS (:root): para colores y estilos consistentes.
Animaciones CSS y transiciones: para mejorar UX sin sobrecargar JS.
Validación de inputs: HTML5 y JS para evitar errores de envío.
Responsive Design: Flexbox y max-width para adaptarse a varias pantallas.
Feedback visual: mensajes de notificación y cambios de hover.


