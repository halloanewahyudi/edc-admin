<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Registering chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const chartData = ref({
  labels: [
    '09:00', '09:10', '09:20', '09:30', '09:40', '09:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'
  ], // time-based labels
  datasets: [
    {
      label: 'Response Code 58',
      color: '#42A5F5',
      data: [
        0, 0.2, 0, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0
      ], // response code data
      backgroundColor: "#42A5F5",
      borderColor: "#42A5F5",
      borderWidth: 1,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        color: '#F5F5F5',
      },
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Timestamp per 30 seconds',
      },
      beginAtZero: true,
      ticks: {
        color: '#F5F5F5',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Response Code',
      },
      beginAtZero: true,
      ticks: {
        color: '#F5F5F5',
      },
    }
  },
});

</script>

<style scoped>
/* You can add custom styles for the chart here */
</style>
