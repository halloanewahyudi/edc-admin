<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import { Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from "chart.js";

// Register the necessary chart components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const chartData = ref(
  {
    labels: [
      '09:00', '09:10', '09:20', '09:30', '09:40', '09:50',
      '10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'
    ], // example time-based labels
    datasets: [
      {
        label: 'Example Data',
        color: '#42A5F5',
        data: [
          1000000, 1050000, 1200000, 1300000, 1200000, 1150000,
          5000000, 2000000, 2500000, 2300000, 2100000, 2000000, 1500000
        ], // example data
        backgroundColor: "#42A5F5",
        borderColor: "#42A5F5",
        fill: true,
        tension: 0.4,
        borderWidth: 1,
      },

    ],
  }
);

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
    },
    title: {
      display: true,
      text: 'Line Chart',
      color: '#E4E4E7',
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
      },
      beginAtZero: true,
      ticks: {
        color: '#F5F5F5',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Value',
        color: '#E4E4E7',
      },
      beginAtZero: true,
      ticks: {
        color: '#F5F5F5',
      },
    },
  },
})

</script>

<style scoped>
/* Add custom styling if needed */
</style>
