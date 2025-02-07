// Funciones de Activación
function gaussian(x) {
  return Math.exp(-Math.pow(x, 2));
}

function step(x) {
  return x >= 0 ? 1 : 0;
}

function exponential(x) {
  return Math.exp(x);
}

function logarithmic(x) {
  return x > 0 ? Math.log1p(x) : null; // Evitar log(0) o valores negativos
}

function sigmoidal(x) {
  return 1 / (1 + Math.exp(-x));
}

// Datos para las gráficas
const labels = Array.from({ length: 200 }, (_, i) => (i - 100) / 20);

const data = {
  labels: labels,
  datasets: [
      {
          label: 'Gaussiana',
          data: labels.map(gaussian),
          borderColor: 'rgba(255, 99, 132, 1)', // Rojo
          borderWidth: 2,
          fill: false,
          pointRadius: 0, // Sin puntos para mejor claridad
      },
      {
          label: 'Escalón',
          data: labels.map(step),
          borderColor: 'rgba(54, 162, 235, 1)', // Azul
          borderWidth: 2,
          fill: false,
          pointRadius: 0,
      },
      {
          label: 'Exponencial',
          data: labels.map(exponential),
          borderColor: 'rgba(75, 192, 192, 1)', // Verde
          borderWidth: 2,
          fill: false,
          pointRadius: 0,
      },
      {
          label: 'Logarítmica',
          data: labels.map(x => logarithmic(x + 1)), // Ajuste para evitar log(0)
          borderColor: 'rgba(153, 102, 255, 1)', // Morado
          borderWidth: 2,
          fill: false,
          pointRadius: 0,
      },
      {
          label: 'Sigmoidal',
          data: labels.map(sigmoidal),
          borderColor: 'rgba(255, 159, 64, 1)', // Naranja
          borderWidth: 2,
          fill: false,
          pointRadius: 0,
      }
  ]
};

// Configuración de la gráfica
const config = {
  type: 'line',
  data: data,
  options: {
      responsive: true,
      interaction: {
          mode: 'index',
          intersect: false,
      },
      plugins: {
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: 'Funciones de Activación Mejoradas'
          },
          tooltip: {
              enabled: true,
              mode: 'index',
              intersect: false,
          }
      },
      scales: {
          x: {
              type: 'linear',
              title: {
                  display: true,
                  text: 'x'
              },
              min: -5,
              max: 5,
          },
          y: {
              title: {
                  display: true,
                  text: 'f(x)'
              },
              min: -0.5,
              max: 2.5,
          }
      }
  },
};

// Crear la gráfica
const activationFunctionsChart = new Chart(
  document.getElementById('activationFunctionsChart'),
  config
);