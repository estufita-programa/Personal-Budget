document.addEventListener('DOMContentLoaded', function() {
    const ingresoFijoElement = document.getElementById('ingresoFijo');
    const ingresoGastadoElement = document.getElementById('ingresoGastado');
    const resumenGastosElement = document.getElementById('resumenGastos');
    
    // Leer el ingreso fijo del localStorage
    let ingresoFijo = parseFloat(localStorage.getItem('ingresoFijo')) || 0;
    ingresoFijoElement.textContent = ingresoFijo.toFixed(2);
    
    // Leer los gastos del localStorage
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    const totalGastos = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);
    
    // Actualizar el valor de ingresoGastado
    ingresoGastadoElement.textContent = totalGastos.toFixed(2);
    
    // Mostrar el resumen de gastos
    resumenGastosElement.innerHTML = '';
    gastos.forEach(gasto => {
        resumenGastosElement.innerHTML += `<p class="gasto">${gasto.cantidad.toFixed(2)} </p><p>Categoria: ${gasto.categoria}</p><p class="fechaHora">${gasto.fechaHora}</p>`;
    });
});
