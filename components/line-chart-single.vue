<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register the necessary chart components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref(
  {
    labels: [
      '09:00', '09:10', '09:20', '09:30', '09:40', '09:50',
      '10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'
    ], // time-based labels
    datasets: [
      {
        label: 'Response Code 58',
        data: [
          0, 0.2, 0, 0, 0, 0,
          1, 0, 0, 0, 0, 0, 0
        ], // response code data
        backgroundColor: "#42A5F5",
        borderColor: "#42A5F5",
        borderWidth: 1,
      },
    ],
  }
)

const chartOptions = ref({
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Timestamp per 30 seconds',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Response Code',
      },
      min: 0,
      max: 1,
      stepSize: 0.2, // sets the step size on the Y-axis
    },
  },
})

</script>

<style scoped>
/* Add custom styling if needed */
</style>
