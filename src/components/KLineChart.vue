<template>
  <n-space justify="space-between" align="center">
    <n-space align="start">
      <n-p>BTC</n-p>/
      <n-dropdown
        placement="bottom-start"
        trigger="click"
        size="small"
        :options="options"
      >
        <n-space style="cursor: pointer" align="center">
          <n-text>JYP</n-text>
          <n-icon :component="ChevronDownOutline" />
        </n-space>
      </n-dropdown>
    </n-space>

    <n-button type="info">BUY NOW</n-button>
  </n-space>
  <div
    ref="main"
    style="width: width: 100%;max-width: 100%; height: 100%;"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { CandlestickChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { ChevronDownOutline } from "@vicons/ionicons5";
echarts.use([GridComponent, CandlestickChart, CanvasRenderer]);
const options = [
  {
    label: "USD",
    key: "USD",
  },
  {
    label: "TWD",
    key: "TWD",
  },
  {
    label: "MVC",
    key: "MVC",
  },
];
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
        [58, 30, 35, 12],
        [40, 25, 33, 4],
        [31, 15, 5, 42],
        [58, 45, 5, 42],
        [38, 15, 5, 12],
        [38, 15, 5, 12],
        [31, 1, 5, 42],
        [38, 15, 5, 42],
        [20, 15, 5, 12],
        [31, 38, 33, 44],
        [38, 15, 5, 50],
      ],
      itemStyle: {
        color: "#8434CA",
        color0: "#72C0DC",
      },
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

onMounted(() => {
  // Initialize the chart when the component is mounted
  if (main.value) {
    myChart.value = echarts.init(main.value);
    myChart.value.setOption(option);
  } else {
    console.error("DOM element for the chart is invalid.");
  }
  const handleResize = debounce(handleWindowResize, 100);

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
/* Add your desired styles for the chart container */
#main {
  width: 600px;
  height: 400px;
}
</style>
