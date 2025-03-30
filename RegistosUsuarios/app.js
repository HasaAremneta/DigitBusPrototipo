// Función para alternar la visibilidad de la contraseña
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Expresión regular para validar la contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validar que la contraseña cumpla con los requisitos
    if (!passwordRegex.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.');
        return; // Detener el envío del formulario
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
        return; // Detener el envío del formulario
    }
    
    sessionStorage.setItem('username', username); // Guardar el nombre de usuario en sessionStorage
    sessionStorage.setItem('password', password); // Guardar la contraseña en sessionStorage
    // Mostrar mensaje de registro exitoso
    alert('Su registro ha sido exitoso. Ahora puede iniciar sesión.');

    // Redirigir al login
    window.location.href = '../Login/index.html';
});

// Función para alternar la visibilidad de la contraseña
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Mostrar contraseña
    } else {
        passwordField.type = 'password'; // Ocultar contraseña
    }
}

