<template>
  <div
    :style="{
      color: isPercentOverZero ? '#01C0AA' : 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2px',
    }"
  >
    <div v-show="isPercentOverZero">+</div>
    {{ props.percent }}%

    <n-icon size="15" :component="arrowIcon" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ArrowUpOutline, ArrowDownOutline } from "@vicons/ionicons5";
const props = defineProps(["percent"]);

// 如果 crypto 的 percent 低於 0
const isPercentOverZero = computed(() => props.percent >= 0);

// 根據 percent 是「 正數 」還是 「 負數 」來顯示箭頭
const arrowIcon = computed(() =>
  isPercentOverZero.value ? ArrowUpOutline : ArrowDownOutline
);
</script>
