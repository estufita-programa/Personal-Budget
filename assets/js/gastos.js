document.addEventListener('DOMContentLoaded', function() {
    const botonAgregarGasto = document.getElementById('agregarGasto');
    
    botonAgregarGasto.addEventListener('click', function() {
        const nuevoGasto = parseFloat(document.getElementById('Gasto').value);
        const categoriaSeleccionada = document.getElementById('Categoria').value; // Capturar la categoría seleccionada
        
        if (!isNaN(nuevoGasto) && nuevoGasto > 0 && categoriaSeleccionada) {
            // Leer el ingreso fijo del localStorage
            let ingresoFijo = parseFloat(localStorage.getItem('ingresoFijo')) || 0;
            
            // Verificar si el nuevo gasto excede el ingreso fijo
            if (nuevoGasto > ingresoFijo) {
                mostrarError('El gasto excede el monto disponible.');
                return; // Detener la ejecución si el gasto excede
            }

            // Leer el total de gastos actual del localStorage
            let gastosActuales = JSON.parse(localStorage.getItem('gastos')) || [];
            
            // Obtener la fecha y hora actual
            const fechaHora = new Date().toLocaleString();
            
            // Crear un objeto para el nuevo gasto
            const nuevoGastoConFechaYCategoria = {
                cantidad: nuevoGasto,
                categoria: categoriaSeleccionada, // Incluir la categoría
                fechaHora: fechaHora
            };
            
            // Agregar el nuevo gasto al array de gastos
            gastosActuales.push(nuevoGastoConFechaYCategoria);
            
            // Guardar el array de gastos actualizado en localStorage
            localStorage.setItem('gastos', JSON.stringify(gastosActuales));
            
            // Actualizar el ingreso fijo en localStorage
            ingresoFijo -= nuevoGasto;
            localStorage.setItem('ingresoFijo', ingresoFijo.toFixed(2));
            
            // Redirigir a index.html
            window.location.href = 'index.html';
        } else {
            mostrarError('Por favor, ingrese un valor válido.');
        }
    });
});

function mostrarError(mensaje) {
    Swal.fire({
        icon: 'error',
        title: '¡Oops!',
        text: mensaje,
        confirmButtonText: 'Aceptar'
    });
}