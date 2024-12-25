<template>
  <div>
    <Bar :data="data" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const data = {
  labels: ['Success', 'Decline', 'Reversal', 'Timeout'],
  datasets: [
    {
      label: '# of Votes',
      data: [300, 100,200, 100 ],

      backgroundColor: [
        '#05966948',
        '#DC262648',
        '#7C3AED48',
        '#F59E0B48',
      ],
      borderColor: [
        '#10B981',
        '#B91C1C',
        '#A855F7',
        '#FBBF24',
      ],
      borderWidth: 1,
      
    },
  ],
}

const options = {
  indexAxis: 'x',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: 10,
    },
  },

    responsive: true,
  plugins: {
    legend: {
      position: 'top',
      },
    title: {
      display: true,
      text: 'time stamp per 10 minutes',
    },

  },
    title: {
      display: true,
      text: 'Sucess',
    },
  },
}
</script>

<style>

</style>