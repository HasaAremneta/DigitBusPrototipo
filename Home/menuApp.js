// Función para alternar el menú lateral
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    // Alterna la clase "open" para mostrar/ocultar el menú
    if (sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open'); // Ocultar menú
        setTimeout(() => {
            sideMenu.style.visibility = 'hidden'; // Ocultar visualmente después de la animación
        }, 300); // Tiempo igual al de la transición en el CSS
    } else {
        sideMenu.style.visibility = 'visible'; // Hacer visible antes de la animación
        sideMenu.classList.add('open'); // Mostrar menú
    }
}

// Función para actualizar la fecha y hora
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    const formattedTime = now.toLocaleTimeString('es-ES');
    dateTimeElement.textContent = `${formattedDate}, ${formattedTime}`;
}

// Función para alternar el menú desplegable del usuario
function toggleUserMenu() {
    const userMenu = document.getElementById('user-menu');
    // Alterna entre mostrar y ocultar el menú
    if (userMenu.style.display === 'block') {
        userMenu.style.display = 'none'; // Ocultar menú
    } else {
        userMenu.style.display = 'block'; // Mostrar menú
    }
}
// Función para cerrar sesión
function logout() {
    // Redirigir al login
    window.location.href = '../Login/index.html';
}

// Actualizar la fecha y hora cada segundo
setInterval(updateDateTime, 1000);
updateDateTime();