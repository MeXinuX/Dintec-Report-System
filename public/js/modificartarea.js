// Cargar datos del cliente al seleccionar cliente y cargar datos del reporte según el ID de la URL
document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo de los clientes
    const clientes = [
        { id: "1", nombre: "Cliente A", direccion: "Av. Principal #123", telefono: "555-1234", correo: "clientea@example.com" },
        { id: "2", nombre: "Cliente B", direccion: "Calle Secundaria #456", telefono: "555-5678", correo: "clienteb@example.com" }
    ];

    // Datos de ejemplo de los reportes
    const reportes = [
        { id: "1", clienteId: "1", motivo: "Problema de conexión", solicitante: "Juan Pérez", receptor: "Ana López", horario: "09:00" },
        { id: "2", clienteId: "2", motivo: "Error en el sistema", solicitante: "Carlos Gómez", receptor: "Laura Ríos", horario: "14:00" }
    ];

    const clienteSelect = document.getElementById('cliente');
    const nombreCliente = document.getElementById('nombreCliente');
    const direccionCliente = document.getElementById('direccionCliente');
    const telefonoCliente = document.getElementById('telefonoCliente');
    const correoCliente = document.getElementById('correoCliente');
    const motivoServicio = document.getElementById('motivoServicio');
    const solicitante = document.getElementById('solicitante');
    const receptor = document.getElementById('receptor');
    const horarioAtencion = document.getElementById('horarioAtencion');

    // Obtener el ID del reporte desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const reporteId = urlParams.get('reporteId');

    // Cargar opciones de cliente en el menú desplegable
    clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente.id;
        option.textContent = cliente.nombre;
        clienteSelect.appendChild(option);
    });

    // Cargar datos del reporte según el ID
    const reporte = reportes.find(rep => rep.id === reporteId);
    if (reporte) {
        const cliente = clientes.find(cli => cli.id === reporte.clienteId);
        
        if (cliente) {
            clienteSelect.value = cliente.id;
            nombreCliente.value = cliente.nombre;
            direccionCliente.value = cliente.direccion;
            telefonoCliente.value = cliente.telefono;
            correoCliente.value = cliente.correo;
        }

        motivoServicio.value = reporte.motivo;
        solicitante.value = reporte.solicitante;
        receptor.value = reporte.receptor;
        horarioAtencion.value = reporte.horario;
    }

    // Evento al cambiar de cliente
    clienteSelect.addEventListener('change', function() {
        const selectedCliente = clientes.find(cliente => cliente.id === clienteSelect.value);
        if (selectedCliente) {
            nombreCliente.value = selectedCliente.nombre;
            direccionCliente.value = selectedCliente.direccion;
            telefonoCliente.value = selectedCliente.telefono;
            correoCliente.value = selectedCliente.correo;
        } else {
            nombreCliente.value = "";
            direccionCliente.value = "";
            telefonoCliente.value = "";
            correoCliente.value = "";
        }
    });

    // Evento de envío del formulario
    document.getElementById('modificarTareaForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Tarea modificada con éxito.");
        // Aquí puedes agregar la lógica para guardar los cambios en la base de datos
    });
});
