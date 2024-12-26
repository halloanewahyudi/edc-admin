<!-- components/LineChart.vue -->
<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { ref } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

// Registrasi komponen Chart.js yang dibutuhkan
ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale)

// Data untuk chart
const chartData = ref({
  labels: ['09.00', '09.05', '09.10', '09.15', '09.20'],
  datasets: [
    {
      label: 'Sucess',
      data: [120, 140, 160, 140, 120],
      fill: false,
      borderColor: '#5ABD7D',
      backgroundColor: '#5ABD7D',
      borderWidth: 1,
      color: '#fff',
    },
    {
      label: 'Decline',
      data: [100, 110, 120, 110, 100],
      fill: false,
      borderColor: '#DC2626',
      backgroundColor: '#DC2626',
      borderWidth: 1,
    },
    {
      label: 'Reversal',
      data: [100, 110, 120, 112, 100],
      fill: false,
      borderColor: '#7C3AED',
      backgroundColor: '#7C3AED',
      borderWidth: 1,
    },
    {
      label: 'Timeout',
      data: [90, 110, 120, 110, 90],
      fill: false,
      borderColor: '#F59E0B',
      backgroundColor: '#F59E0B',
      borderWidth: 1,
    },
  ],
})

// Opsi untuk chart
const chartOptions = ref({
  responsive: true,
  // maintainAspectRatio: false,
  scales: {

    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 100,
        color: '#A3A3A3',
      },
    },
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          color: '#A3A3A3',
        },
      }
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',

      },
    },
    title: {
      display: true,
      text: 'time stamp per 10 minutes',
    },
  },
})
</script>

<style scoped>
 canvas {
    @apply !text-neutral-400
 }
</style>
