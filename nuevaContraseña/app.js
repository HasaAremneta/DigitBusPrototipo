// Función para alternar la visibilidad de la contraseña
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

// Manejar el envío del formulario
document.getElementById('reset-password-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
        return;
    }

    // Validar que la contraseña cumpla con los requisitos
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.');
        return;
    }

    alert('Contraseña restablecida con éxito.');
    // Redirigir al login
    window.location.href = '../Login/index.html';
});