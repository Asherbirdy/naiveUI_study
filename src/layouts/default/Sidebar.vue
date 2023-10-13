<template>
  <img
    src="@/assets/logo2.png"
    style="padding: 50px 50px 0px 50px; text-align: center"
  />
  <n-h3> Quick Access </n-h3>
  <n-menu :options="menuOptions" accordion />
</template>

<script lang="ts" setup>
import { h } from "vue";
import type { MenuOption } from "naive-ui";
import { FishOutline as FishIcon } from "@vicons/ionicons5";

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

.n-h3 {
  color: white;
  text-align: center;
}
</style>
