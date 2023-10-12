<template>
  <n-space align="center" justify="space-between">
    <n-space align="center" justify="center">
      <n-icon size="30">
        <ReorderFourOutline />
      </n-icon>
      <n-icon size="30">
        <CubeOutline />
      </n-icon>
      <n-input
        type="text"
        placeholder="Type any cryptocurrency..."
        round
        clearable
      >
      </n-input
    ></n-space>
    <n-space align="center" justify="center">
      <n-avatar
        round
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-icon size="30"> <SettingsOutline /></n-icon>
      <n-badge :value="value">
        <n-avatar />
      </n-badge>
      <n-avatar
        round
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      /> </n-space
  ></n-space>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import {
  SearchOutline,
  ReorderFourOutline,
  SettingsOutline,
  CubeOutline,
} from "@vicons/ionicons5";

const value = ref(2);
</script>

<style>
.n-input-wrapper {
  color: red;
}
</style>
