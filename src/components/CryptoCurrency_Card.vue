<template>
  <div>
    <n-card class="green" title="tile" wrap="false" style="width: 100%">
      {{ props.cryptoData }}
    </n-card>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(["cryptoData"]);
</script>
<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
