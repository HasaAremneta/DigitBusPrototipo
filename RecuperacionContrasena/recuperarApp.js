// filepath: d:\8vo cuatrimestre inge\Emprendimiento Digita\Prototipo\RecuperacionContrasena\recuperarApp.js
document.getElementById('recover-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const emailInput = document.getElementById('email').value;

    if (emailInput) {
        // Muestra una ventana de confirmación
        alert('El enlace de recuperación ha sido enviado correctamente a ' + emailInput);
    } else {
        // Muestra un mensaje de error si el campo está vacío (opcional)
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});