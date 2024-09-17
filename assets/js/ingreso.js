document.addEventListener('DOMContentLoaded', function() {
    try {
        const botonGuardar = document.getElementById('guardarIngreso');
        
        if (!botonGuardar) {
            throw new Error('El botón de guardar ingreso no se encontró.');
        }
        
        botonGuardar.addEventListener('click', function() {
            const nuevoIngreso = parseFloat(document.getElementById('Ingreso').value);
            
            if (!isNaN(nuevoIngreso) && nuevoIngreso > 0) {
                // Leer el ingreso actual del localStorage
                let ingresoFijoActual = parseFloat(localStorage.getItem('ingresoFijo')) || 0;
                
                // Sumar el nuevo ingreso al ingreso actual
                let ingresoFijoTotal = ingresoFijoActual + nuevoIngreso;
                
                // Guardar el nuevo total en localStorage
                localStorage.setItem('ingresoFijo', ingresoFijoTotal.toFixed(2));
                
                // Leer los ingresos del localStorage
                let ingresos = JSON.parse(localStorage.getItem('ingresos')) || [];
                
                // Obtener la fecha y hora actual
                const fechaHora = new Date().toLocaleString();
                
                // Crear un objeto para el nuevo ingreso
                const nuevoIngresoConFecha = {
                    cantidad: nuevoIngreso,
                    fechaHora: fechaHora
                };
                
                // Agregar el nuevo ingreso al array de ingresos
                ingresos.push(nuevoIngresoConFecha);
                
                // Guardar el array de ingresos actualizado en localStorage
                localStorage.setItem('ingresos', JSON.stringify(ingresos));
                
                // Mostrar mensaje de éxito con SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Ingreso agregado con éxito.',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    // Redirigir a index.html después de que el usuario cierre el mensaje de éxito
                    window.location.href = 'index.html';
                });
            } else {
                // Mostrar mensaje de error con SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: '¡Oops!',
                    text: 'Por favor, ingrese un valor válido.',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    } catch (error) {
        mostrarError('Hubo un problema al procesar su solicitud.');
    }
});