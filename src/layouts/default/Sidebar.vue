<template>
  <img
    src="@/assets/logo2.png"
    style="padding: 50px 50px 0px 50px; text-align: center"
  />
  <n-h3 style="text-align: center">
    <n-gradient-text
      :gradient="{
        from: 'rgb(240, 240, 240)',
        to: 'rgb(240, 240, 240)',
      }"
    >
      Quick Access
    </n-gradient-text>
  </n-h3>
  <n-menu :options="menuOptions" accordion />
  <n-h3 style="text-align: center">
    <n-gradient-text
      :gradient="{
        from: 'rgb(240, 240, 240)',
        to: 'rgb(240, 240, 240)',
      }"
    >
      Service
    </n-gradient-text>
  </n-h3>

  <n-h3 style="text-align: center">
    <n-gradient-text
      :gradient="{
        from: 'rgb(240, 240, 240)',
        to: 'rgb(240, 240, 240)',
      }"
    >
      Quick Access
    </n-gradient-text>
  </n-h3>
</template>

<script lang="ts" setup>
import { defineComponent, h } from "vue";
import { NIcon, NText } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  FishOutline as FishIcon,
  PawOutline as PawIcon,
  BagOutline as BagOutlineIcon,
} from "@vicons/ionicons5";

function renderIcon(icon: any, color: string) {
  return () => h(icon, { style: { color } });
}

const menuOptions: MenuOption[] = [
  {
    key: 0,
    label: () =>
      h(
        "p",
        {
          style: {},
        },
        {
          default: () => "Dashboard",
        }
      ),
    icon: renderIcon(FishIcon, "white"),
  },
];
</script>

<style>
.n-menu-item-content-header p {
  color: white;
}

.n-menu-item:hover .n-menu-item-content-header p {
  color: black;
}
</style>
