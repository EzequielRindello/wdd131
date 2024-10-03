// date js
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;

//windchill
// Definir valores estáticos de temperatura y velocidad del viento (en unidades métricas)
const temperatureC = 5; // Ejemplo: temperatura en grados Celsius
const windSpeedKmh = 10; // Ejemplo: velocidad del viento en km/h

// Función para calcular el factor de sensación térmica (Wind Chill)
function calculateWindChill(tempC, windKmh) {
  // Fórmula para calcular Wind Chill en unidades métricas (Celsius y km/h)
  // Fuente de la fórmula: https://en.wikipedia.org/wiki/Wind_chill#Modern_formula
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(2); // Redondea a dos decimales
}

// Función para mostrar la sensación térmica en la página
function displayWindChill() {
  const weatherSection = document.querySelector("#weather p:nth-child(4)");

  // Verificar si se cumplen las condiciones viables para calcular el Wind Chill
  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(temperatureC, windSpeedKmh);
    weatherSection.innerHTML = `Wind Chill: ${windChill} °C`; // Actualizar el contenido del párrafo
  } else {
    weatherSection.innerHTML = "Wind Chill: N/A"; // Si no se cumplen las condiciones
  }
}

// Ejecutar la función cuando la página cargue
window.onload = displayWindChill;
