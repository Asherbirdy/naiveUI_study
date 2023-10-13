<template>
  <div ref="main" class="chart-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
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

const props = defineProps(["chartData", "chartColor"]);

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

const color = ref([255, 165, 0]);

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
        color: `rgba(${props.chartColor[0]}, ${props.chartColor[1]}, ${props.chartColor[2]}, 1)`, // Set the color of the line
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
              color: `rgba(${props.chartColor[0]}, ${props.chartColor[1]}, ${props.chartColor[2]}, 1)`, // Orange (fully opaque)
            },
            {
              offset: 0.2,
              color: `rgba(${props.chartColor[0]}, ${props.chartColor[1]}, ${props.chartColor[2]}, 0.7)`, // Semi-transparent
            },
            {
              offset: 1,
              color: `rgba(${props.chartColor[0]}, ${props.chartColor[1]}, ${props.chartColor[2]}, 0)`, // Fully transparent
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

const handleWindowResize = () => {
  if (myChart.value) {
    // 销毁旧的 ECharts 实例
    myChart.value.dispose();

    // 创建新的 ECharts 实例
    myChart.value = echarts.init(main.value);

    // 设置动画效果
    const newOption = {
      ...option,
      animation: true,
      animationDuration: 1000, // 设置动画持续时间（1秒）
    };

    myChart.value.setOption(newOption);
  }
};

// 监听视图数据变化
watch(
  () => props.chartData,
  () => {
    // 更新图表数据
    if (myChart.value) {
      myChart.value.setOption({
        series: [
          {
            data: props.chartData,
          },
        ],
      });
    }
  }
);

onMounted(() => {
  color.value = props.chartColor;
  if (main.value) {
    // 创建初始的 ECharts 实例
    myChart.value = echarts.init(main.value);
    myChart.value.setOption(option);
  }

  // 使用 debounce 确保在一秒钟内只调用一次 handleWindowResize
  const handleResize = debounce(handleWindowResize, 100);

  // 监听窗口大小变化事件
  window.addEventListener("resize", handleResize);
});

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  const result = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): void {
    const context = this;
    const later = function () {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };

  return result;
}
</script>

<style scoped>
.chart-container {
  width: 100%; /* 设置宽度为100% */
  max-width: 100%; /* 设置最大宽度为100% */
  height: 80px;
}
</style>
