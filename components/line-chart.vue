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
      borderColor: '#05966948',
      backgroundColor: '#05966948',

    },
    {
      label: 'Decline',
      data: [100, 110, 120, 110, 100],
      fill: false,
      borderColor: '#DC262648',
      backgroundColor: '#DC262648',
    },
    {
      label: 'Reversal',
      data: [100, 110, 120, 112, 100],
      fill: false,
      borderColor: '#7C3AED48',
      backgroundColor: '#7C3AED48',

    },
    {
      label: 'Timeout',
      data: [100, 110, 120, 110, 100],
      fill: false,
      borderColor: '#F59E0B48',
      backgroundColor: '#F59E0B48',
    
    },
  ],
})

// Opsi untuk chart
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
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

</style>
