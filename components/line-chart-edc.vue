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
            data: [
              1000000, 1050000, 1200000, 1300000, 1200000, 1150000,
              5000000, 2000000, 2500000, 2300000, 2100000, 2000000, 1500000
            ], // example data
            borderColor: "#42A5F5",
            backgroundColor: "rgba(66, 165, 245, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      }
);

const chartOptions = ref({
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Value',
            },
            beginAtZero: true,
          },
        },
      })

</script>

<style scoped>
/* Add custom styling if needed */
</style>
