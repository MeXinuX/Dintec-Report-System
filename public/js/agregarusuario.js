document.addEventListener('DOMContentLoaded', function() {
    // Generar ID automáticamente
    const id = Date.now(); // Ejemplo: usar timestamp como ID único
    document.getElementById('id').value = id;

    // Manejar el envío del formulario
    document.getElementById('agregarUsuarioForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rol = document.getElementById('rol').value;
        const fechaCreacion = document.getElementById('fechaCreacion').value;
        const id = document.getElementById('id').value;

        // Aquí puedes agregar la lógica para guardar el nuevo usuario en la base de datos
        console.log("Usuario agregado:", { id, nombre, apellidos, email, password, rol, fechaCreacion });
        alert("Usuario agregado con éxito.");
        document.getElementById('agregarUsuarioForm').reset(); // Limpiar el formulario
    });
});
