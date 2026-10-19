// Objeto de almacenamiento para las métricas capturadas
const metricasInvernadero = {
  temperatura: null,
  humedad: null,
  ph: null
};

/**
 * Simulación de telemetría proveniente de la red de sensores
 */
function leerSensores() {
  // Valores numéricos simulados acordes a la realidad operativa del invernadero
  metricasInvernadero.temperatura = Math.floor(Math.random() * (32 - 14 + 1)) + 14;   // 14 a 32 °C
  metricasInvernadero.humedad = Math.floor(Math.random() * (85 - 50 + 1)) + 50;         // 50 a 85 %
  metricasInvernadero.ph = (Math.random() * (7.6 - 5.4) + 5.4).toFixed(1);              // 5.4 a 7.6

  // Despliegue en la interfaz gráfica
  document.getElementById("f_temp").value = metricasInvernadero.temperatura + " °C";
  document.getElementById("f_hume").value = metricasInvernadero.humedad + " %";
  document.getElementById("f_ph").value = metricasInvernadero.ph;

  // Elaboración inmediata del reporte descriptivo
  procesarDiagnosticoTexto();
}

/**
 * Evaluación de variables y formulación en lenguaje natural bilingüe
 */
function procesarDiagnosticoTexto() {
  const idioma = document.getElementById("lang").value;
  let t = metricasInvernadero.temperatura;
  let h = metricasInvernadero.humedad;
  let p = parseFloat(metricasInvernadero.ph);

  let diagTemp = "", diagHum = "", diagPH = "";
  let informeFinal = "";

  if (idioma === "es") {
    // Diagnósticos en Español
    diagTemp = (t >= 18 && t <= 25) ? "Temperatura Normal" : (t < 18 ? "Temperatura Baja" : "Temperatura Alta");
    diagHum = (h >= 60 && h <= 75) ? "Humedad Normal" : (h < 60 ? "Humedad Baja" : "Humedad Alta");
    diagPH = (p >= 6.0 && p <= 6.8) ? "pH Óptimo" : (p < 6.0 ? "pH Ácido" : "pH Alcalino");

    informeFinal = `El invernadero presenta ${diagTemp}, ${diagHum} y ${diagPH}.`;
  } else {
    // Diagnósticos en Inglés
    diagTemp = (t >= 18 && t <= 25) ? "Normal Temperature" : (t < 18 ? "Low Temperature" : "High Temperature");
    diagHum = (h >= 60 && h <= 75) ? "Normal Humidity" : (h < 60 ? "Low Humidity" : "High Humidity");
    diagPH = (p >= 6.0 && p <= 6.8) ? "Optimal pH" : (p < 6.0 ? "Acidic pH" : "Alkaline pH");

    informeFinal = `The greenhouse reports ${diagTemp}, ${diagHum}, and ${diagPH}.`;
  }

  document.getElementById("reporte").value = informeFinal;
}

function cambiarIdioma() {
  if (metricasInvernadero.temperatura !== null) {
    procesarDiagnosticoTexto();
  }
}

/**
 * Invocación de la API Cognitiva Text-to-Speech (Web Speech API)
 */
function generarReporteHablado() {
  const texto = document.getElementById("reporte").value;
  const idioma = document.getElementById("lang").value;

  if (!texto) {
    alert("Por favor, capture primero los datos mediante el botón de lectura.");
    return;
  }

  if ('speechSynthesis' in window) {
    const locucion = new SpeechSynthesisUtterance(texto);
    locucion.lang = (idioma === "es") ? "es-ES" : "en-US";
    locucion.rate = 1.0; 
    locucion.pitch = 1.0;
    window.speechSynthesis.speak(locucion);
  } else {
    alert("El navegador en uso no cuenta con soporte nativo para síntesis de voz cognitiva.");
  }
}