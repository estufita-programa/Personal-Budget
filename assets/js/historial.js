document.addEventListener('DOMContentLoaded', function() {
    const historialTransaccionesElement = document.getElementById('historialTransacciones');
    
    // Leer los gastos del localStorage
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    // Leer los ingresos del localStorage
    const ingresos = JSON.parse(localStorage.getItem('ingresos')) || [];
    
    if (gastos.length === 0 && ingresos.length === 0) {
        historialTransaccionesElement.innerHTML = '<p>No hay transacciones registradas.</p>';
        return;
    }
    
    // Mostrar el historial de gastos
    gastos.forEach(gasto => {
        historialTransaccionesElement.innerHTML += `
            <div class="transaccion">
                <p>Gasto</p>
                <p class="gasto">$${gasto.cantidad.toFixed(2)}</p>
                <p class="categoria">${gasto.categoria}</p>
                <p class="fechaHora">${gasto.fechaHora}</p>
            </div>
        `;
    });
    
    // Mostrar el historial de ingresos
    ingresos.forEach(ingreso => {
        historialTransaccionesElement.innerHTML += `
            <div class="transaccion">
                <p>Ingreso</p>
                <p class="ingreso">$${ingreso.cantidad.toFixed(2)}</p>
                <p class="fechaHora"> ${ingreso.fechaHora}</p>
            </div>
        `;
    });
});
