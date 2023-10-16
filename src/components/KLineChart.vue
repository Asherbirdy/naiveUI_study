<template>
  <div ref="main" style="width: 600px; height: 400px"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { CandlestickChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, CandlestickChart, CanvasRenderer]);

const main = ref<HTMLElement | null>(null);
const myChart = ref<echarts.ECharts | null>(null);
const option = {
  xAxis: {
    data: [
      "2017-10-24",
      "2017-10-25",
      "2017-10-26",
      "2017-10-27",
      "2017-10-28",
      "2017-10-29",
      "2017-10-30",
      "2017-10-31",
      "2017-11-01",
      "2017-11-02",
      "2017-11-03",
      "2017-11-04",
      "2017-11-05",
      "2017-11-06",
    ],
  },
  yAxis: {},
  series: [
    {
      type: "candlestick",
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
        [38, 15, 5, 42],
      ],
    },
  ],
};

onMounted(() => {
  console.log("main value:", main.value);
  // Initialize the chart when the component is mounted
  if (main.value) {
    myChart.value = echarts.init(main.value);
    myChart.value.setOption(option);
  } else {
    console.error("DOM element for the chart is invalid.");
  }
});
</script>

<style scoped>
/* Add your desired styles for the chart container */
#main {
  width: 600px;
  height: 400px;
}
</style>
