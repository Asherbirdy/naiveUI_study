<template>
  <div
    :style="{
      color: isPercentOverZero ? 'green' : 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4px',
    }"
  >
    {{ props.percent }}%

    <n-icon size="15" v-if="isPercentOverZero">
      <ArrowUpOutline />
    </n-icon>
    <n-icon size="15" v-else>
      <ArrowDownOutline />
    </n-icon>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ArrowUpOutline, ArrowDownOutline } from "@vicons/ionicons5";
const number = ref(100);

const props = defineProps(["percent"]);
const isPercentOverZero = props.percent >= 0;
</script>
<style></style>
