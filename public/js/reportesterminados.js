// Datos de ejemplo de reportes terminados
const reportesTerminados = [
    {
        id: 1,
        cliente: "Cliente A",
        motivo: "Problema de conexión",
        fechaServicio: "2024-10-26",
        descripcionServicio: "Se resolvió el problema de conexión en la red.",
        firmaCliente: "Juan Pérez"
    },
    {
        id: 2,
        cliente: "Cliente B",
        motivo: "Error en el sistema",
        fechaServicio: "2024-10-25",
        descripcionServicio: "Se solucionó el error del sistema de gestión.",
        firmaCliente: "Carlos Gómez"
    }
];
// Cargar los reportes terminados en la tabla
document.addEventListener("DOMContentLoaded", function () {
    const reportesTableBody = document.getElementById("reportesTableBody");

    reportesTerminados.forEach((reporte) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${reporte.id}</td>
            <td>${reporte.cliente}</td>
            <td>${reporte.motivo}</td>
            <td>${reporte.fechaServicio}</td>
            <td>${reporte.descripcionServicio}</td>
            <td>${reporte.firmaCliente}</td>
        `;
        reportesTableBody.appendChild(row);
    });
});
