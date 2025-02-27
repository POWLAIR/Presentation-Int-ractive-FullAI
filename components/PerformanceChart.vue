<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d')
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Livrés',
            data: [250, 270, 290, 310, 330],
            backgroundColor: '#4ade80',
            borderRadius: 5
          },
          {
            label: 'En retard',
            data: [40, 35, 30, 25, 20],
            backgroundColor: '#fbbf24',
            borderRadius: 5
          },
          {
            label: 'Annulés',
            data: [20, 18, 15, 12, 10],
            backgroundColor: '#f87171',
            borderRadius: 5
          },
          {
            label: 'Remboursements',
            data: [15, 12, 10, 8, 6],
            backgroundColor: '#60a5fa',
            borderRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: 'white',
              font: {
                size: 12
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'white'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'white'
            }
          }
        }
      }
    })
  }
})
</script>

<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>