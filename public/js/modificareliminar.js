// Datos de ejemplo de reportes
const reportes = [
    { id: 1, cliente: "Empresa A", motivo: "Problema de conexión", fecha: "2024-10-26" },
    { id: 2, cliente: "Empresa B", motivo: "Error en el sistema", fecha: "2024-10-25" }
];

// Cargar los reportes en la tabla
document.addEventListener("DOMContentLoaded", function () {
    const reportTableBody = document.getElementById("reportTableBody");

    reportes.forEach((reporte) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${reporte.id}</td>
            <td>${reporte.cliente}</td>
            <td>${reporte.motivo}</td>
            <td>${reporte.fecha}</td>
            <td>
                <button class="modify-btn" onclick="modificarReporte(${reporte.id})">Modificar</button>
                <button class="delete-btn" onclick="eliminarReporte(${reporte.id})">Eliminar</button>
            </td>
        `;
        reportTableBody.appendChild(row);
    });
});

// Función para redirigir a la página de modificar reporte
function modificarReporte(id) {
    // Redirige a la página de modificación con el ID del reporte en la URL
    window.location.href = `modificartarea.html?reporteId=${id}`;
}

// Función para eliminar reporte
function eliminarReporte(id) {
    const confirmed = confirm(`¿Estás seguro de que deseas eliminar el reporte con ID: ${id}?`);
    if (confirmed) {
        alert(`Reporte con ID ${id} eliminado.`);
        // Aquí puedes añadir la lógica para eliminar el reporte de la base de datos
    }
}
