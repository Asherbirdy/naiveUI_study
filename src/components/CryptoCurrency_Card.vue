<template>
  <div
    style="
      height: 120px;
      background-color: white;
      border: 1px solid #dfe5f9;
      border-radius: 5px;
      padding: 5px 8px;
    "
  >
    <n-space justify="space-between">
      <n-space align="center">
        <n-image width="20" :src="props.cryptoData.imageURL" />
        <n-space vertical>
          <n-p strong style="font-weight: bold"
            >{{ props.cryptoData.codeName }}
            <br />
            <div style="color: rgb(190, 190, 190); font-weight: 100">
              {{ props.cryptoData.cryptoName }}
            </div></n-p
          >
        </n-space>
      </n-space>

      <n-space vertical>
        <n-p>
          {{ props.cryptoData.currency }}
          {{ props.cryptoData.price }}
          <br />
          <div :style="{ color: isPercentOverZero ? 'green' : 'red' }">
            {{ props.cryptoData.percent }}%
            <n-icon size="15" v-if="isPercentOverZero">
              <ArrowUpOutline />
            </n-icon>
            <n-icon size="15" v-else>
              <ArrowDownOutline />
            </n-icon>
          </div>
        </n-p>
      </n-space>
    </n-space>
    <Echart
      style="margin: 0 auto; width: 100%"
      :chartData="props.cryptoData.chartData"
      :chartColor="props.cryptoData.color"
    />
  </div>
</template>

<script setup lang="ts">
import { ArrowUpOutline, ArrowDownOutline } from "@vicons/ionicons5";
const props = defineProps(["cryptoData"]);
const isPercentOverZero = props.cryptoData.percent >= 0;
</script>
