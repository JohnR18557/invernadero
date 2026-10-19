# 🌹 Sistema Cognitivo de Monitoreo y Reporte por Voz (Text-to-Speech)
> **Módulo:** Análisis de Datos con Sistemas Inteligentes (Unidad 3 - Actividad 6)  
> **Estudiante:** Jhon Jairo Reales Ferrer  
> **Institución:** Corporación Universitaria Iberoamericana  

---

## 📌 Descripción del Proyecto
Aplicación web diseñada para la supervisión y control microclimático de un invernadero de rosas de exportación. El sistema captura la telemetría ambiental, evalúa reglas agronómicas y genera diagnósticos en lenguaje natural oral y escrito mediante servicios de computación cognitiva (Web Speech API).

### 🚀 Demostración en Vivo
* **Web App:** `[https://sites.google.com/view/ingjhonreales/](https://sites.google.com/view/ingjhonreales/)`

---

## ⚙️ Características Implementadas
- [x] **Simulación de Sensores:** Generación aleatoria controlada de datos de telemetría.
- [x] **Monitoreo de pH:** Incorporación del balance de acidez del suelo (6.0 a 6.8) junto a Temperatura y Humedad.
- [x] **Soporte Bilingüe:** Generación de diagnósticos semánticos en Español (`es-ES`) e Inglés (`en-US`).
- [x] **API Cognitiva de Voz (TTS):** Locución en tiempo real con control de tono y velocidad.

---

## 📊 Matriz de Evaluación Agronómica

| Parámetro | Rango Óptimo | Límite Crítico Inferior | Límite Crítico Superior |
| :--- | :---: | :---: | :---: |
| **Temperatura** | 18°C a 25°C | < 18°C | > 25°C |
| **Humedad** | 60% a 75% | < 60% | > 75% |
| **pH Suelo** | 6.0 a 6.8 | < 6.0 (Ácido) | > 6.8 (Alcalino) |

---

## 💻 Instrucciones de Ejecución Local
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/](https://github.com/)<tu-usuario>/invernadero-cognitivo-tts.git
