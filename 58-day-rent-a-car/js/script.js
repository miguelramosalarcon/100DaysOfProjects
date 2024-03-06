// Obtener elementos del DOM
var pickupDateInput = document.getElementById('pickup_date');
var deliveryDateInput = document.getElementById('delivery');
var timePickupInput = document.getElementById('time-pickup');

// Obtener la fecha y hora actual del sistema
var today = new Date();
var yyyy = today.getFullYear();
var mm = String(today.getMonth() + 1).padStart(2, '0');
var dd = String(today.getDate()).padStart(2, '0');
var hours = String(today.getHours()).padStart(2, '0');
var minutes = String(today.getMinutes()).padStart(2, '0');

// Formatear la fecha actual como yyyy-MM-dd (formato aceptado por el input type="date")
var formattedDate = yyyy + '-' + mm + '-' + dd;

// Formatear la hora actual en el formato "HH:MM"
var defaultTime = hours + ':' + minutes;

// Establecer la fecha actual como valor por defecto del input de fecha de recogida y entrega
pickupDateInput.value = formattedDate;
deliveryDateInput.min = formattedDate;

// Establecer la hora actual como valor por defecto del input de tiempo para la recogida
timePickupInput.value = defaultTime;
