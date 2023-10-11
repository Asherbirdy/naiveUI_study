<script setup lang="ts">
import { RouterView, useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { computed, watch } from "vue";

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const default_layout = "default";
const layout = computed(() => {
  return `${route.meta.layout || default_layout}-layout`;
});
</script>

<template>
  <n-config-provider>
    <n-global-style />
    <n-notification-provider>
      <Component :is="layout">
        <RouterView />
      </Component>
    </n-notification-provider>
  </n-config-provider>
</template>
