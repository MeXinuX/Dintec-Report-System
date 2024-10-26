document.addEventListener('DOMContentLoaded', function () {
    const clienteSelect = document.getElementById('cliente');
    const nombreCliente = document.getElementById('nombreCliente');
    const direccionCliente = document.getElementById('direccionCliente');
    const telefonoCliente = document.getElementById('telefonoCliente');
    const correoCliente = document.getElementById('correoCliente');
    const crearTareaForm = document.getElementById('crearTareaForm');

    // Simulación de la carga de clientes desde la base de datos
    const clientes = [
        {
            id: '1',
            nombre: 'Empresa A',
            direccion: 'Calle 1, Col. Centro',
            telefono: '555-001',
            correo: 'contacto@empresaa.com'
        },
        {
            id: '2',
            nombre: 'Empresa B',
            direccion: 'Calle 2, Col. Norte',
            telefono: '555-002',
            correo: 'contacto@empresab.com'
        },
        {
            id: '3',
            nombre: 'Empresa C',
            direccion: 'Calle 3, Col. Sur',
            telefono: '555-003',
            correo: 'contacto@empresac.com'
        }
    ];

    // Llenar el menú desplegable de clientes
    clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente.id;
        option.textContent = cliente.nombre;
        clienteSelect.appendChild(option);
    });

    // Llenar los datos del cliente al seleccionar
    clienteSelect.addEventListener('change', function () {
        const selectedClient = clientes.find(cliente => cliente.id === clienteSelect.value);
        if (selectedClient) {
            nombreCliente.value = selectedClient.nombre;
            direccionCliente.value = selectedClient.direccion;
            telefonoCliente.value = selectedClient.telefono;
            correoCliente.value = selectedClient.correo;
        } else {
            // Limpiar los campos si no hay selección
            nombreCliente.value = '';
            direccionCliente.value = '';
            telefonoCliente.value = '';
            correoCliente.value = '';
        }
    });

    // Manejo del envío del formulario
    crearTareaForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Aquí iría la lógica para crear la tarea
        console.log('Tarea creada con éxito');
    });
});
