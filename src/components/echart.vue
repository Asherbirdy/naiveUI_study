<template>
  <div>
    <div ref="main" style="width: 250px; height: 80px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

const props = defineProps(["chartData"]);

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

const main = ref<HTMLElement | null>(null);
const myChart = ref<echarts.ECharts | null>(null);

const option = {
  color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: [""],
  },
  toolbox: {
    feature: {},
  },
  grid: {
    show: false, // Hide the grid
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLine: {
        show: false, // Hide the x-axis line
      },
      axisTick: {
        show: false, // Hide the x-axis ticks
      },
      splitLine: {
        show: false, // Hide the x-axis grid lines
      },
      axisLabel: {
        show: false, // Hide the x-axis labels
      },
    },
  ],

  yAxis: [
    {
      type: "value",
      axisLine: {
        show: false, // Hide the y-axis line
      },
      axisTick: {
        show: false, // Hide the y-axis ticks
      },
      splitLine: {
        show: false, // Hide the y-axis grid lines
      },
      axisLabel: {
        show: false, // Hide the y-axis labels
      },
    },
  ],
  series: [
    {
      name: "",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 1, // Set the width of the line
        type: "solid", // Set the type of the line (solid, dashed, dotted, etc.)
        color: "orange", // Set the color of the line
      },
      showSymbol: false,
      silent: true, // Disable interactions for this series
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255, 165, 0, 1)", // Orange (fully opaque)
            },
            {
              offset: 0.7,
              color: "rgba(255, 165, 0, 0.3)", // Semi-transparent
            },
            {
              offset: 1,
              color: "rgba(255, 165, 0, 0)", // Fully transparent
            },
          ],
        },
      },
      emphasis: {
        focus: "series",
      },
      data: props.chartData,
    },
  ],
};

onMounted(() => {
  if (main.value) {
    myChart.value = echarts.init(main.value);
    myChart.value.setOption(option);
  }
});
</script>
