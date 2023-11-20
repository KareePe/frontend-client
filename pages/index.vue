<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <Bar :data="chartData" :options="chartOptions" class="!h-[150px]" />

  <font-awesome-icon icon="fa-brands fa-twitter-square" />
  <font-awesome-icon icon="fa-brands fa-youtube-square" />
  <font-awesome-icon icon="fa-brands fa-github-square" />
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ref } from "vue";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 20, 12, 50, 10],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
    maintainAspectRatio: false,
});
</script>

<style></style>
