document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

       // Validar que los campos no estén vacíos
        if (!validateInput(username, password)) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const storedUsername = sessionStorage.getItem('username');
        const storedPassword = sessionStorage.getItem('password');
        // Validar las credenciales
        if (username === storedUsername && password === storedPassword) {
            // Redirigir al menú principal
            window.location.href = '../Home/index.html';
        } else {
            alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        }
    });

    function validateInput(username, password) {
        return username.trim() !== '' && password.trim() !== '';
    }
});