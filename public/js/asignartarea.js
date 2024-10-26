document.addEventListener('DOMContentLoaded', function () {
    const tecnicos = [
        { id: '1', nombre: 'Técnico 1' },
        { id: '2', nombre: 'Técnico 2' },
        { id: '3', nombre: 'Técnico 3' }
    ];

    const selects = document.querySelectorAll('.tecnico-select');

    // Llenar las opciones de técnicos en cada menú desplegable
    selects.forEach(select => {
        tecnicos.forEach(tecnico => {
            const option = document.createElement('option');
            option.value = tecnico.id;
            option.textContent = tecnico.nombre;
            select.appendChild(option);
        });
    });
});

// Función para asignar tarea al técnico seleccionado
function asignarTarea(reportId, tecnicoSelectId) {
    const tecnicoSelect = document.getElementById(tecnicoSelectId);
    const tecnicoSeleccionado = tecnicoSelect.options[tecnicoSelect.selectedIndex].text;

    if (tecnicoSelect.value) {
        alert(`Tarea del ${reportId} asignada a ${tecnicoSeleccionado}.`);
        // Aquí podrías añadir lógica para actualizar la asignación en la base de datos.
    } else {
        alert('Por favor, selecciona un técnico antes de asignar la tarea.');
    }
}
