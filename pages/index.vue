<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <!-- <Bar :data="chartData" :options="chartOptions" class="!h-[450px]" /> -->
  <client-only placeholder="Loading..." fallback="Loading Chart...">
    <apexchart
      type="area"
      height="400"
      :options="options"
      :series="series"
    ></apexchart>
  </client-only>
  <v-btn variant="outlined" :loading="true"> Button </v-btn>
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
const options = ref({
  chart: {
    type: "area",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    labels: {
      format: "MMM",
      showDuplicates: false,
    },
  },
  tooltip: {
    enable: "false",
  },
  yaxis: {
    opposite: true,
    show: false,
  },
  legend: {
    horizontalAlign: "left",
  },
});

const series = ref([
  {
    name: "จำนวนเงิน",
    data: [
      {
        x: new Date("2023-07-11").getTime(),
        y: 76,
      },
      {
        x: new Date("2023-08-12").getTime(),
        y: 50,
      },
      {
        x: new Date("2023-09-13").getTime(),
        y: 60,
      },
      {
        x: new Date("2023-10-14").getTime(),
        y: 20,
      },
      {
        x: new Date("2023-11-15").getTime(),
        y: 80,
      },
    ],
  },
]);
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>

<style></style>
