<script lang="ts" setup>
import { ref } from "vue";
import CryptoCurrency_Card from "@/components/CryptoCurrency_Card.vue";
import MarketCap from "@/components/MarketCap.vue";
import { useCryptoStore } from "@/stores/crypto";

const { cryptoData } = useCryptoStore();
const crypto = ref(cryptoData);
</script>

<template>
  <!-- 虛擬貨幣字卡 -->
  <div
    style="
      display: flex;
      justify-content: space-between;
      margin-bottom: 7px;
      gap: 4px;
    "
  >
    <div>
      <!-- 麵包 -->
      <n-breadcrumb separator=">">
        <n-breadcrumb-item>
          <n-icon> </n-icon>
          Home
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          <n-icon> </n-icon>
          Account
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          <n-icon> </n-icon>
          Category
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <!-- 加密貨幣 字卡按鈕-->
    <n-space>
      <n-button @click="">&lt;</n-button>
      <n-button @click="">&gt;</n-button></n-space
    >
  </div>

  <!-- 字卡區 -->
  <n-row gutter="12" style="margin-bottom: 20px">
    <n-col :span="6" v-for="(item, index) in crypto" :key="index">
      <CryptoCurrency_Card :cryptoData="item" />
    </n-col>
  </n-row>

  <!-- 左Ｋ線 右價格 -->
  <n-layout has-sider>
    <n-layout-content content-style="padding: 24px;">
      Pingshan Road
    </n-layout-content>
    <n-layout-sider :width="400" content-style="padding: 24px;">
      <MarketCap />
    </n-layout-sider>
  </n-layout>
</template>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}

.n-card > .n-card__content:first-child,
.n-card > .n-card__footer:first-child {
  padding-top: var(--n-padding-bottom);
}

.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
